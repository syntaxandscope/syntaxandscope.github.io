$(function() {
  $(".about-carousel").owlCarousel({
    margin: 10,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    nav: true,
    navText: ["", "<img src='assets/nav-next.svg'>"]
  });

  var pageMainTitle = document.getElementById("pageMainTitle");
  var itr = 0;
  if ($("#pills-tab")) {
    // .services-content #pills-tab .nav-item .nav-link
    var servicesInterval = setInterval(function() {
      if (itr == $("#pills-tab .nav-item").length - 1) {
        $("#pills-tab .nav-item:eq(0) .nav-link").trigger("click");
        itr = -1;
      } else {
        $("#pills-tab .nav-item .nav-link.active")
          .closest(".nav-item")
          .next()
          .find(".nav-link")
          .trigger("click");
      }
      itr++;
    }, 5000);
    $("#pills-tab .nav-item .nav-link").click(function(event) {
      if (event.hasOwnProperty("originalEvent")) {
        clearInterval(servicesInterval);
      }
    });
  }
  if (pageMainTitle) {
    var typewriter = new Typewriter(pageMainTitle, {
      loop: true
    });

    setTimeout(() => {
      typewriter
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
    }, 6000);
  }
  $(".mobile-menu").click(function(e) {
    e.preventDefault();
    $("#mainMenu").slideToggle(500);
  });
});
