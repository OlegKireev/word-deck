(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="modulepreload",p=function(s){return"https://olegkireev.github.io/word-deck/"+s},f={},d=function(o,i,a){let e=Promise.resolve();if(i&&i.length>0){const t=document.getElementsByTagName("link");e=Promise.all(i.map(r=>{if(r=p(r),r in f)return;f[r]=!0;const l=r.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(!!a)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===r&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${m}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":h,l||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),l)return new Promise((c,u)=>{n.addEventListener("load",c),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>o()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})};Promise.all([d(()=>import("./Root-CMVGjmxl.js"),__vite__mapDeps([0,1])),d(()=>import("./App-Bd4JxYZ6.js"),__vite__mapDeps([2,1]))]).then(([{default:s},{default:o}])=>{s(o)});export{d as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Root-CMVGjmxl.js","assets/jsx-runtime-CHAC_Fcw.js","assets/App-Bd4JxYZ6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
