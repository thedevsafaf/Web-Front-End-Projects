$(window).load(function(){
    $('#cubeSpinner').impulseslider({
        height: 200,
        width: 300,
        depth: 150,
        perspective: 800,
        pauseTime: 5000,
        transitionDuration: 1500,
        transitionEffect: "linear",
        autostart: true,
        rightSelector: ".right",
        leftSelector: ".left",
        directionRight: true,
        containerSelector: "#cubeCarousel",
        spinnerSelector: "#cubeSpinner"
    });
  });