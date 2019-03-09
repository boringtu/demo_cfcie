function _typeof(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(t){return typeof t}:_typeof=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(function(){define("alpha",[],function(){"use strict";return window.ALPHA={initAttrs:{name:{maxlength:16},phone:{maxlength:11}},API_PATH:{WS:{url:"/api/chat",SEND_CODE:{MESSAGE:1},RECEIVE_CODE:{p2p:{MESSAGE:1,QUEUENUM:4,CLOSED:5}},p2p:function(){return"/user/".concat(ALPHA.userId,"/c/chatting")},send:"/c/chatting"},common:{timestamp:"/api/common/timestamp",upload:"/api/common/upload",conf:"/api/common/conf"},user:{init:"/api/user/init","new":"/api/user/new",history:"/api/user/history"}},twemoji:{params:{base:"/",folder:"images/twemoji",ext:".png"},list:["1F600","1F601","1F602","1F603","1F604","1F605","1F606","1F607","1F608","1F609","1F60A","1F60B","1F60C","1F60D","1F60E","1F60F","1F610","1F611","1F612","1F613","1F614","1F615","1F616","1F617","1F618","1F619","1F61A","1F61B","1F61C","1F61D","1F61E","1F61F","1F620","1F621","1F622","1F623","1F624","1F625","1F626","1F627","1F628","1F629","1F62A","1F62B","1F62C","1F62D","1F62E","1F62F","1F630","1F631","1F632","1F633","1F634","1F635","1F636","1F637","1F638","1F639","1F63A","1F63B","1F63C","1F63D","1F63E","1F63F","1F640","1F641","1F642","1F643","1F644","1F910","1F911","1F912","1F913","1F914","1F915","1F916","1F917","1F920","1F921","1F922","1F923","1F924","1F925","1F927","1F928","1F929","1F92A","1F92B","1F92C","1F92D","1F92E","1F92F","1F970","1F973","1F974","1F975","1F976","1F97A","1F9D0","2639","263A","2620","2622","2623","2626","262A","262E","262F","2638","2648","2649","264A","264B","264C","264D","264E","264F","2650","2651","2652","2653","269b","26ce","2695","2640","2642","265F","2660","2663","2665","2666","2668","267B","267F","26A0","26A1","26AB","26AA","2B1B","2B1C","2B50","2B55","3030","303D"]}},window.ALPHA})}).call(void 0),!function(e){"use strict";function t(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function n(e,t){return e<<t|e>>>32-t}function r(e,r,i,s,o,u){return t(n(t(t(r,e),t(s,u)),o),i)}function i(e,t,n,i,s,o,u){return r(t&n|~t&i,e,t,s,o,u)}function s(e,t,n,i,s,o,u){return r(t&i|n&~i,e,t,s,o,u)}function o(e,t,n,i,s,o,u){return r(t^n^i,e,t,s,o,u)}function u(e,t,n,i,s,o,u){return r(n^(t|~i),e,t,s,o,u)}function a(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;var r,a,f,l,c,h=1732584193,p=-271733879,d=-1732584194,v=271733878;for(r=0;r<e.length;r+=16)a=h,f=p,l=d,c=v,p=u(p=u(p=u(p=u(p=o(p=o(p=o(p=o(p=s(p=s(p=s(p=s(p=i(p=i(p=i(p=i(p,d=i(d,v=i(v,h=i(h,p,d,v,e[r],7,-680876936),p,d,e[r+1],12,-389564586),h,p,e[r+2],17,606105819),v,h,e[r+3],22,-1044525330),d=i(d,v=i(v,h=i(h,p,d,v,e[r+4],7,-176418897),p,d,e[r+5],12,1200080426),h,p,e[r+6],17,-1473231341),v,h,e[r+7],22,-45705983),d=i(d,v=i(v,h=i(h,p,d,v,e[r+8],7,1770035416),p,d,e[r+9],12,-1958414417),h,p,e[r+10],17,-42063),v,h,e[r+11],22,-1990404162),d=i(d,v=i(v,h=i(h,p,d,v,e[r+12],7,1804603682),p,d,e[r+13],12,-40341101),h,p,e[r+14],17,-1502002290),v,h,e[r+15],22,1236535329),d=s(d,v=s(v,h=s(h,p,d,v,e[r+1],5,-165796510),p,d,e[r+6],9,-1069501632),h,p,e[r+11],14,643717713),v,h,e[r],20,-373897302),d=s(d,v=s(v,h=s(h,p,d,v,e[r+5],5,-701558691),p,d,e[r+10],9,38016083),h,p,e[r+15],14,-660478335),v,h,e[r+4],20,-405537848),d=s(d,v=s(v,h=s(h,p,d,v,e[r+9],5,568446438),p,d,e[r+14],9,-1019803690),h,p,e[r+3],14,-187363961),v,h,e[r+8],20,1163531501),d=s(d,v=s(v,h=s(h,p,d,v,e[r+13],5,-1444681467),p,d,e[r+2],9,-51403784),h,p,e[r+7],14,1735328473),v,h,e[r+12],20,-1926607734),d=o(d,v=o(v,h=o(h,p,d,v,e[r+5],4,-378558),p,d,e[r+8],11,-2022574463),h,p,e[r+11],16,1839030562),v,h,e[r+14],23,-35309556),d=o(d,v=o(v,h=o(h,p,d,v,e[r+1],4,-1530992060),p,d,e[r+4],11,1272893353),h,p,e[r+7],16,-155497632),v,h,e[r+10],23,-1094730640),d=o(d,v=o(v,h=o(h,p,d,v,e[r+13],4,681279174),p,d,e[r],11,-358537222),h,p,e[r+3],16,-722521979),v,h,e[r+6],23,76029189),d=o(d,v=o(v,h=o(h,p,d,v,e[r+9],4,-640364487),p,d,e[r+12],11,-421815835),h,p,e[r+15],16,530742520),v,h,e[r+2],23,-995338651),d=u(d,v=u(v,h=u(h,p,d,v,e[r],6,-198630844),p,d,e[r+7],10,1126891415),h,p,e[r+14],15,-1416354905),v,h,e[r+5],21,-57434055),d=u(d,v=u(v,h=u(h,p,d,v,e[r+12],6,1700485571),p,d,e[r+3],10,-1894986606),h,p,e[r+10],15,-1051523),v,h,e[r+1],21,-2054922799),d=u(d,v=u(v,h=u(h,p,d,v,e[r+8],6,1873313359),p,d,e[r+15],10,-30611744),h,p,e[r+6],15,-1560198380),v,h,e[r+13],21,1309151649),d=u(d,v=u(v,h=u(h,p,d,v,e[r+4],6,-145523070),p,d,e[r+11],10,-1120210379),h,p,e[r+2],15,718787259),v,h,e[r+9],21,-343485551),h=t(h,a),p=t(p,f),d=t(d,l),v=t(v,c);return[h,p,d,v]}function f(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function l(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function c(e){return f(a(l(e),8*e.length))}function h(e,t){var n,r,i=l(e),s=[],o=[];for(s[15]=o[15]=void 0,i.length>16&&(i=a(i,8*e.length)),n=0;n<16;n+=1)s[n]=909522486^i[n],o[n]=1549556828^i[n];return r=a(s.concat(l(t)),512+8*t.length),f(a(o.concat(r),640))}function p(e){var t,n,r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return r}function d(e){return unescape(encodeURIComponent(e))}function v(e){return c(d(e))}function m(e){return p(v(e))}function g(e,t){return h(d(e),d(t))}function y(e,t){return p(g(e,t))}function b(e,t,n){return t?n?g(t,e):y(t,e):n?v(e):m(e)}"function"==typeof define&&define.amd?define("md5",[],function(){return b}):"object"==typeof module&&module.exports?module.exports=b:e.md5=b}(this),function(){var e={}.hasOwnProperty;define("utils",["jquery","md5"],function(t){"use strict";var n,r,i,s;return n=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"clone",value:function(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,i,s,o;if(_typeof(n)!=="object"||n==null)return n;if(n instanceof Date)return s=new Date,s.setTime(n.getTime()),s;s=n instanceof Array?[]:{};for(i in n){if(!e.call(n,i))continue;o=n[i],r&&_typeof(o)==="object"?s[i]=this.clone(o):s[i]=o}return s}},{key:"getUrlParams",value:function(){var t,n,r,i,s,o;t={},s=location.search;if(!s)return t;s=location.search.slice(1).split("&");for(r=0,i=s.length;r<i;r++)n=s[r],o=n.split("="),t[o[0]]=o[1];return t}},{key:"ajax",value:function(r,i){var s,o,u,a,f;o=i.method||"GET",delete i.method,i.type=o,i.url=r,i.contentType="application/json;charset=UTF-8",i.dataType="json",i.processData=!1,i.data&&(i.data=JSON.stringify(i.data));if(i.params){u="",a=i.params;for(s in a){if(!e.call(a,s))continue;f=a[s],u+="&".concat(s,"=").concat(f||"")}u="?"+u.slice(1),i.url+=u,delete i.params}return t.ajax(i)}},{key:"calcOffsetTop",value:function(t){var n;n=0;for(;;){n+=t.offsetTop;if(!(t=t.offsetParent))break}return n}},{key:"setSelection",value:function(t,n,r){var i;if(t.value.length===0)return 0;r||(r=t.value.length);if(t.createTextRange)return i=t.createTextRange(),i.collapse(!0),i.moveEnd("character",r),i.moveStart("character",n),i.select();if(t.setSelectionRange)return t.focus(),t.setSelectionRange(n,r)}},{key:"cursorPosition",value:function(t,r){var i,s;return i=0,r!=null?t.value.length===0?0:n.setSelection(t,r,r):document.selection?(t.focus(),s=document.selection.createRange(),s.moveStart("character",-t.value.length),s.text.length):t.selectionStart}},{key:"focusEnd",value:function(t){return n.cursorPosition(t,t.value.length),t}}]),n}(),i=function(t){var n,r,i,s,o,u,a,f,l,c,h,p;return s=t.date||this,p=s.getFullYear(),r=s.getMonth()+1,r=(r+"").length>1?r:"0"+r,i=s.getDate(),i=(i+"").length>1?i:"0"+i,n=s.getHours(),n=(n+"").length>1?n:"0"+n,a=s.getMinutes(),a=(a+"").length>1?a:"0"+a,h=s.getSeconds(),h=(h+"").length>1?h:"0"+h,o=t.hasDate,u=t.hasTime,f=o?p+"-"+r+"-"+i:"",l=u?n+":"+a+":"+h:"",c="".concat(f).concat(o&&u?" ":"").concat(l),s=void 0,c},r=function(t){return typeof t=="string"&&(t=new Date(t)),new Date(t.setDate(1))},s=function(t){var n;return typeof t=="string"&&(t=new Date(t)),t=new Date(t.setDate(1)),n=t.setMonth(t.getMonth()+1)-864e5,new Date(n)},Date.prototype.getFormatDate=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this;return i.call(this,{date:e,hasDate:1})},Date.prototype.getFormatTime=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this;return i.call(this,{date:e,hasTime:1})},Date.prototype.getFormatDateAndTime=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this;return i.call(this,{date:e,hasDate:1,hasTime:1})},Date.prototype.firstDayOfMonth=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this;return r.call(this,e)},Date.prototype.lastDayOfMonth=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this;return s.call(this,e)},Date.prototype.beforeDays=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;return new Date(t.getTime()-e*1e3*60*60*24)},Date.prototype.afterDays=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;return new Date(t.getTime()+e*1e3*60*60*24)},Date.prototype.beforeMonths=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;return new Date(t.setMonth(t.getMonth()-e))},Date.prototype.afterMonths=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;return new Date(t.setMonth(t.getMonth()+e))},String.prototype.toJSON=function(){return JSON.parse(this)},String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},String.prototype.md5=function(){return md5.apply(null,[this].concat([].slice.apply(arguments)))},String.prototype.encodeHTML=function(e){var t,n,r;return this?(t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},e?(n=/&(?!#?\w+;)|<|>|"|'|\//g,this.replace(n,function(e){return t[e]||e})):(n=/<\/?\s*(script|iframe)[\s\S]*?>/gi,r=this.replace(n,function(e){var n;switch(!0){case/script/i.test(e):n="script";break;case/iframe/i.test(e):n="iframe";break;default:n=""}return"".concat(t["<"]).concat(-1===e.indexOf("/")?"":t["/"]).concat(n).concat(t[">"])}),r.replace(/on[\w]+\s*=/gi,""))):this},Array.prototype.has=function(e){return this.indexOf(e)!==-1},Array.prototype.last=function(){return this[this.length-1]},Array.prototype.remove=function(e){var t;return t=this.indexOf(e),t===-1?null:(this.splice(t,1)[0],this.length)},window.Utils=n})}.call(void 0),function(){function o(){var e={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=/&(?!#?\w+;)|<|>|"|'|\//g;return function(){return this?this.replace(t,function(t){return e[t]||t}):this}}function p(e,t,n){return(typeof t=="string"?t:t.toString()).replace(e.define||i,function(t,r,i,s){return r.indexOf("def.")===0&&(r=r.substring(4)),r in n||(i===":"?(e.defineParams&&s.replace(e.defineParams,function(e,t,i){n[r]={arg:t,text:i}}),r in n||(n[r]=s)):(new Function("def","def['"+r+"']="+s))(n)),""}).replace(e.use||i,function(t,r){e.useParams&&(r=r.replace(e.useParams,function(e,t,r,i){if(n[r]&&n[r].arg&&i)return e=(r+":"+i).replace(/'|\\/g,"_"),n.__exp=n.__exp||{},n.__exp[e]=n[r].text.replace(RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+i+"$2"),t+"def.__exp['"+e+"']"}));var i=(new Function("def","return "+r))(n);return i?p(e,i,n):i})}function m(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var j={version:"1.0.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1},template:undefined,compile:undefined},q;typeof module!="undefined"&&module.exports?module.exports=j:typeof define=="function"&&define.amd?define("doT",[],function(){return j}):(q=function(){return this||(0,eval)("this")}(),q.doT=j),String.prototype.encodeHTML=o();var r={append:{start:"'+(",end:")+'",endencode:"||'').toString().encodeHTML()+'"},split:{start:"';out+=(",end:");out+='",endencode:"||'').toString().encodeHTML();out+='"}},i=/$^/;j.template=function(e,t,n){t=t||j.templateSettings;var s=t.append?r.append:r.split,u,a=0,f;e=t.use||t.define?p(t,e,n||{}):e,e=("var out='"+(t.strip?e.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):e).replace(/'|\\/g,"\\$&").replace(t.interpolate||i,function(e,t){return s.start+m(t)+s.end}).replace(t.encode||i,function(e,t){return u=!0,s.start+m(t)+s.endencode}).replace(t.conditional||i,function(e,t,n){return t?n?"';}else if("+m(n)+"){out+='":"';}else{out+='":n?"';if("+m(n)+"){out+='":"';}out+='"}).replace(t.iterate||i,function(e,t,n,r){return t?(a+=1,f=r||"i"+a,t=m(t),"';var arr"+a+"="+t+";if(arr"+a+"){var "+n+","+f+"=-1,l"+a+"=arr"+a+".length-1;while("+f+"<l"+a+"){"+n+"=arr"+a+"["+f+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||i,function(e,t){return"';"+m(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|\}|^|\{)out\+=''\+/g,"$1out+="),u&&t.selfcontained&&(e="String.prototype.encodeHTML=("+o.toString()+"());"+e);try{return new Function(t.varname,e)}catch(l){throw typeof console!="undefined"&&console.log("Could not create a template function: "+e),l}},j.compile=function(e,t){return j.template(e,null,t)}}(),define("text",["module"],function(e){"use strict";function v(e,t){return e===undefined||""===e?t:e}var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f="undefined"!=typeof location&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};return t={version:"2.0.15",strip:function(e){if(e){var t=(e=e.replace(u,"")).match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,s=e.lastIndexOf("."),o=0===e.indexOf("./")||0===e.indexOf("../");return-1!==s&&(!o||1<s)?(t=e.substring(0,s),n=e.substring(s+1)):t=e,-1!==(s=(r=n||t).indexOf("!"))&&(i="strip"===r.substring(s+1),r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);return!a||(s=a[2],u=(o=(o=a[3]).split(":"))[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||function(t,n,r,i){if(n===i)return!0;if(t===r){if("http"===t)return v(n,"80")===v(i,"80");if("https"===t)return v(n,"443")===v(i,"443")}return!1}(s,u,n,i)))},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)},load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText)r();else{d.isBuild=i&&i.isBuild;var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;0!==u.indexOf("empty:")?!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)}):r()}},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";t.load(a,r,function(n){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},t.write(e,a,r,s)},s)}},"node"===d.env||!d.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");"﻿"===i[0]&&(i=i.substring(1)),t(i)}catch(s){r&&r(s)}}):"xhr"===d.env||!d.env&&t.createXhr()?t.get=function(e,n,r,i){var s,o=t.createXhr();if(o.open("GET",e,!0),i)for(s in i)i.hasOwnProperty(s)&&o.setRequestHeader(s.toLowerCase(),i[s]);d.onXhr&&d.onXhr(o,e),o.onreadystatechange=function(t){var i,s;4===o.readyState&&(399<(i=o.status||0)&&i<600?((s=new Error(e+" HTTP status: "+i)).xhr=o,r&&r(s)):n(o.responseText),d.onXhrComplete&&d.onXhrComplete(o,e))},o.send(null)}:"rhino"===d.env||!d.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var n,r,i=new java.io.File(e),s=java.lang.System.getProperty("line.separator"),o=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),"utf-8")),u="";try{for(n=new java.lang.StringBuffer,(r=o.readLine())&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&n.append(r);null!==(r=o.readLine());)n.append(s),n.append(r);u=String(n.toString())}finally{o.close()}t(u)}:("xpconnect"===d.env||!d.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,o,u,a={};s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{(n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream)).init(u,1,0,!1),(o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream)).init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}}),t}),define("text!../templates/headbar.tpl",[],function(){return'<a class="logo" href="{{= it.logo_href }}" target="_blank">\n	<img src="{{= it.logo_media_id }}" height="40" />\n</a>\n<button class="close" @click="eventCloseTheChat">\n	<i class="icon icon-close"></i>\n</button>\n<div class="closing-confirm-box">\n	<span class="box-arrow"><i></i></span>\n	<p>确定要结束对话吗？</p>\n	<div>\n		<button data-type="default" @click="confirmToClose = 0">取消</button>\n		<button data-type="primary" @click="confirmToClose = 0, closingTheChat()">确定</button>\n	</div>\n</div>\n'}),define("text!../templates/advertisingbar.tpl",[],function(){return'<a href="{{= it.right_ad_href }}" target="_blank">\n	<img src="{{= it.right_ad_media_id }}" />\n</a>\n'}),define("text!../templates/historyItems.tpl",[],function(){return'{{~ it :item }}\n<div class="chat-content" data-timeline="{{= item.hasTimeline }}">\n	{{? item.hasTimeline }}\n	<div class="time-line">{{= item.timeline }}</div>\n	{{?}}\n	<div class="clear {{= item.sideClass }}">\n		<div class="msg-bubble">\n			<div class="msg-content">{{! item.innerHTML }}</div>\n		</div>\n		<div class="msg-arrow"><i></i></div>\n	</div>\n</div>\n{{~}}\n'}),define("text!../templates/initBox.tpl",[],function(){return'<div class="dialog-box init-box">\n	<div class="dialog-mask"></div>\n	<div class="dialog-content">\n		<div class="line"></div>\n		{{? it.msg.length > 0 }} <h2>{{= it.msg }}</h2> {{?}}\n\n\n\n		<ul>\n{{~ it.list :item }}\n	{{ if (item.ban) continue; }}\n				<li>\n					<label>{{= item.name }}{{? item.require }}<i>*</i>{{?}}</label>\n					<input name="{{= item.filed }}"\n	{{\n		var attrs = ALPHA.initAttrs[item.filed] || {};\n		for (var k in attrs) {\n			v = attrs[k];\n	}}\n						{{= \' \' + k + \'="\' + v + \'"\' }}\n	{{\n		}\n	}}\n					>\n				</li>\n{{~}}\n\n		</ul>\n		<div>\n			<button>立即咨询</button>\n		</div>\n	</div>\n</div>\n'}),define("text!../templates/closedNotice.tpl",[],function(){return'<p class="closed-notice">客服已结束对话，如再次联系客服请重新打开页面</p>\n'}),define("text!../templates/faceItems.tpl",[],function(){return'{{~ it.list :item }}\n<span class="face" data-val="{{= item }}">\n	{{! it.createEmoji(item) }}\n</span>\n{{~}}'}),function(){define("index",["jquery","doT","text!../templates/headbar.tpl","text!../templates/advertisingbar.tpl","text!../templates/historyItems.tpl","text!../templates/initBox.tpl","text!../templates/closedNotice.tpl","text!../templates/faceItems.tpl"],function(e,t,n,r,i,s,o,u){"use strict";var a,f,l,c,h,p;return p=function(t){switch(t){case 1:return"msg-opposite";case 2:return"msg-self"}},l=function(t){var n,r,i,s,o,u,a;return s=new Date(t),a=new Date,r=s.getMonth()+1,r=(r+"").length>1?r:"0"+r,i=s.getDate(),i=(i+"").length>1?i:"0"+i,n=s.getHours(),n=(n+"").length>1?n:"0"+n,o=s.getMinutes(),o=(o+"").length>1?o:"0"+o,u=s.getSeconds(),u=(u+"").length>1?u:"0"+u,a.getMonth()===s.getMonth()&&a.getDate()===s.getDate()?"".concat(n,":").concat(o,":").concat(u):"".concat(r,"-").concat(i," ").concat(n,":").concat(o,":").concat(u)},c=function(t){return t<99?"".concat(t):"99+"},h=function(t){var n,r;if(!t||!t.message)return"";switch(t.messageType){case 1:return n=t.message,n=n.replace(/\n|\ /g,function(e){switch(e){case"\n":return"<br/>";case" ":return"&nbsp;";default:return e}}),n=n.replace(/\[\/\w+\]/g,function(e){var t;return t=String.fromCodePoint("0x".concat(e.match(/\[\/(\w+)\]/)[1])),twemoji.parse(t)}),n.encodeHTML();case 2:return r=t.sendType===1||view.isLocateBottom(),'<a href="/'.concat(t.message.encodeHTML(),'" target="_blank">\n	<img src="/').concat(t.message.encodeHTML(),'" />\n</a>')}},a=function(){function e(t,n,r){var i=this;_classCallCheck(this,e),this.ws=t,this.socket=n,this.send(r)||(this.handle=setInterval(function(){return i.send(r)},20))}return _createClass(e,[{key:"send",value:function(t){var n;return((n=this.socket)!=null?n.readyState:void 0)!==1?0:(clearInterval(this.handle),this.ws.send.apply(this.ws,t),this.ws=null,this.socket=null,1)}}]),e}(),f=function(){var f=function(){function t(){var e=this;_classCallCheck(this,t);var n;this.eventKeyupInput=this.eventKeyupInput.bind(this),this.eventTextareaKeydown=this.eventTextareaKeydown.bind(this),this.eventTextareaKeyup=this.eventTextareaKeyup.bind(this),this.monitorP2P=this.monitorP2P.bind(this),this.eventCloseTheChat=this.eventCloseTheChat.bind(this),this.closingTheChat=this.closingTheChat.bind(this),this.eventSend=this.eventSend.bind(this),this.eventOnPaste=this.eventOnPaste.bind(this),this.eventScrollHistory=this.eventScrollHistory.bind(this),this.eventToggleEmojiPicker=this.eventToggleEmojiPicker.bind(this),this.eventChooseFace=this.eventChooseFace.bind(this),this.eventPicSubmit=this.eventPicSubmit.bind(this),this.eventSendPic=this.eventSendPic.bind(this),this.eventStartChatting=this.eventStartChatting.bind(this),n=Utils.getUrlParams().origin,n?n=decodeURIComponent(n):n="",Utils.ajax(ALPHA.API_PATH.user.init,{method:"POST",data:{channel:1,origin:n}}).then(function(t){var n,r;return n=t.data,e.visitorInfo=n.info,ALPHA.userId=e.userId=n.userId,r=+n.popup,r?e.showInitBox({msg:n.msg,list:n.info}):(e.connectWSLink(),e.fetchHistory(1))}),Utils.ajax(ALPHA.API_PATH.common.conf,{params:{type:"pc_dialog"}}).then(function(t){var n,r,i,s;n=t.data;for(i=0,s=n.length;i<s;i++)r=n[i],/_media_id$/.test(r.key)?e.data.conf[r.key]="/".concat(r.other):e.data.conf[r.key]=r.value?"https://".concat(r.value):"javascript:;";return e.els.headbar.append(e.tpls.headbar(e.data.conf)),e.els.advertisingbar.append(e.tpls.advertisingbar(e.data.conf))}),window.addEventListener("unload",function(){var t,n;return e.closingActively=1,(t=e.socket)!=null&&t.close(),(n=e.ws)!=null?n.disconnect():void 0}),this.els.body.on("click",".tab-box .close",this.eventCloseTheChat),this.els.body.on("click",'.tab-box .closing-confirm-box button[data-type="cancel"]',function(){return e.els.closingConfirmBox.hide()}),this.els.body.on("click",'.tab-box .closing-confirm-box button[data-type="okey"]',function(){return e.els.closingConfirmBox.hide(),window.close()}),this.els.body.on("keyup",".init-box input",this.eventKeyupInput),this.els.body.on("click",".init-box button",this.eventStartChatting),this.els.body.on("click",".chat-history .unreadCount a",this.eventShowLowerUnread),this.els.body.on("click",".chat-toolbar .emoji-picker button",this.eventToggleEmojiPicker),this.els.body.on("click",".chat-toolbar .emoji-picker .face",this.eventChooseFace),this.els.body.on("change",'.chat-toolbar input[type="file"]',this.eventSendPic),this.els.body.on("submit",".chat-toolbar form",this.eventPicSubmit),this.els.body.on("focus",".chat-sendbox textarea",function(){return e.els.contentBox.addClass("active")}),this.els.body.on("blur",".chat-sendbox textarea",function(){return e.els.contentBox.removeClass("active")}),this.els.body.on("keydown",".chat-sendbox textarea",this.eventTextareaKeydown),this.els.body.on("keyup",".chat-sendbox textarea",this.eventTextareaKeyup),this.els.body.on("paste",".chat-sendbox textarea",this.eventOnPaste),this.els.body.on("click",".chat-sendbox button.send",this.eventSend),this.els.chatWindow.on("scroll",this.eventScrollHistory),this.initEmoji(),this}return _createClass(t,[{key:"initEmoji",value:function(){return this.els.faceItems.html(this.tpls.faceItems({list:ALPHA.twemoji.list,createEmoji:this.createEmoji}))}},{key:"showInitBox",value:function(n){var r;return this.els.initBox=r=e(this.tpls.initBox(n)),this.els.app.append(r)}},{key:"hideInitBox",value:function(){if(!this.els.initBox)return;return this.els.initBox.remove(),delete this.els.initBox}},{key:"eventKeyupInput",value:function(t){var n,r;return n=t.currentTarget,r=n.getAttribute("name"),this.data.form[r]=n.value}},{key:"eventTextareaKeydown",value:function(n){var r,i;if(n.keyCode===13&&!n.shiftKey)return n.preventDefault(),this.eventSend();r=e(n.currentTarget),i=+r.attr("maxlength");if(!(r.val().length<i))return n.preventDefault()}},{key:"eventTextareaKeyup",value:function(t){var n;return this.data.inputText=n=t.currentTarget.value,this.els.chatSendBtn.prop({disabled:!n.trim()})}},{key:"connectWSLink",value:function(){var t=this,n,r,i,s;return(n=this.socket)!=null&&n.close(),(r=this.ws)!=null&&r.disconnect(),this.socket=i=new SockJS(ALPHA.API_PATH.WS.url),this.ws=s=Stomp.over(i),i.addEventListener("close",function(){return++t.data.reconnectCount>10?alert("网络连接失败，请刷新重试"):setTimeout(function(){if(!t.closingActively)return t.connectWSLink()},1e3)}),s.connect({},function(e){return s.subscribe(ALPHA.API_PATH.WS.p2p(),t.monitorP2P)})}},{key:"wsSend",value:function(t,n){return new a(this.ws,this.socket,[ALPHA.API_PATH.WS.send,{},"".concat(t,"|").concat(n||"")])}},{key:"monitorP2P",value:function(t){var n,r,i;n=t.body,console.log("RECEIVE: ",n),i=+n.match(/^(\d+)\|/)[1],n=n.replace(/^\d+\|/,"");switch(i){case ALPHA.API_PATH.WS.RECEIVE_CODE.p2p.MESSAGE:return n=n.replace(/\|$/,""),r=n.toJSON(),this.addMessage(r);case ALPHA.API_PATH.WS.RECEIVE_CODE.p2p.QUEUENUM:return n=+n.replace(/\|$/,""),this.els.queueNum.text(n),this.els.chatBox[n?"addClass":"removeClass"]("waitting");case ALPHA.API_PATH.WS.RECEIVE_CODE.p2p.CLOSED:return this.chattingClosed(),this.scrollToBottom()}}},{key:"eventCloseTheChat",value:function(){return this.els.closingConfirmBox.show()}},{key:"closingTheChat",value:function(){return this.data.isClosed=1,window.close()}},{key:"chattingClosed",value:function(){return this.els.chatTextarea.prop({readonly:!0}),this.els.chatSendImg.prop({disabled:!0}),this.els.chatWrapper.append(o)}},{key:"fetchHistory",value:function(t){var n=this,r,i;if(this.data.isLoadingHistory)return;return this.data.isLoadingHistory=1,this.els.loadingHistory.show(),r={},t?r.size=this.data.msgInitCount:r.size=this.data.msgAppendCount,t||(r.timestamp=this.data.referTimeStamp),i=Utils.ajax(ALPHA.API_PATH.user.history,{params:r}),i.then(function(e){var r,i,s,o,u,a,f,l;a=e.data;if(!a.length){n.data.isLoadingHistory=0,n.els.loadingHistory.hide(),n.data.noMoreHistory=1;return}f=a.length,n.data.chatHistoryList=[].concat(_toConsumableArray(a),_toConsumableArray(n.data.chatHistoryList)),n.refreshTimeline(a),n.els.chatWrapper.prepend(n.tpls.historyItems(a)),n.data.isLoadingHistory=0,n.els.loadingHistory.hide();if(t)return n.scrollToBottom(0);i=[].slice.apply(n.els.chatWrapper.children()),s=0;for(o=u=0,l=f;0<=l?u<=l:u>=l;o=0<=l?++u:--u){r=i[o];if(!r)break;s+=r.offsetHeight}return n.els.chatWindow[0].scrollTop=s})}},{key:"refreshTimeline",value:function(t,n){var r,i,s,o,u,a,f,c,d,v,m,g,y,b;if(!t.length)return;this.data.referTimeStamp=t[0].timeStamp,f=0,v=[];for(r=o=0,a=t.length;o<a;r=++o){i=t[r],i.timeline=l(i.timeStamp),i.sideClass=p(i.sendType),i.innerHTML=h(i);if(r===0&&!n||n&&!this.data.chatHistoryList.length){i.hasTimeline=1;continue}d=this.data.referTimeStamp;if(n){y=this.data.chatHistoryList,g=y.length;for(s=u=c=g-1;c<=0?u<=0:u>=0;s=c<=0?++u:--u){m=y[s];if(!m.hasTimeline)continue;d=m.timeStamp;break}}b=~~((i.timeStamp-d)/3e5),b>f?(i.hasTimeline=1,v.push(f=b)):v.push(i.hasTimeline=0)}return v}},{key:"scrollTo",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0,n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:200;return this.els.chatWindow.animate({scrollTop:"".concat(t,"px")},n)}},{key:"scrollToBottom",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:200,n,r,i,s;i=this.els.chatWindow,s=i[0].offsetHeight,n=this.els.chatWrapper[0].offsetHeight,r=n-s;if(r<0)return;return i.stop(!0,!0).animate({scrollTop:"".concat(r+20,"px")},t)}},{key:"isLocateBottom",value:function(){var t,n,r,i,s,o,u,a;return u=this.els.chatWindow[0],a=u.offsetHeight,n=this.els.chatWrapper[0].offsetHeight,r=n-a,r<0?1:(t=[].slice.apply(this.els.chatWrapper.children()),i=t.last(),s=u.scrollTop,o=this.els.chatWrapper[0].offsetHeight,s+a>o-9-17)}},{key:"eventSend",value:function(){var t,n;if(!this.data.inputText.trim())return;return n=this.data.inputText.encodeHTML(),t={messageType:1,message:n},this.wsSend(ALPHA.API_PATH.WS.SEND_CODE.MESSAGE,JSON.stringify(t)),this.data.inputText="",this.els.chatTextarea.val(""),this.els.chatSendBtn.prop({disabled:!0})}},{key:"createEmoji",value:function(t){return t=String.fromCodePoint("0x".concat(t)),twemoji.parse(t,ALPHA.twemoji.params)}},{key:"insertEmoji",value:function(t){var n,r,i,s;this.els.faceWrapper.hide(),r=this.els.chatTextarea[0];if(!this.data.isClosed)return t="[/".concat(t,"]"),document.selection?(r.focus(),i=document.selection.createRange(),i.text=t,r.focus(),this.data.inputText=r.value):(s=this.data.inputText,n=Utils.cursorPosition(r),this.data.inputText="".concat(s.substr(0,n)).concat(t).concat(s.substr(n)),n+=t.length,r.value=this.data.inputText,setTimeout(function(){return Utils.cursorPosition(r,n)},20)),this.els.chatTextarea.trigger("keyup")}},{key:"eventOnPaste",value:function(n){var r=this,i,s,o,u,a,f,l,c,h;i=n.clipboardData||n.originalEvent.clipboardData,console.log(n);if(!i||!i.getData){console.warn("不支持 clipboardData，无法访问系统剪切板");return}for(a=c=0,h=i.items.length;0<=h?c<=h:c>=h;a=0<=h?++c:--c){l=i.items[a];if(l&&l.kind==="file"){s=l.getAsFile();if(s&&s.size/1024/1024>10){alert("图片大小不可超过10Mb");return}o=new FormData,o.append("multipartFile",s),e.ajax({type:"POST",url:ALPHA.API_PATH.common.upload,data:o,contentType:!1,dataType:"json",processData:!1}).then(function(e){var t,n;if(e.msg==="success")return t=e.data.fileUrl,n={messageType:2,message:t},r.wsSend(ALPHA.API_PATH.WS.SEND_CODE.MESSAGE,JSON.stringify(n))});return}}}},{key:"eventScrollHistory",value:function(){var t=this,n,r,i,s;if(this.data.noMoreHistory)return;if(this.data.winScrollState)return;this.data.winScrollState=1,setTimeout(function(){return t.data.winScrollState=0},20),s=this.els.chatWindow[0],n=38,i=14,r=s.scrollTop,this.isLocateBottom()&&this.clearNewUnread();if(r<n+i)return this.fetchHistory()}},{key:"eventShowLowerUnread",value:function(){return this.clearNewUnread(),this.scrollToBottom()}},{key:"eventToggleEmojiPicker",value:function(){return this.els.faceWrapper.toggle()}},{key:"eventChooseFace",value:function(n){var r,i;return r=e(n.currentTarget),i=r.attr("data-val"),this.insertEmoji(i)}},{key:"clearNewUnread",value:function(){return this.data.newUnreadElList=[],this.els.unreadCount.text(0).hide()}},{key:"setNewUnread",value:function(){var t;return t=this.data.newUnreadElList.length,this.els.unreadCount.text(c(t)).show()}},{key:"addMessage",value:function(t){var n=this,r;return r=this.data.chatHistoryList,this.refreshTimeline([t],1),setTimeout(function(){return n.els.chatWrapper.append(n.tpls.historyItems([t]))},0),console.log(this.tpls.historyItems([t])),this.data.chatHistoryList=[].concat(_toConsumableArray(r),[t]),t.sendType===2?setTimeout(function(){return n.scrollToBottom(0)},0):this.isLocateBottom()?setTimeout(function(){return n.scrollToBottom(0)},0):(this.data.newUnreadElList.push(t),this.setNewUnread())}},{key:"eventPicSubmit",value:function(n){var r=this,i,s,o;i=e(n.currentTarget),n.preventDefault(),o=this.els.chatSendImg[0];if(!o.value)return;if(o&&o.files){s=o.files[0];if(s&&s.size/1024/1024>10){o.value="",alert("图片大小不可超过10Mb");return}}return i.attr({action:ALPHA.API_PATH.common.upload}),i.ajaxSubmit({method:"POST",dataFilter:function(t){return console.log("dataFilter"),t=t.replace(/\s*\<[\/]?pre\>\s*/ig,""),console.log(t),t.toJSON()},success:function(t){var n,i;console.log("success");if(t.msg==="success")return n=t.data.fileUrl,i={messageType:2,message:n},r.wsSend(ALPHA.API_PATH.WS.SEND_CODE.MESSAGE,JSON.stringify(i)),o.value=""},error:function(){return console.warn("error"),alert("图片大小不可超过10Mb"),o!=null?o.value="":void 0}})}},{key:"eventSendPic",value:function(n){return console.log("file value changed"),e(n.currentTarget).closest("form").submit()}},{key:"eventStartChatting",value:function(){var t=this,n,r,i,s;console.log(this.visitorInfo),s=this.visitorInfo;for(r=0,i=s.length;r<i;r++){n=s[r];if(n.ban)continue;if(n.require&&!this.data.form[n.filed])return}return Utils.ajax(ALPHA.API_PATH.user.new,{method:"POST",data:this.data.form}).then(function(e){return t.hideInitBox(),t.connectWSLink(),t.fetchHistory(1)})}},{key:"eventImgLoaded",value:function(t){if(+t)return this.scrollToBottom(0)}}]),t}();return f.prototype.data={inputText:"",isClosed:0,reconnectCount:-1,isLoadingHistory:0,noMoreHistory:0,msgInitCount:20,msgAppendCount:20,referTimeStamp:0,chatHistoryList:[],newUnreadElList:[],form:{},conf:{logo_href:"",logo_media_id:"",right_ad_href:"",right_ad_media_id:""},visitorInfo:[]},f.prototype.els=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p,d;return t=e("#app"),l=t.children(".tab-box"),a=t.children(".content-box"),n=a.children(".chat-box"),h=n.find(".queueNum"),r=n.children(".chat-history"),d=r.children(".unreadCount"),p=d.find("strong span"),o=r.children(".chat-window"),c=o.children(".loading-history"),u=o.children(".chatWrapper"),s=n.children(".chat-toolbar"),f=s.find(".face-wrapper"),i=n.children(".chat-sendbox"),{body:e("body"),app:t,headbar:l,closingConfirmBox:l.find(".closing-confirm-box"),contentBox:a,chatBox:n,queueNum:h,chatHistory:r,unreadCountWrap:d,unreadCount:p,chatWindow:o,loadingHistory:c,chatWrapper:u,chatToolbar:s,faceWrapper:f,faceItems:f.find(".faceItems"),chatSendImg:s.find('input[type="file"]'),chatSendBox:i,chatTextarea:i.find("textarea"),chatSendBtn:i.find("button"),advertisingbar:e(".advertising-box")}}(),f.prototype.tpls={headbar:t.template(n),advertisingbar:t.template(r),historyItems:t.template(i),initBox:t.template(s),faceItems:t.template(u)},f}.call(this),window.view=new f})}.call(void 0),function(){"use strict";require.config({paths:{jquery:"../assets/jquery.min","jquery.form":"../assets/jquery.form.min",text:"../assets/text.min",doT:"../assets/doT.min",md5:"../assets/md5.min"}}),require(["jquery","alpha","utils","index","jquery.form"],function(e,t,n){return window.Utils=n})}.call(void 0),define("main",function(){});