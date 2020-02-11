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
    loop: false
  });

  typewriter
    .pauseFor(5500)
    .typeString("< / >")
    .pauseFor(500)
    .deleteChars(3)
    .typeString("<strong>We Bring</strong>")
    .pauseFor(300)
    .typeString("<strong> experience,</strong>")
    .pauseFor(300)
    .typeString("<br><strong>compliance and</strong>")
    .typeString(" / ")
    .pauseFor(500)
    .typeString(">")
    .pauseFor(300)

    .deleteChars(3)
    .pauseFor(300)
    .typeString("<strong> standards</strong>")
    .pauseFor(300)
    .typeString("<br><strong>professional services</strong>")
    .pauseFor(500)
    .typeString(" / ")
    .pauseFor(500)
    .typeString(">")
    .start();
});
