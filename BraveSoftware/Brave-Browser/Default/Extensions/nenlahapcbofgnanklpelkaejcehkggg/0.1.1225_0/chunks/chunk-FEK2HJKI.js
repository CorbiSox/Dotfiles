import{c as l,h as D}from"./chunk-4SRFE46V.js";import{c as v,e as P}from"./chunk-3GYLW4KZ.js";var C=v(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});function M(r,o){var t=o===void 0?{}:o,u=t.currency,e=u===void 0?"USD":u,f=t.country,n=f===void 0?"US":f,s=t.noDollarSign,y=s===void 0?!1:s,m=t.roundToNearestInteger,U=m===void 0?!1:m,_=t.floorToInteger,S=_===void 0?!1:_,g=t.truncateIntegers,h=g===void 0?!1:g;if(r==null||!Number.isFinite(r))return null;var i=r,b="en-".concat(n==="CA"||n==="AU"||n==="GB"?"US":n);U?i=Math.round(i):S&&(i=Math.floor(i));var c=i.toLocaleString(b,{style:"currency",currency:e==="CAD"||e==="AUD"?"USD":e,minimumFractionDigits:h&&Number.isInteger(i)?0:2});if(y){var N=n==="GB"?"\xA3":"$";c=c.replace(N,"")}return e==="CAD"&&(c+=" CAD"),e==="AUD"&&(c+=" AUD"),e==="GBP"&&(c+=" GBP"),c}d.default=M});var A=v(a=>{"use strict";var T=a&&a.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(a,"__esModule",{value:!0});a.formatCurrency=void 0;var B=C();Object.defineProperty(a,"formatCurrency",{enumerable:!0,get:function(){return T(B).default}})});var I=P(A());function p(r,{removeCents:o,noDollarSign:t,currency:u,roundToInteger:e,truncateIntegers:f=!0}={}){let n=D("show_currency");u||(u=l.get(["siteAPIData","meta","currency"]));let s=n?l.get(["session","country"]):"US";return(0,I.formatCurrency)(r,{currency:n?u:"USD",country:s,floorToInteger:!e&&o,roundToNearestInteger:e,truncateIntegers:f||o,noDollarSign:t})}var w=(r,o={})=>p(!r||isNaN(r)?0:r/100,o);export{w as a};