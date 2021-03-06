<?php

namespace unionco\craftsyncdb\services;

use Craft;
use craft\helpers\Json;
use craft\base\Component;
use unionco\craftsyncdb\SyncDbPlugin;
use unionco\syncdb\models\Environment;
use Symfony\Component\Yaml\Yaml;

class CpService extends Component
{
    public static $config;

    const ENV_PRODUCTION = 'production';
    const ENV_STAGING = 'staging';
    const ENV_DEV = 'dev';

    public static $environmentHierarchy = [
        self::ENV_PRODUCTION => 3,
        self::ENV_STAGING => 2,
        self::ENV_DEV => 1,
    ];

    public function init()
    {
        if (!self::$config && SyncDbPlugin::getInstance()->syncDb) {
            self::$config = SyncDbPlugin::getInstance()->syncDb->getSettings();
        }
    }

    public function sourceOptions(): array
    {
        $currentEnv = self::parseEnv(CRAFT_ENVIRONMENT);
        $availableEnvs = self::$config->environments;

        $filteredEnvs = array_filter(
            $availableEnvs,
            /**
             * @param array $env,
             * @return bool
             */
            function ($env) use ($currentEnv) {
                return self::$environmentHierarchy[$env->environment] >= self::$environmentHierarchy[$currentEnv];
            }
        );

        $options = [];
        foreach ($filteredEnvs as $key => $env) {
            $options[] = [
                'label' => $env->host . ' (' . $key . ')',
                'value' => $key,
                // 'data-env' => Json::encode($env)
            ];
        }

        return $options;
    }

    public static function parseEnv($env): string
    {
        if (strpos(self::ENV_PRODUCTION, $env) !== false) {
            return self::ENV_PRODUCTION;
        } elseif (strpos(self::ENV_STAGING, $env) !== false) {
            return self::ENV_STAGING;
        } else {
            return self::ENV_DEV;
        }
    }

    public function getEnvironmentSettingsHtml(Environment $env)
    {
        $output = '<table>';
        foreach (get_object_vars($env) as $name => $val) {
            $output .= "<tr><td class=\"settings-name\">$name</td><td class=\"settings-value\">{$val}</td></tr>";
        }
        $output .= "</table>";

        return $output;
    }

    /**
     * Convert PHP config file (<v0.7.0) to new YAML config file
     * @return bool
     */
    public function convertConfigFile(): bool
    {
        $configPath = Craft::$app->getPath()->getConfigPath();
        $phpConfigFile = $configPath . '/syncdb.php';
        $yamlConfigFile = $configPath . '/syncdb.yaml';

        $config = null;
        if (file_exists($phpConfigFile)) {
            $config = require $phpConfigFile;
            // 'remotes' -> 'environments'
            if (key_exists('remotes', $config)) {
                $config['environments'] = [];
                foreach ($config['remotes'] as $remote) {
                    $config['environments'][] = $remote;
                }
                unset($config['remotes']);
            }
            // 'globals>skipTables' -> 'skipTables'
            if (key_exists('globals', $config)) {
                $globals = $config['globals'];
                if (key_exists('ignoredTables', $globals)) {
                    $config['skipTables'] = $globals['ignoredTables'];
                    unset($globals['ignoredTables']);
                }
                unset($config['globals']);
            }
        } else {
            $config = [
                'skipTables' => [],
                'environments' => [],
            ];
        }

        $yaml = Yaml::dump($config, 20, 2);
        try {
            return file_put_contents($yamlConfigFile, $yaml) !== false;
        } catch (\Throwable $e) {
            return false;
        }
    }

    public function writeSettings(array $settings)
    {
        $yaml = Yaml::dump($settings, 20, 2);
        if ($yaml != file_get_contents(SyncDbPlugin::$yamlConfigFile)) {
            file_put_contents(SyncDbPlugin::$yamlConfigFile, $yaml);
        }
    }
}
