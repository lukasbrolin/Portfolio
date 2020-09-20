$(function () {
  window.addEventListener(
    "scroll",
    function () {
      navBarFunction();
    },
    false
  );

  var navbar = document.getElementById("navbar");
  function navBarFunction() {
    if (
      document.body.getBoundingClientRect().top +
        document.getElementById("backgroundHeader").clientHeight <
      0
    ) {
      navbar.classList.add("sticky");
    } else if (
      document.body.getBoundingClientRect().top +
        document.getElementById("backgroundHeader").clientHeight >=
      0
    ) {
      navbar.classList.remove("sticky");
    }
  }

  // function scrollWindow() {
  //   if (
  //     document.body.getBoundingClientRect().top < scrollPos &&
  //     scrollPos === 0
  //   ) {
  //     $("html,body").animate(
  //       {
  //         scrollTop: $(".contentTitle").offset().top,
  //       },
  //       "slow"
  //     );
  //   } else if (
  //     document.body.getBoundingClientRect().top > scrollPos &&
  //     scrollPos +
  //       (document.getElementById("backgroundHeader").clientHeight + 196) >
  //       -10 &&
  //     scrollPos +
  //       (document.getElementById("backgroundHeader").clientHeight + 196) <
  //       150
  //   ) {
  //     $("html,body").animate(
  //       {
  //         scrollTop: $("body").offset().top,
  //       },
  //       "slow"
  //     );
  //   }
  //   // saves the new position for iteration
  //   scrollPos = document.body.getBoundingClientRect().top;
  // }

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
  $("a").on("click", function (event) {
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

  navBarFunction();
});
