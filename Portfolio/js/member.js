$(document).ready(function () {


  

    var carouselIndex = 0;
    var $carousel = $(".mainCarousel").flickity({
    cellAlign: "center",
    wrapAround: false,
    on: {
        change: function(index){
      
      setValues(index)
      fillNewContent(index);
      console.log("Detta är index" + index)
      carouselIndex = index;
      console.log(members[carouselIndex].chartLabel)    
    }
  }
});


var ix = 0;
  var members = [
    {
      name: "Lukas Brolin",
      introText: "Hej jag heter Lukas",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS", "XD", "Sketchup"],
      chartValue: ["7", "8", "7", "6", "7", "8", "5"],
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
      chartLabel: ["PS", "Java", "HTML", "CSS"],
      chartValue: ["1", "10", "5", "2"],
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
  console.log(indexBefore + " dehära");
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

  

  // function setValues(indexBefore){
  //   console.log("saywut")
  //  document.getElementById("memberIntro").innerHTML = "<p><h1>" + members[indexBefore].name + "</h1>" + members[indexBefore].introText + "</p>"
  //  document.getElementById("memberName").innerHTML = "<Strong>Name: </Strong>" + members[indexBefore].name
  //  document.getElementById("memberLocation").innerHTML = "<Strong>Location: </Strong>" + members[indexBefore].location
  //  document.getElementById("memberMail").innerHTML = "<Strong>Email: </Strong>" + members[indexBefore].email
  //  document.getElementById("memberPhone").innerHTML = "<Strong>Phone: </Strong>" + members[indexBefore].phone
  //  console.log("yeeee")
  // }

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
            fontColor: "#2f2f2d",
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

    

    Chart.defaults.global.defaultFontColor = "#2f2f2d";
    
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
      if(members[index].chartValue.length < myChart.data.labels.length){
        while(members[index].chartValue.length < myChart.data.labels.length){
          config.data.labels.splice(-1, 1)
        }
      }
      for(i = 0; i < members[index].chartValue.length; i++){
        myChart.data.labels[i] = members[index].chartLabel[i]
      }
      for(i = 0; i < members[index].chartValue.length; i++){
      myChart.data.datasets[0].data[i] = members[index].chartValue[i]
      }
      // for(i = 0; i < myChart.data.labels.length; i++){
      //   myChart.data.labels[i] = members[index].chartLabel[i]
      // }
      // for(i = 0; i < myChart.data.datasets[0].data.length; i++){
      // myChart.data.datasets[0].data[i] = members[index].chartValue[i]
      // }
      myChart.update();
    }

    

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

      

      $carousel.flickity( 'select', indexBefore );
      

      function getInstance() {
        var flkty = $carousel.data("flickity");
        console.log(flkty.selectedIndex);
      }

      

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
        // event.preventDefault();
        
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
});
