(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)a=o[d],r[a]&&p.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"383c":function(t,e,n){},"42cb":function(t,e,n){"use strict";var s=n("383c"),r=n.n(s);r.a},"4e2c":function(t,e,n){"use strict";var s=n("ff05"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s,r,i,a,o,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"field",attrs:{"data-status":""}},[t._m(0),n("div",{attrs:{id:"status"},domProps:{innerHTML:t._s(t.statusText)}})]),n("div",{staticClass:"field"},[t._m(1),t.showSpinner?n("div",{staticClass:"spinner",attrs:{id:"spinner"}}):t._e(),t.logOutput?n("pre",[n("code",{domProps:{innerHTML:t._s(t.logOutput)}})]):t._e()])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("label",{attrs:{for:"status"}},[t._v("Status")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("label",[t._v("Output")])])}],u=(n("28a5"),n("ac6a"),n("d225")),d=n("b0b4"),p=n("308d"),f=n("6bb5"),v=n("013f"),b=n("4e2b"),g=n("bd86"),h=n("60a3"),m=(s=Object(h["a"])({props:{env:String,logFile:String}}),s((i=function(t){function e(){var t,n;Object(u["a"])(this,e);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return n=Object(p["a"])(this,(t=Object(f["a"])(e)).call.apply(t,[this].concat(r))),Object(g["a"])(Object(v["a"])(n),"statusText","Initializing"),Object(g["a"])(Object(v["a"])(n),"showSpinner",!1),Object(g["a"])(Object(v["a"])(n),"logOutput",""),Object(g["a"])(Object(v["a"])(n),"secondsBeforeRedirect",4),Object(g["a"])(Object(v["a"])(n),"cpUrl",void 0),Object(g["a"])(Object(v["a"])(n),"redirectUrl",void 0),n}return Object(b["a"])(e,t),Object(d["a"])(e,[{key:"created",value:function(){void 0!==window.Craft&&(this.cpUrl=window.Craft.getCpUrl(),this.redirectUrl="".concat(this.cpUrl,"/sync-db"))}},{key:"mounted",value:function(){console.log("mounted"),this.makeRequest(!0)}},{key:"makeRequest",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n={env:this.$props.env,logFile:this.$props.logFile};e&&(this.showSpinner=!0,this.statusText="Running Sync",window.Craft.postActionRequest("".concat(this.cpUrl,"/sync-db/sync/start"),n,function(e,n){t.showSpinner=!1,e.output&&(t.setLogOutput(e.output),window.Craft.cp.displayNotice("Success! Page will reload"),t.redirect())}.bind(this)))}},{key:"setLogOutput",value:function(t){var e="";t.split(/\n/).forEach(function(t){!1!==t.indexOf("NOTICE")?e+='<span class="log-notice">'+t+"</span><br/>":!1!==t.indexOf("INFO")?e+='<span class="log-info">'+t+"</span><br/>":!1!==t.indexOf("DEBUG")?e+='<span class="log-debug">'+t+"</span><br/>":!1!==t.indexOf("ERROR")&&(e+='<span class="log-error">'+t+"</span><br/>")}),this.logOutput=e}},{key:"redirect",value:function(){var t=this;this.secondsBeforeRedirect<1&&(window.location.href=this.redirectUrl),this.statusText="Redirecting in ".concat(this.secondsBeforeRedirect," seconds"),setTimeout(function(){t.secondsBeforeRedirect-=1,t.redirect()},1e3)}}]),e}(h["b"]),r=i))||r),O=m,y=(n("42cb"),n("2877")),w=Object(y["a"])(O,c,l,!1,null,null,null),_=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"col"},[n("input",{attrs:{name:"timeoutInMs",type:"hidden",value:"1000"}}),n("div",{staticClass:"field",attrs:{id:"source-field"}},[t._m(0),n("div",{staticClass:"input ltr"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSource,expression:"selectedSource"}],attrs:{id:"source",name:"env"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedSource=e.target.multiple?n:n[0]},t.sourceChanged]}},t._l(t.sources,function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}),0)])])]),n("div",{staticClass:"field",attrs:{id:"logFile-field"}},[n("div",{staticClass:"heading"},[n("label",{attrs:{id:"logFile-label",for:"logFile"}},[t._v("Log File")]),n("div",{staticClass:"instructions"},[n("p",[t._v("Log files are stored in "+t._s(t.storagePath))])])]),n("div",{staticClass:"input ltr"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.logFileName,expression:"logFileName"}],staticClass:"text fullwidth",attrs:{type:"text",id:"logFile",name:"logFile",autocomplete:"off"},domProps:{value:t.logFileName},on:{input:function(e){e.target.composing||(t.logFileName=e.target.value)}}})])]),n("button",{staticClass:"btn submit",attrs:{type:"submit"}},[t._v("Start")])])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("label",{attrs:{id:"source-label",for:"source"}},[t._v("Source")])])}],C=(a=Object(h["a"])({props:{sourcesJson:String,timestamp:String,storagePath:String,environmentsJson:String}}),a(o=function(t){function e(){return Object(u["a"])(this,e),Object(p["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(d["a"])(e,[{key:"data",value:function(){return{sources:JSON.parse(this.$props.sourcesJson),selectedSource:JSON.parse(this.$props.sourcesJson)[0].value,environments:JSON.parse(this.$props.environmentsJson)}}},{key:"created",value:function(){void 0!==window.Craft&&(this.cpUrl=window.Craft.getCpUrl())}},{key:"sourceChanged",value:function(t){var e=t.target;this.selectedSource=e.value}},{key:"logFileName",get:function(){return"syncdb_".concat(this.selectedSource,"_").concat(this.$props.timestamp,".log")}}]),e}(h["b"]))||o),x=C,k=(n("4e2c"),Object(y["a"])(x,j,S,!1,null,"3860548a",null)),F=k.exports,N={install:function(t){t.component("sync-output",_),t.component("sync-settings",F)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(N)},"8bbf":function(t,e){t.exports=Vue},ff05:function(t,e,n){}});
//# sourceMappingURL=app.js.map