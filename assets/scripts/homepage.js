$(document).ready(function(){
	$('*[verlang=vi]').hide();
	var w = window.innerWidth;
	function helloWorld(){
		$("#typed").typed({
			strings: ["Hi!", "I'm a <b>student.</b>", "I'm a <b>blogger.</b>", "I'm a <b>developer.</b>", "I'm <b>Viet Anh.</b><br>$ Nice to meet you!"],
			cursorChar: " ☕",
			typeSpeed: 45,
			callback: function(){
		    	setTimeout(function(){
			        helloWorld();
			    }, 4500);
		    }
		});
	}
	if (w > 370) {
		helloWorld();
	}
});
