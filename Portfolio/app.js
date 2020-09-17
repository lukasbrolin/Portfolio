$(function () {
  window.addEventListener(
    "scroll",
    function () {
      scrollWindow();
    },
    false
  );

  var scrollPos = 0;

  function scrollWindow() {
    if (
      document.body.getBoundingClientRect().top < scrollPos &&
      scrollPos === 0
    ) {
      $("html,body").animate(
        {
          scrollTop: $(".contentTitle").offset().top,
        },
        "slow"
      );
    } else if (
      document.body.getBoundingClientRect().top > scrollPos &&
      scrollPos + document.getElementById("backgroundHeader").clientHeight >
        -10 &&
      scrollPos + document.getElementById("backgroundHeader").clientHeight < 10
    ) {
      $("html,body").animate(
        {
          scrollTop: $(".header").offset().top,
        },
        "slow"
      );
    }
    // saves the new position for iteration
    scrollPos = document.body.getBoundingClientRect().top;
  }
});

var nav = document.getElementById("headingNav");
var el = document.getElementById("hamburger");
el.addEventListener("click", () => {
  nav.classList.toggle("overlay");
});
