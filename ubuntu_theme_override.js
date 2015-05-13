function override_styles() {
  var css=`textarea { display:none; } #wrapper::before { background-color: #00F; } .app-wrapper::before { background-color: #00F; } #window { width: 100%; margin: 0px; }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation:portrait) {
    body {
            -webkit-transform: rotate(90deg);
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
    }}
    `;

    var cssId = 'devicetheme';
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('style');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        //link.href = themeurl;
        link.innerHTML = css;
        link.media = 'all';
        head.appendChild(link);

        var viewport  = document.createElement('meta');
        viewport.name="viewport";
        viewport.content="initial-scale=0.65, maximum-scale=0.65";
        head.appendChild(viewport);

        alert('Welcome to Whatsapp on UbuntuPhone!');
}
window.addEventListener('load', override_styles, true);

