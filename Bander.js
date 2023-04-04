var buttonWrapper = document.getElementById("button-wrapper");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var video = document.getElementById("video");

		video.addEventListener("play", function() {
			setTimeout(function() {
				button1.style.opacity = 1;
			}, 5000);
		});
	
		button1.addEventListener("click", function() {
			button1.style.opacity = 0;
			setTimeout(function() {
				button1.style.display = "none";
			}, 500);
		});

		button1.addEventListener("click", function() {
			video.currentTime = 210;
		});

		//button2.addEventListener("click", function(){
		//	video.currentTime = 120;
		//});

		button1.style.opacity = 0;
		setTimeout(function() {
			button1.style.opacity = 1;
		}, 5000);