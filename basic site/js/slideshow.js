//The slideshow requires five things: 
// 1) you name your slides with the naming format "slideshowX.png", where the X is the position the slide is in.
// 2) all "slideshowX.png" files must be in the slides folder
// 3) You need to set NUMBER_OF_SLIDES to the number of files in the prevously mentioned folder
// 4) You need to create a new img element for each slide, and point it to the file, like so:
// <div id="slideshow">
// 	  <img src="./html/img/slideshow/slideshow1.png"></img>
// 	  <img src="./html/img/slideshow/slideshow2.png"></img>
// 	  <img src="./html/img/slideshow/slideshow3.png"></img>
// </div>
// 5) Create new circles beneath the slideshow to match the number of images in the slideshow.
//    Make sure that the id of each circle is set as below
// <div style="text-align: center">
// 	 <div id="circle1" class="circle"></div>
// 	 <div id="circle2" class="circle"></div>
// 	 <div id="circle3" class="circle"></div>
// </div>


$(document).ready(function () {
	const NUMBER_OF_SLIDES = 3;
	var slide_width = document.getElementById('slideshow').scrollWidth / NUMBER_OF_SLIDES;
	var slide_number = 1;
	var setCircle = function (input_circle) {
		for (x = 1; x <= NUMBER_OF_SLIDES; x++) {
			$("#circle" + x).css({
				"background-color": "lightgrey"
			});
		}
		$("#circle" + input_circle).css({
			"background-color": "brown"
		});
	}
	setCircle(1);

	setInterval(function () {
		if (slide_number < NUMBER_OF_SLIDES) {
			$("#slideshow").animate({
				scrollLeft: slide_width * slide_number
			}, 500);
			slide_number++;
		} else {
			$("#slideshow").animate({
				scrollLeft: 0
			}, 500);
			slide_number = 1;
		}
		setCircle(slide_number);
	}, 4500);
});