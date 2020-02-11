$(function() {

    $('.about-carousel').owlCarousel({
        margin:10,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        items:3,
        nav: true,
        navText: ["","<img src='assets/nav-next.svg'>"]
    })

  var pageMainTitle = document.getElementById("pageMainTitle");

  var typewriter = new Typewriter(pageMainTitle, {
    loop: true
  });

  typewriter
    .pauseFor(5500)
  
    .typeString("<strong>Experience</strong>")
    .pauseFor(1000)
    .deleteChars(10)
    .typeString("<strong>Compliance</strong>")
    .pauseFor(1000)
    .deleteChars(10)
    .typeString("<strong>Standards</strong>")
    .pauseFor(1000)
    .pauseFor(1000)
    .start();
});
