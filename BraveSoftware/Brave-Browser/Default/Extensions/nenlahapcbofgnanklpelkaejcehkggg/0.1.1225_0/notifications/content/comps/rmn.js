import{a as v,b as r}from"../../../chunks/chunk-YTUS2MPA.js";import{a as l}from"../../../chunks/chunk-WWUAKAAN.js";import{a as p}from"../../../chunks/chunk-G4GLYCCY.js";import{a as f}from"../../../chunks/chunk-RNDVJQN2.js";import{a as o}from"../../../chunks/chunk-D3PBAGDZ.js";import"../../../chunks/chunk-3XIOB4EC.js";import{a as d}from"../../../chunks/chunk-NZY4JV6E.js";import{a as u}from"../../../chunks/chunk-BCG2KUGW.js";import"../../../chunks/chunk-ZIQ6U6YW.js";import"../../../chunks/chunk-O4TFJKJQ.js";import{c as a,g as c,q as m,u as s}from"../../../chunks/chunk-4SRFE46V.js";import"../../../chunks/chunk-RXMLGJMT.js";import"../../../chunks/chunk-HY2GWXPO.js";import"../../../chunks/chunk-52XVUBCW.js";import"../../../chunks/chunk-42JNP4CL.js";import"../../../chunks/chunk-SOWOQI5E.js";import"../../../chunks/chunk-JAUVA5AU.js";import"../../../chunks/chunk-3GYLW4KZ.js";var g=()=>m("getTab");window.__wb_timing={docStartAt:performance.now()};async function T(){let[t,n]=await Promise.all([f(),d()]);p(t),a.merge({siteAPIData:n}),c(n.tld)}async function b(){await T(),l(k,()=>{x(),w()})}function k(){return!!document.querySelector(".w-extension")}async function x(){if(await o({action:"getCompState",comp:"rmn"}))return;let n=document.evaluate("//button[contains(text(), 'Apply Cash Back')]",document).iterateNext();n&&(C("cashback",n),n.addEventListener("click",()=>{let e=h(document.evaluate("//div[contains(text(), 'Earn')]",document).iterateNext());i("rmnActivate",{cashbackRate:e}),r("rmn","cashback")}))}function w(){let t=document.evaluate("//button[contains(text(), 'Apply All Offers') or contains(text(), 'Test All Codes')]",document).iterateNext();t&&(C("coupon",t),t.addEventListener("click",()=>{o({action:"initSavingsCheck",comp:"rmn"}),i("rmnTryCoupons"),v(y,4e4,500,E)}))}function y(){return!!document.evaluate("//*[self::div or self::h4][contains(text(), 'We tested')]",document).iterateNext()}function E(){o({action:"endSavingsCheck",comp:"rmn"});let t=h(document.evaluate("//div[contains(text(), 'You saved')]",document).iterateNext());i("rmnTryCouponsResult",{savings:t?u(t):void 0}),r("rmn","coupons")}async function i(t,n={}){let e=await g();s("track",t,{...n,url:e.url,pagePath:new URL(e.url).pathname})}function C(t,n){i("rmnNotification",{name:t,ctaText:n.innerText})}function h(t){return t?.innerText?.match(/([$0-9.%]+)/)?.[0]}b();