<?php

namespace abryrath\craftsyncdb\util;

use abryrath\syncdb\util\LoggerInterface;
use yii\helpers\Console;

class Logger implements LoggerInterface
{
    protected $console;
    protected $levels = [
        'info' => CONSOLE::FG_GREEN,
        'error' => CONSOLE::FG_RED,
        'normal' => CONSOLE::FG_YELLOW,
    ];

    public function __construct($console)
    {
        $this->console = $console;
    }

    public function log(string $text, string $level = 'normal'): void
    {
        $this->console->stdout($text, $this->levels[$level]);
        $this->console->stdout(PHP_EOL);
    }

    public function logCmd(string $text): void
    {
        $text = preg_replace('/\-\-password=\"(.*)\"/', '--password="*****"', $text);
        $this->log(PHP_EOL . '[Command]', 'normal');
        $this->log('$ ' . $text, 'normal');
    }

    public function logOutput(array $output): void
    {
        if (!count($output)) {
            return;
        }

        $this->log('[Output]', 'info');
        foreach ($output as $line) {
            $this->log($line, 'info');
        }
    }
}
