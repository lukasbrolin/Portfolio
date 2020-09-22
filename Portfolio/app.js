$(document).ready(function () {

  var members = [
    {
      name: "Lukas Brolin",
      introText: "Hej jag heter Lukas",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["7", "7", "7", "6", "6"],
      image: "img/Lukas.jpg",
      location: "Västerås, SE",
      email: "lukas@oru.se",
      phone: "+46 707 818 096"
    },
    {
      name: "Simon Wallstedt Bernsdorff",
      introText: "Hej jag heter Simon",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS", "Kuksugning"],
      chartValue: ["7", "7", "7", "6", "6", "10"],
      image: "img/SimonTest.jpg",
      location: "Örebro, SE",
      email: "simon@oru.se",
      phone: "0202020250"
    },
    {
      name: "Jonatan Angergård",
      introText: "Hej jag heter Jonatan",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["7", "7", "7", "6", "6"],
      image: "img/Jonatan.png",
      location: "Örebro, SE",
      email: "jonte@oru.se",
      phone: "020202040"
    },
    {
      name: "Sven Isac Hedengren",
      introText: "Hej jag heter Isac",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["1", "10", "5", "2", "6"],
      image: "img/Isac.png",
      location: "Örebro, SE",
      email: "isac@oru.se",
      phone: "020202030"
    },
  ];


  console.log(sessionStorage.getItem("number"))
  var getIndex = sessionStorage.getItem("number")
  var indexBefore = getIndex.substring(getIndex.length - 1)
  var clickedAnchor = "";
  var contentAnchors = document.getElementsByClassName("contentAnchor")
  console.log(contentAnchors)
  for(i = 0; i < contentAnchors.length; i++){
    console.log("hej")
      //document. 
      contentAnchors[i].addEventListener("click", function(e){
      sessionStorage.setItem("number", this)
      clickedAnchor = e;
      console.log(e)
    })
    
  }
  sessionStorage.setItem("number", "")
   LoadChart(indexBefore);
  
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
        function LoadChart(i){
          console.log(i)
          if(i === ""){
            i=0;
          }
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: members[i].chartLabel,
      // labels: ["PS", "Java", "HTML", "CSS", "JS"],
      datasets: [
        {
          label: "Expertise",
          data: members[i].chartValue,
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
}

  var carouselIndex = 0;
  var $carousel = $(".mainCarousel").flickity({
    cellAlign: "center",
    wrapAround: true,
    on: {
      change: function(index){
        
        document.getElementById("memberIntro").innerHTML = "<p><h1>" + members[index].name + "</h1>" + members[index].introText + "</p>"
        document.getElementById("memberName").innerHTML = "<Strong>Name: </Strong>" + members[index].name
        document.getElementById("memberLocation").innerHTML = "<Strong>Location: </Strong>" + members[index].location
        document.getElementById("memberMail").innerHTML = "<Strong>Email: </Strong>" + members[index].email
      document.getElementById("memberPhone").innerHTML = "<Strong>Phone: </Strong>" + members[index].phone
      carouselIndex = index;
        // myChart.options.labels.pop();
        LoadChart(carouselIndex);
        // myChart.update();
        console.log(members[carouselIndex].chartLabel)    
       }
    }
     // freeScroll: true
   });

  //  function setValues(theValue){
  //   document.getElementById("memberIntro").innerHTML = "<p><h1>" + members[theValue].name + "</h1>" + members[theValue].introText + "</p>"
  //   document.getElementById("memberName").innerHTML = "<Strong>Name: </Strong>" + members[theValue].name
  //   document.getElementById("memberLocation").innerHTML = "<Strong>Location: </Strong>" + members[theValue].location
  //   document.getElementById("memberMail").innerHTML = "<Strong>Email: </Strong>" + members[theValue].ematheValuedocument.getElementById("memberPhone").innerHTML = "<Strong>Phone: </Strong>" + members[theValue].phone
  //  }

  var element = document.querySelector(".main-carousel");
  console.log(element);
  

  function getInstance() {
    var flkty = $carousel.data("flickity");
    console.log(flkty.selectedIndex);
  }

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

  // REGEX
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  navBarFunction();
});
window.onload = function() {
  
  

};
