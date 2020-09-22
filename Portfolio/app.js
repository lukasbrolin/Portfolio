$(function () {
  $(".mainCarousel").flickity({
    cellAlign: "center",
    wrapAround: true,
    // freeScroll: true
  });

  $(".projectCarousel").flickity({
    cellAlign: "center",
    wrapAround: true,
  });

  window.addEventListener(
    "scroll",
    function () {
      navBarFunction();
    },
    false
  );

  // Sticky Navbar
  var navbar = document.getElementById("navbar");
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

  // Charts
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["PS", "Java", "HTML", "CSS", "JS"],
      datasets: [
        {
          label: "Expertise",
          data: [7, 8, 7, 6, 5],
          backgroundColor: [
            "rgba(163, 162, 152,1)",
            "rgba(99,99,92,1)",
            "rgba(163, 162, 152,1)",
            "rgba(99,99,92,1)",
            "rgba(163, 162, 152,1)",
            "rgba(99,99,92,1)",
          ],
          borderColor: [
            "rgba(163, 162, 152,1)",
            "rgba(99,99,92,1)",
            "rgba(163, 162, 152,1)",
            "rgba(99,99,92,1)",
            "rgba(163, 162, 152,1)",
            "rgba(99,99,92,1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        labels: {
          boxWidth: 0,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 10,
            },
          },
        ],
      },
    },
  });

  var element = document.querySelector(".main-carousel");
  console.log(element);

  // google.charts.load('current', {'packages':['bar']});
  //     google.charts.setOnLoadCallback(drawStuff);

  //     function drawStuff() {
  //       var data = new google.visualization.arrayToDataTable([
  //         ['Opening Move', 'Percentage'],
  //         ["King's pawn (e4)", 9],
  //         ["Queen's pawn (d4)", 6],
  //         ["Knight to King 3 (Nf3)", 5],
  //         ["Queen's bishop pawn (c4)", 4],
  //         ['Other', 3]
  //       ]);

  //       var options = {
  //         title: 'Chess opening moves',
  //         width: '100%',
  //         backgroundColor:{
  //           fill: "red"
  //         },
  //         legend: { position: 'none' },
  //         chart: { title: 'Chess opening moves',
  //                  subtitle: 'popularity by percentage' },
  //         bars: 'horizontal', // Required for Material Bar Charts.
  //         axes: {
  //           x: {
  //             0: { side: 'top', label: 'Points'} // Top x-axis.
  //           }
  //         },
  //         bar: { groupWidth: "90%" }
  //       };

  //       var chart = new google.charts.Bar(document.getElementById('chart'));
  //       chart.draw(data, options);
  //     };

  // var members = [
  //   {
  //     name: "Lukas Brolin",
  //     image: "img/Lukas.jpg",
  //   },
  //   {
  //     name: "Simon Wallstedt Bernsdorff",
  //     image: "img/SimonTest.jpg",
  //   },
  //   {
  //     name: "Jonatan Angergård",
  //     image: "img/Jonatan.png",
  //   },
  //   {
  //     name: "Sven Isac Hedengren",
  //     image: "img/Isac.png",
  //   },
  // ];

  // // var queryString = location.search.substring(1);

  // var queryString = location.search.substring(1);
  // console.log(queryString);

  // function fillMembers() {
  //   console.log("xd0");
  //   // $( document ).ready(function() {
  //   var box1 = document.getElementById("pictureMiddle");
  //   box1.setAttribute("src", members[queryString].image);
  //   box1.setAttribute("src", members[queryString].image);
  //   console.log(members[queryString].image);
  //   console.log(members[1]);
  //   // })
  // }
  // fillMembers();

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

  navBarFunction();
});
window.onload = function () {};

var $regexName = /^[a-öA-Ö- ]+$/;
var $regexNum = /^[0-9+-]+$/;
var $regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
$("#input-name").on("keypress keydown keyup", function () {
  if (!$(this).val().match($regexName)) {
    $("#fname").removeClass("hidden");
    $("#fname").show();
  } else {
    $("#fname").addClass("hidden");
  }
});

$("#input-lastname").on("keypress keydown keyup", function () {
  if (!$(this).val().match($regexName)) {
    $("#lname").removeClass("hidden");
    $("#lname").show();
  } else {
    $("#lname").addClass("hidden");
  }
});

$("#input-phone").on("keypress keydown keyup", function () {
  if (!$(this).val().match($regexNum)) {
    $("#phone").removeClass("hidden");
    $("#phone").show();
  } else {
    $("#phone").addClass("hidden");
  }
});

$("#input-email").on("keypress keydown keyup", function () {
  if (!$(this).val().match($regexEmail)) {
    $("#email").removeClass("hidden");
    $("#email").show();
  } else {
    $("#email").addClass("hidden");
  }
});
