**What is this?**<br />
This is my first attempt for an Ubuntu(Web)App.<br />
Its supposed to bring Whatsapp (Web) to your Ubuntu Touch (and/or Desktop¹).

**What is this not?**<br />
This is not an official, native, independent² app.

**How does it work?**<br />
It is basically an "app" which opens a Webbrowser with web.whatsapp.com and injects via JavaScript some HTML, CSS and functionalities (in JS) to make it more mobile friendly (thanks to <a href='https://lists.launchpad.net/ubuntu-phone/msg12024.html'>Alan Bell</a>).<br />
You will have to start Whatsapp on another Phone, then select "Whatsapp Web". Next start this app and scan the displayed qr-code.


**TODO**
- [ ] Disable textfields (click to activate) (90%)
  - [ ] Placement of the Button is wrong on first call
- [x] Hide contact list (click to show) (100%)
- [ ] Notifications? (5%)
  - Doesn't work right out of the box. Research required. Use Security policy group "push-notification-client"?
- [x] Lock in Landscape or make it usable in Portrait (99%)
  - Is okay right now, can (always) be improved
- [ ] Improve usage of Emoticons (0%)
  - It's pretty bad right now
- [ ] Make microphone work (0%)
  - Use Security policy group "microphone" ?

<hr />


¹ Though this is not the main goal. Switching (ie sharing a session) between uTouch and desktop is not specifically supported yet.<br />
² This app requires another phone (e.g. Android) running Whatsapp for you.<br />
