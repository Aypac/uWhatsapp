/*

  UbuntuPhoneBQ: width=540, height=919

---Deprecated---

    @media screen and (max-device-width: 600px) {
    }
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
---Deprecated---
*/

function override_styles() {

    //Inject css
    var cssId = 'devicetheme';
    if (document.getElementById(cssId)===null) { //If style not injected yet

//--------CSS-Code to inject-----------------------
        var css=`
.pane-chat { width: 100%; position: absolute; left: 0px; } .pane-list { width: 100%; } #main { z-index:90; display: float; }
.input::after { contenteditable: false; } .pane-intro { display: none; }
#leiste { background-color: #fff; border: 1pt solid #000; border-radius: 15px; color: #888; font-size: 30pt; height: 47px; width: 50px;
    position: fixed; top: 160px; left: 20px; z-index: 999;
    text-align: center; vertical-align: center; padding-top:3px;
}
.textactivate { font-size:20pt; padding-left:0pt; margin-left:4px; margin-bottom:4px; color:#777; }
        .app::after { position: absolute; }
    `;
//--------CSS-Code to inject-----------------------

        var head  = document.getElementsByTagName('head')[0]; //document.head?
        var link  = document.createElement('style');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        //link.href = 'https://raw.githubusercontent.com/Aypac/uWhatsapp/master/overwrite.css'; //This does not work, since cross-domain-resource-loading is disabled
        link.innerHTML = css;
        link.media = 'all';
        head.appendChild(link); //Add to head

        //Scale down the view
        var viewport  = document.createElement('meta');
        viewport.name="viewport";
        viewport.content="initial-scale=0.7, maximum-scale=0.7";
        head.appendChild(viewport);
    }

    /* This should be deprecated
    var intros=document.getElementsByClassName('pane-intro');
    if (intros.length>0) {
         var intro = intros[0];
          intro.setAttribute('style','display:none; width:0%;');
    } */

    //Create a small icon to toggle Sidebar
    if (document.getElementById('leiste')===null) {
        showSidebar();
        var node = document.createElement("div");
        node.id="leiste";
        node.innerHTML="⇔";
        node.onclick=toggleSidebar;
        node.onClick=toggleSidebar;
        document.body.appendChild(node);
    }


    //Disable Text fields
    disableAllText();

}


//If the contact list is displayed, hide it, otherwise show it
function toggleSidebar() {
    console.log('toggle sidebar');
    if (document.getElementById('main').style==null || document.getElementById('main').style.display != "none") {
        showSidebar();
    } else {
        hideSidebar();
    }
}

//Hide the contact list and display the chat
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


//Hide the chat and display the contact list
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



    //Make the chats go Full-Screen
    var a=document.getElementsByClassName('app');
    var t=a[0];
    if (t != null && t.style.position != 'absolute') {
        t.style.position='absolute';
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

