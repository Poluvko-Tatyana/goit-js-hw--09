const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,t.addEventListener("click",(function(d){timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(timerId),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.69fe2f32.js.map