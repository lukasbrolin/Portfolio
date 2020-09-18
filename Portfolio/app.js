$(function () {
  window.addEventListener(
    "scroll",
    function () {
      scrollWindow()
      navBarFunction();
    },
    false
  );

  var scrollPos = 0;

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function navBarFunction(){
    
    if(document.body.getBoundingClientRect().top + document.getElementById("backgroundHeader").clientHeight < 0){
      navbar.classList.add("sticky")
      console.log("success")
    }
    else if((document.body.getBoundingClientRect().top + document.getElementById("backgroundHeader").clientHeight >= 0)){
      navbar.classList.remove("sticky")
      console.log("fail")
    }

  }

  function scrollWindow() {
    if (document.body.getBoundingClientRect().top < scrollPos &&
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
      scrollPos + (document.getElementById("backgroundHeader").clientHeight + 196) >
        -10 &&
      scrollPos + (document.getElementById("backgroundHeader").clientHeight + 196) < 150
    ) {
      $("html,body").animate(
        {
          scrollTop: $("body").offset().top,
        },
        "slow"
      );
    }
    // saves the new position for iteration
    scrollPos = document.body.getBoundingClientRect().top;
  }

  // Hamburger
  var hamburger = document.querySelector(".hamburger");
  var nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("toggle");
  });
});
