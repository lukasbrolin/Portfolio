$(document).ready(function () {
  document.getElementById("theScroll").addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      scrollWindow();
    },
    false
  );

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
  console.log(contentAnchors);
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

  // Toggle navbar when viewing projects in fullscreen
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
      document.body.getBoundingClientRect().top +
        document.getElementById("backgroundHeader").clientHeight <=
      1
    ) {
      navbar.classList.add("sticky");
    } else if (
      document.body.getBoundingClientRect().top +
        document.getElementById("backgroundHeader").clientHeight >
      1
    ) {
      navbar.classList.remove("sticky");
    }
  }
});
