$(document).ready(function () {
  AOS.init({}); // initiate fade in images for the members

  /* make scrollbutton on landingpage clickable and scrolls down to member section.
  Also removes overlay if there is one and toggle hamburger back to normal */
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

  // Scrolls down to the image in memberssection
  function scrollWindow() {
    if (
      window.scrollY < document.getElementById("backgroundHeader").clientHeight
    ) {
      $("html,body").animate(
        {
          scrollTop: $("#team-svg").offset().top,
        },
        "slow",
        "linear"
      );
    }
  }
  // Settings on how the projectcarousel behaves
  $(".projects").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
    fullscreen: true,
  });

  // Button that stops the carouself from autoplaying
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

  // Sets a click function on each membercard that saves information in sessionStorage that member.html use.
  var clickedAnchor = "";
  var contentAnchors = document.getElementsByClassName("contentAnchor");
  for (i = 0; i < contentAnchors.length; i++) {
    contentAnchors[i].addEventListener("click", function (e) {
      sessionStorage.setItem("number", this);
      clickedAnchor = e;
    });
  }

  // Event listener that listens for scrollevent
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

  // Change appereance of hamburger and toggle overlay
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

      // Fetches item clicked on
      var hash = this.hash;

      // Scroll to item on page with slight delay
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
  // Adds sticky navbar to top whenever user scrolls down on page and removes it when user is on top at the page.
  function navBarFunction() {
    if ($(window).scrollTop() > 1) {
      navbar.classList.add("sticky");
      navbar.classList.remove("stickyRemove");
    } else if ($(window).scrollTop() < 1) {
      navbar.classList.remove("sticky");
      navbar.classList.add("stickyRemove");
    }
  }
});
