$(document).ready(function () {
  $(".projectCarouselInteraktion").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
  });
  $(".projectCarouselMib").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
  });
  $(".projectCarouselScrumXP").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
  });

  var clickedAnchor = "";
  var contentAnchors = document.getElementsByClassName("contentAnchor");
  console.log(contentAnchors);
  for (i = 0; i < contentAnchors.length; i++) {
    console.log("hej");
    //document.
    contentAnchors[i].addEventListener("click", function (e) {
      sessionStorage.setItem("number", this);
      clickedAnchor = e;
      console.log(e);
    });
  }
  // sessionStorage.setItem("number", "")

  window.addEventListener(
    "scroll",
    function () {
      navBarFunction();
    },
    false
  );

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
  $(".links a, .overlay-content a").on("click", function (event) {
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
      0
    ) {
      navbar.classList.add("sticky");
    } else if (
      document.body.getBoundingClientRect().top +
        document.getElementById("backgroundHeader").clientHeight >
      0
    ) {
      navbar.classList.remove("sticky");
    }
  }

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
});
window.onload = function () {};

// var $regexName = /^[a-öA-Ö- ]+$/;
// var $regexNum = /^[0-9+-]+$/;
// var $regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// $("#input-name").on("keypress keydown keyup", function () {
//   if (!$(this).val().match($regexName)) {
//     $("#fname").removeClass("hidden");
//     $("#fname").show();
//   } else {
//     $("#fname").addClass("hidden");
//   }
// });

// $("#input-lastname").on("keypress keydown keyup", function () {
//   if (!$(this).val().match($regexName)) {
//     $("#lname").removeClass("hidden");
//     $("#lname").show();
//   } else {
//     $("#lname").addClass("hidden");
//   }
// });

// $("#input-phone").on("keypress keydown keyup", function () {
//   if (!$(this).val().match($regexNum)) {
//     $("#phone").removeClass("hidden");
//     $("#phone").show();
//   } else {
//     $("#phone").addClass("hidden");
//   }
// });

// $("#input-email").on("keypress keydown keyup", function () {
//   if (!$(this).val().match($regexEmail)) {
//     $("#email").removeClass("hidden");
//     $("#email").show();
//   } else {
//     $("#email").addClass("hidden");
//   }
// });
