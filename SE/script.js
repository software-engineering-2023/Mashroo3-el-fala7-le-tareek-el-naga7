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
// Wait for the DOM to load



document.addEventListener("DOMContentLoaded", function() {
  var Signup = document.getElementsByClassName("SignUp");

  for (var i = 0; i < Signup.length; i++) {
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










document.addEventListener("DOMContentLoaded", function() {
  var dmsTransferButton = document.querySelector('.dms-transfer-button');

  dmsTransferButton.addEventListener('click', function() {
    var acc = document.querySelector('#domestic-account').value;
    var am = document.querySelector('#domestic-amount').value;
    var bank = document.querySelector('#domestic-bank').value;
    var banner = document.getElementById('transfer-banner');
    var bannerText = document.getElementById('transfer-banner-text');

    bannerText.textContent = 'Transfering ' + am + ' to ' + acc + ' in ' + bank;
    banner.style.display = 'block';
  });
  
  var intrTransferButton = document.querySelector('.intr-transfer-button');
  
  intrTransferButton.addEventListener('click', function() {
    var acc = document.querySelector('#internal-account').value;
    var am = document.querySelector('#internal-amount').value;
    var banner = document.getElementById('transfer-banner');
    var bannerText = document.getElementById('transfer-banner-text');

    bannerText.textContent = 'Transfering ' + am + ' to ' + acc;
    banner.style.display = 'block';
  });
  
  var intnTransferButton = document.querySelector('.intn-transfer-button');
  
  intnTransferButton.addEventListener('click', function() {
    var acc = document.querySelector('#international-account').value;
    var am = document.querySelector('#international-amount').value;
    var swift = document.querySelector('#international-swift').value;
    var banner = document.getElementById('transfer-banner');
    var bannerText = document.getElementById('transfer-banner-text');
    
    bannerText.textContent = 'Transfering ' + am + ' to ' + acc + ' with Swift: ' + swift;
    banner.style.display = 'block';
  });
});

