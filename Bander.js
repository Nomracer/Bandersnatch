var buttonWrapper = document.getElementById("button-wrapper");
var button1 = document.getElementById("button1");
var video = document.getElementById("video");

		video.addEventListener("play", function() {
			setTimeout(function() {
				buttonWrapper.style.opacity = 1;
			}, 3000);
		});

		button1.addEventListener("click", function() {
			buttonWrapper.style.opacity = 0;
			setTimeout(function() {
				buttonWrapper.style.display = "none";
			}, 500);
		});

		button1.addEventListener("click", function() {
			video.currentTime = 210;
		});

	//	button1.addEventListener("click", function() {
		//	video.src = "soldrib.mp4";
		//	video.play();
		//	buttonWrapper.style.opacity = 0;
		//	setTimeout(function() {
	//			buttonWrapper.style.display = "none";
	//		}, 500);
	//	});
//
	//	button2.addEventListener("click", function() {
	//		video.src = "Sol.mp4";
		//	video.play();
	//		buttonWrapper.style.opacity = 0;
	//		setTimeout(function() {
	//			buttonWrapper.style.display = "none";
	//		}, 500);
	//	});

		buttonWrapper.style.opacity = 0;
		setTimeout(function() {
			buttonWrapper.style.opacity = 1;
		}, 3000);