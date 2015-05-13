**What is this?**<br />
This is my first attempt for an Ubuntu(Web)App.<br />
Its supposed to bring Whatsapp (Web) to your Ubuntu Touch (and/or Desktop¹).

**What is this not?**<br />
An official, native, independent² app.

**How does it work?**<br />
It is basically an "app" which opens a Webbrowser with web.whatsapp.com and injects some HTML and CSS to make it more mobile friendly (thanks to <a href='https://lists.launchpad.net/ubuntu-phone/msg12024.html'>Alan Bell</a>).<br />
You will have to start Whatsapp on another Phone, then select "Whatsapp Web". Next start this app and scan the displayed qr-code.

**TODO**
- Disable textfields (click to activate)
- Hide contact list (click to show)
- Notifications?

<br />
¹ Though this is not the main goal. Switching (ie sharing a session) between uTouch and desktop is not specifically supported yet.<br />
² This app requires another phone (e.g. Android) running Whatsapp for you.<br />

<hr />

Three simple steps to your final webapp:
 - ensure the url in this file is correct in the whatsapp.desktop
 - replace the default Whatsapp.png with an 128x128 icon 
 - build the package in a commandline terminal with "click build ." or on the Publish tab of the IDE with the Create package button
 - publish the generated click package at https://myapps.developer.ubuntu.com/dev/click-apps/

More details on http://developer.ubuntu.com/publish/webapp/


