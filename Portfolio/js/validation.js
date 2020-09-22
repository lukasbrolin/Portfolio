$(document).ready(function () {
  var $regexName = /^[a-öA-Ö- ]+$/;
  var $regexNum = /^[0-9+-]+$/;
  var $regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $("#input-name").on("keypress keydown keyup", function () {
    console.log("keypress");
    if (!$(this).val().match($regexName)) {
      console.log(this);
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
});
