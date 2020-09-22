$(document).ready(function () {
  var ix = 0;
  var members = [
    {
      name: "Lukas Brolin",
      introText: "Hej jag heter Lukas",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["2", "1", "1", "1", "1"],
      image: "img/Lukas.jpg",
      location: "Västerås, SE",
      email: "lukas@oru.se",
      phone: "+46 707 818 096"
    },
    {
      name: "Simon Wallstedt Bernsdorff",
      introText: "Hej jag heter Simon",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["9", "1", "9", "1", "9"],
      image: "img/SimonTest.jpg",
      location: "Örebro, SE",
      email: "simon@oru.se",
      phone: "0202020250"
    },
    {
      name: "Jonatan Angergård",
      introText: "Hej jag heter Jonatan",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["2", "3", "4", "1", "1"],
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
    {
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["0", "0", "0", "0", "0"],
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

  

   function setValues(theValue){
     console.log("saywut")
    document.getElementById("memberIntro").innerHTML = "<p><h1>" + members[theValue].name + "</h1>" + members[theValue].introText + "</p>"
    document.getElementById("memberName").innerHTML = "<Strong>Name: </Strong>" + members[theValue].name
    document.getElementById("memberLocation").innerHTML = "<Strong>Location: </Strong>" + members[theValue].location
    document.getElementById("memberMail").innerHTML = "<Strong>Email: </Strong>" + members[theValue].email
    document.getElementById("memberPhone").innerHTML = "<Strong>Phone: </Strong>" + members[theValue].phone
    console.log("yeeee")
   }

   
   sessionStorage.setItem("number", "")
  //  LoadChart(indexBefore);
  //  setValues(indexBefore)

  
  window.addEventListener(
    "scroll",
    function () {
      navBarFunction();
    },
    false
    );

    
    
    
    var config = {
      type: "bar",
      data: {
          labels: members[4].chartLabel,
          // labels: ["PS", "Java", "HTML", "CSS", "JS"],
          datasets: [
            {
              label: "Expertise",
              data: members[4].chartValue,
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
        }
      }
      
      
      function theFunction(){
        console.log("check")
        var ctx = document.getElementById("myChart").getContext("2d");
        window.myChart = getNewChart(ctx, config);
        console.log(myChart.data.labels.length + " är längden");
      }
      
      function getNewChart(canvas, config) {
        return new Chart(canvas, config);
      }
      theFunction()
      
      function fillNewContent(index){
        if(index === ""){
          index=0;
        }
        for(i = 0; i < myChart.data.labels.length; i++){
          myChart.data.labels[i] = members[index].chartLabel[i]
        }
        for(i = 0; i < myChart.data.datasets[0].data.length; i++){
        myChart.data.datasets[0].data[i] = members[index].chartValue[i]
        }
        myChart.update();
      }
      //       // Charts
      //       function LoadChart(i){
        //         // var myChart = "";
        //           console.log(i)
        //           if(i === ""){
          //             i=0;
          //           }
          //           console.log(myChart);
          //           // delete myChart$(myChart)
          //           $("#myChart")
          //   var ctx = document.getElementById("myChart").getContext("2d");
          //   myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
  //       labels: members[i].chartLabel,
  //       // labels: ["PS", "Java", "HTML", "CSS", "JS"],
  //       datasets: [
    //         {
//           label: "Expertise",
//           data: members[i].chartValue,
//           backgroundColor: [
  //             "rgba(163, 162, 152,1)",
  //             "rgba(99,99,92,1)",
  //             "rgba(163, 162, 152,1)",
  //             "rgba(99,99,92,1)",
  //             "rgba(163, 162, 152,1)",
  //             "rgba(99,99,92,1)",
  //           ],
  //           borderColor: [
    //             "rgba(163, 162, 152,1)",
    //             "rgba(99,99,92,1)",
    //             "rgba(163, 162, 152,1)",
    //             "rgba(99,99,92,1)",
    //             "rgba(163, 162, 152,1)",
    //             "rgba(99,99,92,1)",
    //           ],
    //           borderWidth: 1,
    //         },
    //       ],
    //     },
    //     options: {
      //       legend: {
        //         display: true,
        //         labels: {
          //           boxWidth: 0,
          //         },
          //       },
          //       scales: {
            //         yAxes: [
              //           {
                //             ticks: {
                  //               beginAtZero: true,
                  //               max: 10,
                  //             },
                  //           },
                  //         ],
                  //       },
                  //     },
                  //   });
                  //   console.log(myChart)
                  //   console.log($("#myChart"))
                  //   myChart.data.datasets[0].data[0] = 0;
                  //   myChart.update();
                  // }
                  
                 
 function setValues(indexBefore){
  if(indexBefore === ""){
    indexBefore=0;
  }
  console.log("saywut")
  console.log(members[1])
  console.log(indexBefore + "hej")
  document.getElementById("memberIntro").innerHTML = "<p><h1>" + members[indexBefore].name + "</h1>" + members[indexBefore].introText + "</p>"
  document.getElementById("memberName").innerHTML = "<Strong>Name: </Strong>" + members[indexBefore].name
  document.getElementById("memberLocation").innerHTML = "<Strong>Location: </Strong>" + members[indexBefore].location
  document.getElementById("memberMail").innerHTML = "<Strong>Email: </Strong>" + members[indexBefore].email
  document.getElementById("memberPhone").innerHTML = "<Strong>Phone: </Strong>" + members[indexBefore].phone
  console.log("yeeee")
}

fillNewContent(indexBefore)
setValues(indexBefore)

var carouselIndex = 0;
var $carousel = $(".mainCarousel").flickity({
  cellAlign: "center",
  wrapAround: true,
  on: {
    change: function(index){
      
      setValues(index)
      fillNewContent(index);
      console.log("Detta är index" + index)
      carouselIndex = index;
      // myChart.options.labels.pop();
      // removeData(myChart)
      // myChart.update();
      
      // LoadChart(carouselIndex);
      // myChart.update();
      console.log(members[carouselIndex].chartLabel)    
    }
  }
  // freeScroll: true
});



$carousel.flickity( 'select', indexBefore );


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
  
      function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }
});
window.onload = function() {
  
  
  
};
