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
  
    .typeString("We Bring")
    .pauseFor(300)
    .typeString("<strong> experience,</strong>")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("<strong>compliance </strong>")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("<strong>and standards</strong>")
    .pauseFor(1000)
    .typeString("<br>to professional services")
    .pauseFor(1000)
    .start();
});
