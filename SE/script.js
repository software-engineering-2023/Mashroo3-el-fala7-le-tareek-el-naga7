document.addEventListener("DOMContentLoaded", function() {
  var portalButtons = document.getElementsByClassName("portal-button");

  for (var i = 0; i < portalButtons.length; i++) {
    portalButtons[i].addEventListener("click", function(event) {
      var buttonId = event.target.id;

      switch (buttonId) {
        case "admin-login":
        
          window.location.href = "AdminPortal.html";
          break;
        case "banker-login":
        
          window.location.href = "BankerPortal.html";
          break;
        case "client-portal":
          window.location.href = "ClientPortal.html";
          break;
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var Signup = document.getElementsByClassName("SignUp");

  for (var i = 0; i < SignUp.length; i++) {
    SignUp[i].addEventListener("click", function(event) {
      var buttonId = event.target.id;

      switch (buttonId) {
        case "adminSignUp":
        
           alert("Signup completed. Please sign in now.");
          break;
        case "bankerSignUp":
        
           alert("Signup completed. Please sign in now.");
          break;
        case "clientSignUp":
           alert("Signup completed. Please sign in now.");
          break;
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var Login = document.getElementsByClassName("Login");

  for (var i = 0; i < Login.length; i++) {
    Login[i].addEventListener("click", function(event) {
      var buttonId = event.target.id;

      switch (buttonId) {
        case "adminLogin":
        
           window.location.href = "AdminPage.html";
          break;
        case "bankerLogin":
        
           window.location.href = "BankerPage.html";
          break;
        case "clientLogin":
           window.location.href = "ClientPage.html";
          break;
      }
    });
  }
});


// Get references to the menu items
const homeLink = document.getElementById('home');
const contactLink = document.getElementById('contact');

// Add event listeners to the menu items
homeLink.addEventListener('click', function() {
  // Handle home link click
  // Replace with your desired functionality
  console.log('Home link clicked');
});



contactLink.addEventListener('click', function() {
  // Handle contact link click
  // Replace with your desired functionality
  console.log('Contact link clicked');
});
