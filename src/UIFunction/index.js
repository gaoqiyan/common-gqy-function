// toast
const toastFun = (text, last = 2000, style = {}) => {
    if (!document.getElementById("css_tips_pop")) {
        const css = document.createElement("style");
        css.type = "text/css";
        css.id = "css_tips_pop";
        css.innerHTML = `.error-tips{width:100%;left:50%;top:80%;position:fixed;z-index:9999;text-align:center;transform:translateX(-50%);word-break:break-all;}.error-tips span{background-color:rgba(0,0,0,0.8);padding:8px 12px;display:inline-block;margin:0 auto;color:#FFFFFF;border-radius:4px;font-size:14px;}\
                .error-tips-ani {animation: error-tips-ani 1s ease-in-out 1;-webkit-animation: error-tips-ani 1s ease-in-out 1;opacity:0;}\
                @keyframes error-tips-ani {from {opacity:1;}to {opacity:0;}}\
                @-webkit-keyframes error-tips-ani {from {opacity:1;}to {opacity:0;}}`;
        document.getElementsByTagName("head")[0].appendChild(css);
    }

    const mod_tips_pop = document.getElementById("mod_tips_pop");
    if (mod_tips_pop && mod_tips_pop.parentNode) {
        mod_tips_pop.parentNode.removeChild(mod_tips_pop);
    }
    const div = document.createElement("div");
    const span = document.createElement("span");
    const spantext = document.createTextNode(text);
    div.id = "mod_tips_pop";
    div.className = "error-tips";
    span.appendChild(spantext);
    div.appendChild(span);
    document.body.appendChild(div);
    if (style && JSON.stringify(style) != '{}') {
        div.style.top = style.top || '80%';
        div.style.width = style.maxWidth || '100%';
        div.style.zIndex = style.zIndex || 9999;
        span.style.backgroundColor = style.backgroundColor || 'rgba(0,0,0,0.8)';
        span.style.color = style.color || '#ffffff';
        span.style.fontSize = style.fontSize || '14px';
    }

    setTimeout(function () {
        div.className = "error-tips error-tips-ani";
        setTimeout(function () {
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }, 1000);
    }, last);
}

export { toastFun }
