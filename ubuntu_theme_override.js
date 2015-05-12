function override_styles() {
    var themeurl = 'https://raw.githubusercontent.com/Aypac/uWhatsapp/master/overwrite.css';
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

