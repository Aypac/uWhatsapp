function override_styles() {
    var themeurl = 'https://aypac.de/uwhatsapp/0.1/overwrite.css';
    var cssId = 'devicetheme';
    if (!document.getElementById(cssId)) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = themeurl;
        link.media = 'all';
        head.appendChild(link);
        alert('Willkommen auf dem UbuntuPhone');
    }
}
window.addEventListener('load', override_styles, true);

