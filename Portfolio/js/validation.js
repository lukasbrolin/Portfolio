$(document).ready(function () {
  // Set variables for user inputs
  var txtFName = document.getElementById("input-name");
  var txtLName = document.getElementById("input-lastname");
  var txtPhone = document.getElementById("input-phone");
  var txtEmail = document.getElementById("input-email");

  var fNameSend, lNameSend, phoneSend, emailSend;

  // Regex - regular expressions patterns.
  var $regexName = /^[a-öA-Ö- ]+$/;
  var $regexNum = /^[0-9+-]+$/;
  var $regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // JQuery realtime validation - forms.
  $("#input-name").on("keypress keydown keyup blur", function () {
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

  $("#input-lastname").on("keypress keydown keyup blur", function () {
    if (!$(this).val().match($regexName)) {
      $("#lname").removeClass("hidden");
      $("#lname").show();
      lNameSend = false;
    } else {
      $("#lname").addClass("hidden");
      lNameSend = true;
    }
  });

  $("#input-phone").on("keypress keydown keyup blur", function () {
    if (!$(this).val().match($regexNum)) {
      $("#phone").removeClass("hidden");
      $("#phone").show();
      phoneSend = false;
    } else {
      $("#phone").addClass("hidden");
      phoneSend = true;
    }
  });

  $("#input-email").on("keypress keydown keyup blur", function () {
    if (!$(this).val().match($regexEmail)) {
      $("#email").removeClass("hidden");
      $("#email").show();
      emailSend = false;
    } else {
      $("#email").addClass("hidden");
      emailSend = true;
    }
  });

  // // Save the data input, from the forms, into local storage.
  // if (window.localStorage) {
  //   txtFName.addEventListener(
  //     "input",
  //     function () {
  //       localStorage.setItem("input-name", txtFName.value);
  //     },
  //     false
  //   );

  //   txtLName.addEventListener(
  //     "input",
  //     function () {
  //       localStorage.setItem("input-lastname", txtLName.value);
  //     },
  //     false
  //   );

  //   txtPhone.addEventListener(
  //     "input",
  //     function () {
  //       localStorage.setItem("input-phone", txtPhone.value);
  //     },
  //     false
  //   );

  //   txtEmail.addEventListener(
  //     "input",
  //     function () {
  //       localStorage.setItem("input-email", txtEmail.value);
  //     },
  //     false
  //   );
  // }

  document.getElementById("formSubmit").addEventListener("click", (e) => {
    e.preventDefault(); // prevent site form reloading

    console.log(fNameSend, lNameSend, phoneSend, emailSend);

    // if all fields are correct submit to localStorage
    if (fNameSend && lNameSend && phoneSend && emailSend) {
      // set JS object and set its data to the user inputs
      const user = {
        name: txtFName.value,
        lastname: txtLName.value,
        phone: txtPhone.value,
        email: txtEmail.value,
      };

      // Convert the user object into JSON string and save it into storage
      localStorage.setItem("user", JSON.stringify(user));

      // Empty fields
      txtFName.value = "";
      txtLName.value = "";
      txtPhone.value = "";
      txtEmail.value = "";
    } else {
      console.log("false");
    }
  });

  // run function fetchStorage when page loads
  window.addEventListener("load", fetchStorage);

  // Fetch data from localStorage when page loads
  function fetchStorage() {
    var jsonString = localStorage.getItem("user");
    var retrievedObject = JSON.parse(jsonString);

    // fetch firstname
    txtFName.value = retrievedObject.name;
    // fetch lastName
    txtLName.value = retrievedObject.lastname;
    // fetch phone
    txtPhone.value = retrievedObject.phone;
    // fetch email
    txtEmail.value = retrievedObject.email;
  }
});
