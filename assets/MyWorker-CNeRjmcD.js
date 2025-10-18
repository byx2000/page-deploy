(function(){"use strict";function s(o,e){return o+e}onmessage=o=>{console.log("worker",o.data),console.log(s(1,2)),postMessage({c:"finish"})}})();
