$(document).ready(function () {
  var carouselIndex = 0;
  var $carousel = $(".mainCarousel").flickity({
    cellAlign: "center",
    wrapAround: false,
    on: {
      change: function (index) {
        setValues(index);
        fillNewContent(index);
        console.log("Detta är index" + index);
        carouselIndex = index;
        console.log(members[carouselIndex].chartLabel);
      },
    },
  });

  var ix = 0;
  var members = [
    {
      name: "Lukas Brolin",
      introText:
        "I am a programmer. You think thats shit funny? It's a hard and tedious task that only the best can do, and I am the best at what I do. I used to work for NASA and CERN before I got bored and decided to challenge my intellect even further and switched to HTML/CSS and JavaScript. I never test my code. Testing your code is just synonomous with being a bad programmer that fails at life. I write my code once and then it works, simple as that.",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS", "XD", "Sketchup"],
      chartValue: ["7", "8", "7", "6", "7", "8", "5"],
      image: "img/Lukas.jpg",
      location: "Västerås, SE",
      email: "lukas@oru.se",
      phone: "+46 707 818 096",
    },
    {
      name: "Simon Wallstedt Bernsdorff",
      introText:
        "Once every blue moon I write some code, if Lukas allows it. He is usually the boss around here, even though me and the other guys see him more as a dictator/fascist. Someday I wish I was as good as Lukas, just having that go in me and being a true rockstar programmer. For now I'll just stick to being lambasted by Lukas and commenting code which is the only thing I am allowed to do. Oh, and I also make coffee for the team. Gotta start somewhere y'know?",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["1", "1", "2", "1", "0.5"],
      image: "img/SimonTest.jpg",
      location: "Örebro, SE",
      email: "simon@oru.se",
      phone: "0202020250",
    },
    {
      name: "Jonatan Angergård",
      introText:
        "Coding is more than a hobby, it's a lifestyle. Some people are just not cut out to be one. You got to have dedication, stamina, willpower, endurance and a big-dick aura to make it work. That's what I always say. Anyway I don't have time for this cute little chit-chatter, I have to write this nested 5-layer propagating machinelearning algorithm that will power up Amazons next datacenter so if you could please back off and let me do my work that would be greatly appreciated.",
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["2", "7", "7", "5", "8"],
      image: "img/Jonatan.png",
      location: "Örebro, SE",
      email: "jonte@oru.se",
      phone: "020202040",
    },
    {
      name: "Sven Isac Hedengren",
      introText:
        "Hej jag heter Isac. Detta är en beskrivande text, i enlighet med projektuppgift.",
      chartLabel: ["PS", "Java", "HTML", "CSS"],
      chartValue: ["2", "4", "4", "4"],
      image: "img/Isac.png",
      location: "Örebro, SE",
      email: "isac@oru.se",
      phone: "020202030",
    },
    {
      chartLabel: ["PS", "Java", "HTML", "CSS", "JS"],
      chartValue: ["0", "0", "0", "0", "0"],
    },
  ];

  console.log(sessionStorage.getItem("number"));
  var getIndex = sessionStorage.getItem("number");
  var indexBefore = getIndex.substring(getIndex.length - 1);
  console.log(indexBefore + " dehära");
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
    },
  };

  Chart.defaults.global.defaultFontColor = "#2f2f2d";

  function theFunction() {
    console.log("check");
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myChart = getNewChart(ctx, config);
    console.log(myChart.data.labels.length + " är längden");
  }

  function getNewChart(canvas, config) {
    return new Chart(canvas, config);
  }
  theFunction();

  function fillNewContent(index) {
    if (index === "") {
      index = 0;
    }
    if (members[index].chartValue.length < myChart.data.labels.length) {
      while (members[index].chartValue.length < myChart.data.labels.length) {
        config.data.labels.splice(-1, 1);
      }
    }
    for (i = 0; i < members[index].chartValue.length; i++) {
      myChart.data.labels[i] = members[index].chartLabel[i];
    }
    for (i = 0; i < members[index].chartValue.length; i++) {
      myChart.data.datasets[0].data[i] = members[index].chartValue[i];
    }
    // for(i = 0; i < myChart.data.labels.length; i++){
    //   myChart.data.labels[i] = members[index].chartLabel[i]
    // }
    // for(i = 0; i < myChart.data.datasets[0].data.length; i++){
    // myChart.data.datasets[0].data[i] = members[index].chartValue[i]
    // }
    myChart.update();
  }

  function setValues(indexBefore) {
    if (indexBefore === "") {
      indexBefore = 0;
    }
    console.log("saywut");
    console.log(members[1]);
    console.log(indexBefore + "hej");
    document.getElementById("memberIntro").innerHTML =
      "<p><h1>" +
      members[indexBefore].name +
      "</h1>" +
      members[indexBefore].introText +
      "</p>";
    document.getElementById("memberName").innerHTML =
      "<Strong>Name: </Strong>" + members[indexBefore].name;
    document.getElementById("memberLocation").innerHTML =
      "<Strong>Location: </Strong>" + members[indexBefore].location;
    document.getElementById("memberMail").innerHTML =
      "<Strong>Email: </Strong>" + members[indexBefore].email;
    document.getElementById("memberPhone").innerHTML =
      "<Strong>Phone: </Strong>" + members[indexBefore].phone;
    console.log("yeeee");
  }

  fillNewContent(indexBefore);
  setValues(indexBefore);

  $carousel.flickity("select", indexBefore);

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
