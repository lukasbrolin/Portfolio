$(document).ready(function () {
  AOS.init({});

  document.getElementById("theScroll").addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      hamburger.classList.remove("is-active");
      nav.classList.remove("toggle");
      scrollWindow();
    },
    false
  );

  // remove vertical overlay with navbars if screen size is bigger than 768px.
  window.addEventListener("resize", () => {
    let w = window.innerWidth;

    if (w > 768) {
      hamburger.classList.remove("is-active");
      nav.classList.remove("toggle");
    }
  });

  function scrollWindow() {
    if (
      window.scrollY < document.getElementById("backgroundHeader").clientHeight
    ) {
      $("html,body").animate(
        {
          scrollTop: $("#membersTitle").offset().top,
        },
        "slow",
        "linear"
      );
    }
  }
  $(".projects").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
    fullscreen: true,
  });

  document.getElementById("stop").addEventListener("click", (e) => {
    e.preventDefault();
    let $carousels = $(
      ".projectCarouselInteraktion, .projectCarouselMib, .projectCarouselScrumXP"
    );
    // Stop slideshows and change appearance of button
    if (e.target.classList.contains("stop")) {
      e.target.classList.add("start");
      e.target.classList.remove("stop");
      e.target.textContent = "Start Slideshow";
      $carousels.flickity("stopPlayer");
      // Start slideshows and change appearance of button
    } else {
      e.target.classList.add("stop");
      e.target.classList.remove("start");
      e.target.textContent = "Stop Slideshow";
      $carousels.flickity("playPlayer");
    }
  });

  var clickedAnchor = "";
  var contentAnchors = document.getElementsByClassName("contentAnchor");
  for (i = 0; i < contentAnchors.length; i++) {
    contentAnchors[i].addEventListener("click", function (e) {
      sessionStorage.setItem("number", this);
      clickedAnchor = e;
    });
  }

  window.addEventListener(
    "scroll",
    function () {
      navBarFunction();
    },
    false
  );

  // Hide navbar when viewing projects in fullscreen
  $(".flickity-button").on("click", () => {
    $("#navbar").toggle();
  });

  // Hamburger
  var hamburger = document.querySelector(".hamburger");
  var nav = document.getElementById("nav");

  $("#hamburger").on("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("toggle");
  });

  $(".overlay-content a").on("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("toggle");
  });

  // Add smooth scrolling to all links
  $(".links a, .overlay-content a, .nav-horizontal a").on("click", function (
    event
  ) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        350,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  // Sticky Navbar
  var navbar = document.getElementById("navbar");
  navBarFunction();
  function navBarFunction() {
    if (
      $(window).scrollTop() >
      // document.body.getBoundingClientRect().top +
      //   document.getElementById("navbar").clientHeight <=
      // document.getElementById("backgroundHeader").clientHeight <=
      1
    ) {
      navbar.classList.add("sticky");
      navbar.classList.remove("stickyRemove");
    } else if (
      $(window).scrollTop() <
      // document.body.getBoundingClientRect().top +
      //   document.getElementById("navbar").clientHeight >
      // document.getElementById("backgroundHeader").clientHeight >
      1
    ) {
      navbar.classList.remove("sticky");
      navbar.classList.add("stickyRemove");
    }
  }
});
