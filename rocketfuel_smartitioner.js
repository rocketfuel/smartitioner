<script type = "text/javascript">
// Rocket Fuel Smartitioner
// Deterministic Pixel Rotation Script v2013-01-14 
// (c) 2011-2013 by Rocket Fuel, Inc. All Rights Reserved
// Contact enterprise@rocketfuel.com for more information
// www.rocketfuel.com
if (!window.ROT) {
	var ROT = {};
}
(function() {


// ==========================
// = Start customizing here =
// ==========================
	ROT.pixels = [
	'http://www.vinq.com/1', // TODO: support either .js or image pixels
	'http://www.vinq.com/2' // IMPORTANT: no final comma on this list!
	];
	ROT.weights = [1, 1]; // IMPORTANT: match the number of weights to the number of pixels
// =========================
// = Stop customizing here =
// =========================

	ROT.hc = function(s) {
		var h = 0;
		if (s.length == 0) return h;
		for (i = 0; i < s.length; i++) {
			char = s.charCodeAt(i);
			h = ((h << 5) - h) + char;
			h = h & h;
		}
		return h;
	};
	ROT.sc = function(cn, v, eds) {
		var ed = new Date();
		ed.setDate(ed.getDate() + eds);
		var cv = escape(v) + ((eds == null) ? "" : "; expires=" + ed.toUTCString());
		var str = cn + "=" + cv;
		console.log("SET COOKIE: " + str); // TODO: remove this line
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
	var pid = parseInt(ROT.gc("rotp"));
	if (isNaN(pid) || pid < 0 || pid > Object.keys(ROT.pixels).length - 1) {
		// Hash user agent and plugins count to choose a deterministic pid
		var total = 0;
		for (var i = 0; i < ROT.weights.length; i++) {
			total = total + ROT.weights[i];
		}
		var str = navigator.userAgent + navigator.plugins.length;
		var hash = ((ROT.hc(str) * 71) % 131) % total;
		total = 0;
		var x = 0;
		for (var i = 0; i < ROT.weights.length; i++) {
			total = total + ROT.weights[i];
			if (total > hash) {
				pid = i;
				break;
			}
		}
		ROT.sc("ptnr", pid, 365); // save cookie for n days
	}

	if (ROT.pixels[pid]) {
		var rf = document.createElement('img');
		rf.src = ROT.pixels[pid];
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(rf, s);
	}

})();
</script>
