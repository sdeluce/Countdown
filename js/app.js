jQuery(document).ready(function(){

	var launch = new Date(2013, 07,17,17,00,00);

	var days = jQuery("#days");
	var hours = jQuery("#hours");
	var minutes = jQuery("#minutes");
	var secondes = jQuery("#seconds");

	function setDate() {
		var now = new Date();

		var s = ((launch.getTime() - now.getTime())/1000)-now.getTimezoneOffset()*6;

		var d = Math.floor(s/86400);
		days.html('<span class="numbers">'+d+'</span><span>Jour'+(d>1?'s':'')+'</span>');
		s-= d*86400;

		var h = Math.floor(s/3600);
		hours.html('<span class="numbers">'+(h>9?'':'0')+h+'</span><span>Heure'+(h>1?'s':'')+'</span>');
		s-= h*3600;

		var m = Math.floor(s/60);
		minutes.html('<span class="numbers">'+(m>9?'':'0')+m+'</span><span>Minute'+(m>1?'s':'')+'</span>');
		s-= m*60;

		var s = Math.floor(s);
		secondes.html('<span class="numbers">'+(s>9?'':'0')+s+'</span><span>Seconde'+(s>1?'s':'')+'</span>');

		var degs = (s/60)*360;
		var degm = (m/60)*360;
		var degh = (h/24)*360;
		var degd = (d/365)*360;

		jQuery("canvas#seconds").clearCanvas().drawArc({
			strokeStyle: "#161c27",
			strokeWidth: 20,
			shadowColor: "#3d537f",
  			shadowBlur: 1,
  			shadowX: 0, shadowY: 1,
			x: 100, y: 100,
			radius: 80,
			start: 0, end: 360
		}).drawArc({
			strokeStyle: "#ff8000",
			strokeWidth: 14,
			x: 100, y: 100,
			radius: 80,
			start: 90, end: degs+90
		});

		jQuery("canvas#minutes").clearCanvas().drawArc({
			strokeStyle: "#161c27",
			strokeWidth: 20,
			shadowColor: "#3d537f",
  			shadowBlur: 1,
  			shadowX: 0, shadowY: 1,
			x: 100, y: 100,
			radius: 80,
			start: 0, end: 360
		}).drawArc({
			strokeStyle: "#ff8000",
			strokeWidth: 14,
			x: 100, y: 100,
			radius: 80,
			start: 90, end: degm+90
		});

		jQuery("canvas#hours").clearCanvas().drawArc({
			strokeStyle: "#161c27",
			strokeWidth: 20,
			shadowColor: "#3d537f",
  			shadowBlur: 1,
  			shadowX: 0, shadowY: 1,
			x: 100, y: 100,
			radius: 80,
			start: 0, end: 360
		}).drawArc({
			strokeStyle: "#ff8000",
			strokeWidth: 14,
			x: 100, y: 100,
			radius: 80,
			start: 90, end: degh+90
		});

		jQuery("canvas#days").clearCanvas().drawArc({
			strokeStyle: "#161c27",
			strokeWidth: 20,
			shadowColor: "#3d537f",
  			shadowBlur: 1,
  			shadowX: 0, shadowY: 1,
			x: 100, y: 100,
			radius: 80,
			start: 0, end: 360
		}).drawArc({
			strokeStyle: "#ff8000",
			strokeWidth: 14,
			x: 100, y: 100,
			radius: 80,
			start: 90, end: degd+90
		});
		setTimeout(setDate, 1000);
	};
	setDate();
});