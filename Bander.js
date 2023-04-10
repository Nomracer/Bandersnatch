var buttonWrapper = document.getElementById("button-wrapper");
var button1 = document.getElementById("button1");
var video = document.getElementById("video");

	video.addEventListener("timeupdate", function() {
		if (video.currentTime >= 5 && video.currentTime <= 9) {
	  		button1.style.display = "inline-block";
			}
		 else {
	  button1.style.display = "none";
	}
  });
	

  button1.addEventListener("click", function() {
	button1.style.display ="none";
});

		button1.addEventListener("click", function() {
			video.currentTime = 210;
		});

		button1.style.opacity = 0;
		setTimeout(function() {
			button1.style.opacity = 1;
		}, 5000);
		