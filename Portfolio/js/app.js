$(document).ready(function () {


    document.getElementById("theScroll").addEventListener("click", function (e) {
      e.preventDefault();
        scrollWindow();
        // navBarFunction()
        // scrollWindow()
        // navBarFunction();
      },
      false
    );
  
    var scrollPos = 0;
  
    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;
    // function navBarFunction(){
  
    //   if(document.body.getBoundingClientRect().top + document.getElementById("backgroundHeader").clientHeight < 0){
    //     navbar.classList.add("sticky")
    //   }
    //   else if((document.body.getBoundingClientRect().top + document.getElementById("backgroundHeader").clientHeight >= 0)){
    //     navbar.classList.remove("sticky")
    //   }
  
    // }

    function scrollWindow() {
      console.log("Vad detta nu är: " + document.body.getBoundingClientRect().top);
      console.log("Ska vara samma som ovan ^: " + window.scrollY)
      console.log("ScrollPos: " + scrollPos);
      console.log("Background + navbar height: " + (document.getElementById("backgroundHeader").clientHeight + document.getElementById("navbar").clientHeight));
      if (window.scrollY < document.getElementById("backgroundHeader").clientHeight
        // document.body.getBoundingClientRect().top < scrollPos &&
        // (document.body.getBoundingClientRect().top <= 0 && document.body.getBoundingClientRect().top > -50)
      ) {
        console.log("DU FÅR INTE KOMMA IVÄG");
        $("html,body").animate(
          {
            scrollTop: $("#membersTitle").offset().top,
          },
          "slow", "linear"
        );
      } else if (window.scrollY >= document.getElementById("backgroundHeader").clientHeight
        // document.body.getBoundingClientRect().top > scrollPos &&
        // scrollPos +
        //   // (document.getElementById("backgroundHeader").clientHeight + 196) >
        //   (document.getElementById("backgroundHeader").clientHeight + document.getElementById("navbar").clientHeight) >
        //   -10 &&
        // scrollPos +
        //   // (document.getElementById("backgroundHeader").clientHeight + 196) <
        //   (document.getElementById("backgroundHeader").clientHeight + document.getElementById("navbar").clientHeight) <
        //   150
      ) {
        $("html,body").animate(
          {
            scrollTop: $("body").offset().top,
          },
          "slow"
        );
      }
      else{
        console.log("jag skiter i dig");
      }
      // saves the new position for iteration
      scrollPos = document.body.getBoundingClientRect().top;
    }
 
  
  $(".projectCarouselInteraktion").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
    fullscreen: true,
  });
  $(".projectCarouselMib").flickity({
    cellAlign: "center",
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: true,
    fullscreen: true,
  });
  $(".projectCarouselScrumXP").flickity({
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
// new
  

// to new

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
});
