/*

  UbuntuPhoneBQ: width=540, height=919


    @media screen and (orientation:portrait) {
      body {
        -ms-transform: rotate(-90deg); // IE 9
        -webkit-transform: rotate(-90deg); // Chrome, Safari, Opera
        transform: rotate(-90deg);
            transform: translate(0,0);
        width: 100%; // screen width
        height: 100%;// screen height
        overflow: scroll;
      }
    }
    #wrapper::before { background-color: #00F; } .app-wrapper::before { background-color: #00F; }
    textarea { display:none; }
    #window { width: 100%; height: 100%; padding:0px; margin: 0px; }
*/

function override_styles() {

    //inject css

    var cssId = 'devicetheme';
        if (document.getElementById(cssId)===null) {
    var css=`
    .pane-chat { width: 100%; position: absolute; left: 0px; } .pane-list { width: 100%; } #main { z-index:90; display: float; }
    .input::after { contenteditable: false; }
    #leiste { background-color: #fff; border: 1pt solid #000; border-radius: 15px; color: #888; font-size: 30pt; height: 50px; width: 50px;
         position: fixed; top: 200px; left: 20px; z-index: 999;
         text-align: center; vertical-align: center;
    }
    .textactivate::after { font-size:20pt; padding-left:0pt; margin-left:4pt; margin-bottom:4pt; color:#777; }
    `;

        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('style');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        //link.href = themeurl;
        link.innerHTML = css;
        link.media = 'all';
        head.appendChild(link);

            //Scale down the view
        var viewport  = document.createElement('meta');
        viewport.name="viewport";
        viewport.content="initial-scale=0.65, maximum-scale=0.65";
        head.appendChild(viewport);
    }

        var intros=document.getElementsByClassName('pane-intro');
        if (intros.length>0) {
            var intro = intros[0];
            intro.setAttribute('style','display:none; width:0%;');
        }

    //Create a small icon to toggle Sidebar
    if (document.getElementById('leiste')===null) {
        showSidebar();
        var node = document.createElement("div");
        node.id="leiste";
        node.innerHTML="⇔";
        node.onclick=toggleSidebar;
        node.onClick=toggleSidebar;
        var global=document.body;
        global.appendChild(node);
    }


    //Disable Text fields
    disableAllText();

}



function toggleSidebar() {
    console.log('toggle sidebar');
    if (document.getElementById('main').style.display != "none") {
        showSidebar();
    } else {
        hideSidebar();
    }
}

function hideSidebar() {
    console.log('hide sidebar');
    //Hide the sidebar
    var side=document.getElementById('side');
    if (side!=null) {
        side.setAttribute('style',"display:none;");// width:0%;
    }
    var main = document.getElementById('main');
    if (main!=null) {
        main.setAttribute('style',"display:float;"); //width:100%; height: 100%; overflow: scroll;
    }
    disableAllText();
}


function showSidebar() {
    console.log('show sidebar');
    //Show the sidebar
    var side=document.getElementById('side');
    console.log(side);
    if (side!=null) {
        console.log('sidebar found. show');
        side.setAttribute('style',"display:float;");
    }
    var main = document.getElementById('main');
    console.log(main);
    if (main!=null) {
        console.log('mainbar found. hide');
        main.setAttribute('style',"display:none;");
    }
    disableAllText();
}

function disableAllText() {
    var inputs=document.getElementsByClassName('block-compose');
    for (var i=0;i<inputs.length;i++) {
        var input=inputs[i];
        var field=input.getElementsByClassName('input')[0];


            //Add button
            var buts=input.getElementsByClassName('ptt-container');
            var textact=input.getElementsByClassName('textactivate');
            if (buts.length <= 1 && textact.length == 0) {

                if (field.contentEditable!="false") {
                    field.contentEditable='false';
                }

                console.log('add textfield button');
                var textact = document.createElement("div");
                textact.innerHTML="⌨";
                textact.setAttribute('class',"ptt-container textactivate");
                textact.onclick=toggleText;
                textact.onClick=toggleText;
                input.appendChild(textact);
            }
    }
}

function toggleText(event) {
    var textact = event.target;
    console.log(textact);

    input=textact.parentElement.parentElement.parentElement;
    var field=input.getElementsByClassName('input')[0];

    if (field.contentEditable!="false") {
        field.contentEditable='false';
    } else {
        field.contentEditable='true';
    }
}

override_styles();

setInterval(disableAllText,2000);

window.addEventListener('load', override_styles, true);

