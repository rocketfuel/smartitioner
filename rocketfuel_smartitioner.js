// Stochastic Pixel Rotation Script
//
// (C) 2011-2015 BY ROCKET FUEL, INC. ALL RIGHTS RESERVED
// THIS PROGRAM IS PROVIDED UNDER THE TERMS OF THE ATTACHED
// ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION
// OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S
// ACCEPTANCE OF THIS AGREEMENT.
//
// http://www.rocketfuel.com/
if (!window.ROT) {
  var ROT = {};
}
(function() {

var protocol = "https:" == document.location.protocol ? 'https:' : 'http:';
var cbuster = new Date().getTime() + Math.random().toString().substr(2);
var cookieName = "rotp";

// ==========================
// = Start customizing here =
// ==========================
  ROT.pixels = [
  protocol+'[INSERT_FIRST_COMPETITOR_URL_HERE]',
  // protocol+'//www.example.com/pixit cel3', // add additional partners as you please
  protocol+'[INSERT_ROCKETFUEL_URL_HERE]'+cbuster // IMPORTANT: no final comma on this list!
  ];
  ROT.weights = [1, 1]; // IMPORTANT: match the number of weights to the number of pixels
// =========================
// = Stop customizing here =
// =========================

  ROT.sc = function(cn, v, eds) {
    var ed = new Date();
    ed.setDate(ed.getDate() + eds);
    var cv = escape(v) + ((eds === null) ? "" : "; expires=" + ed.toUTCString());
    var str = cn + "=" + cv;
    document.cookie = str;
  };
  ROT.gc = function(cn) {
    var i, x, y, ac = document.cookie.split(";");
    for (i = 0; i < ac.length; i++)
    {
      x = ac[i].substr(0, ac[i].indexOf("="));
      y = ac[i].substr(ac[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == cn) {
        return unescape(y);
      }
    }
  };
  var pid = parseInt(ROT.gc(cookieName),10);
  if (isNaN(pid) || pid < 0 || pid > Object.keys(ROT.pixels).length - 1) {
    var total = 0;
    for (var i = 0; i < ROT.weights.length; i++) { total = total + ROT.weights[i]; }
    var choose = Math.floor(Math.random() * total);
    total = 0;
    for (var j = 0; j < ROT.weights.length; j++) {
      total = total + ROT.weights[j];
      if (total > choose) { pid = j; break; }
    }
    ROT.sc(cookieName, pid, 365); // save cookie for 365 days
  }
  if (ROT.pixels[pid]) {
    var rf = document.createElement('img');
    rf.src = ROT.pixels[pid];
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(rf, s);
  }

})();