var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15,
    },
    selectedAttraction: 0.02,
    friction: 0.4,
    pauseAutoPlayOnHover: false,
    autoPlay: 3500,
  };
  
  var carousel = document.querySelector("[data-carousel]");
  var slides = document.getElementsByClassName("carousel-cell-1");
  var flkty = new Flickity(carousel, options);
  
  flkty.on("scroll", function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = ((slide.target + flkty.x) * -1) / 3;
      image.style.backgroundPosition = x + "px";
    });
  });
  
  flkty.on("dragEnd", function (event, pointer, cellElement, cellIndex) {
    flkty.playPlayer();
  });
  
