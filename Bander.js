var button1 = document.getElementById("button1");
		var button2 = document.getElementById("button2");
		var video = document.getElementById("video");
		var buttonWrapper = document.querySelector(".button-wrapper");

    buttonWrapper.addEventListener("click", function() {
			buttonWrapper.style.display = "none";
		});

		button1.addEventListener("click", function() {
			video.src = "soldrib.mp4";
			video.play();
		});

		button2.addEventListener("click", function() {
			video.src = "Sol.mp4";
			video.play();
		});

		video.addEventListener("play", function() {
			setTimeout(function() {
				buttonWrapper.classList.add("hide");
			}, 5000);
		});