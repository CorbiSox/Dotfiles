import{a as p}from"../chunks/chunk-Q2FYMN44.js";import{n as g}from"../chunks/chunk-SOWOQI5E.js";import{e as n}from"../chunks/chunk-3GYLW4KZ.js";var a=n(g()),c=n(p());async function i(){try{let e=window.__wb_deferredPrograms,r=window.location.href,s="US",m=async t=>new a.default(u=>{chrome.cookies.get({name:t,url:r},o=>u(o?o.value:null))}),d=3e3,{programId:l}=await(0,c.applyClientRules)(e,r,s,m,{programAttemptTimeoutMs:d});chrome.runtime.sendMessage({url:r,type:"programSelected",selectedProgramId:l,referrer:document.referrer,title:document.title},t=>{})}catch(e){console.log("*** error loading program client side",e)}}document.readyState!=="loading"?i():document.addEventListener("DOMContentLoaded",i);