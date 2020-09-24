$(document).ready(function () {
  var fNameSend = false;
  var lNameSend = false;
  var phoneSend = false;
  var emailSend = false;

  var $regexName = /^[a-öA-Ö- ]+$/;
  var $regexNum = /^[0-9+-]+$/;
  var $regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $("#input-name").on("keypress keydown keyup", function () {
    if (!$(this).val().match($regexName)) {
      console.log(this);
      $("#fname").removeClass("hidden");
      $("#fname").show();
      fNameSend = false;
    } else {
      $("#fname").addClass("hidden");
      fNameSend = true;
    }
  });

  $("#input-lastname").on("keypress keydown keyup", function () {
    if (!$(this).val().match($regexName)) {
      $("#lname").removeClass("hidden");
      $("#lname").show();
      lNameSend = false;
    } else {
      $("#lname").addClass("hidden");
      lNameSend = true;
    }
  });

  $("#input-phone").on("keypress keydown keyup", function () {
    if (!$(this).val().match($regexNum)) {
      $("#phone").removeClass("hidden");
      $("#phone").show();
      phoneSend = false;
    } else {
      $("#phone").addClass("hidden");
      phoneSend = true;
    }
  });

  $("#input-email").on("keypress keydown keyup", function () {
    if (!$(this).val().match($regexEmail)) {
      $("#email").removeClass("hidden");
      $("#email").show();
      emailSend = false;
    } else {
      $("#email").addClass("hidden");
      emailSend = true;
    }
  });

  // const handleFormSubmit = event =>
  // {
  //   event.preventDeafult();

  //   const data = {};

  //   const dataContainer = document.getElementsByClassName('theForm')[0];

  //   dataContainer.textContent = JSON.stringify(data, null, "");
  // }

  // $(".theForm").submit(function() {

  //     console.log($(this).formToJson());

  //     return false;

  //   });

  if (window.localStorage) {
    var txtFName = document.getElementById("input-name");
    var txtLName = document.getElementById("input-lastname");
    var txtPhone = document.getElementById("input-phone");
    var txtEmail = document.getElementById("input-email");

    txtFName.value = localStorage.getItem("input-name");
    txtLName.value = localStorage.getItem("input-lastname");
    txtPhone.value = localStorage.getItem("input-phone");
    txtEmail.value = localStorage.getItem("input-email");

    txtFName.addEventListener(
      "input",
      function () {
        localStorage.setItem("input-name", txtFName.value);
      },
      false
    );

    txtLName.addEventListener(
      "input",
      function () {
        localStorage.setItem("input-lastname", txtLName.value);
      },
      false
    );

    txtPhone.addEventListener(
      "input",
      function () {
        localStorage.setItem("input-phone", txtPhone.value);
      },
      false
    );

    txtEmail.addEventListener(
      "input",
      function () {
        localStorage.setItem("input-email", txtEmail.value);
      },
      false
    );
  }

  document.getElementById("formSubmit").addEventListener("click", (e) => {
    e.preventDefault();
  });

  window.addEventListener("load", fetchStorage);

  function fetchStorage() {
    // firstname
    let name = localStorage.getItem("input-name");
    txtFName.value = name;
    // lastname
    let lastname = localStorage.getItem("input-lastname");
    txtLName.value = lastname;
    // phone
    let phone = localStorage.getItem("input-phone");
    txtPhone.value = phone;
    // email
    let email = localStorage.getItem("input-email");
    txtEmail.value = email;
  }
});
