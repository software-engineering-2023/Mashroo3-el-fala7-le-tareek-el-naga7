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
document.addEventListener('DOMContentLoaded', function() {
  // Get the "Add to Card" button element
  var addButton = document.querySelector('.transaction-button');

  // Add click event listener to the button
  addButton.addEventListener('click', function() {
    // Get the selected card from the dropdown menu
    var selectedCard = document.querySelector('#transaction-card').value;

    // Get the transaction amount
    var transactionAmount = document.querySelector('#transaction-amount').value;

    // Get the banner element
    var banner = document.getElementById('transaction-banner');

    // Get the banner text element
    var bannerText = document.getElementById('transaction-banner-text');
    
    // Set the banner text
    bannerText.textContent = 'Card ' + selectedCard + ' will be recharged with $' + transactionAmount + ' shortly.' +'...................................'+ 'Card ' + selectedCard + ' will be recharged with $' + transactionAmount + ' shortly.' +'...................................'+ 'Card ' + selectedCard + ' will be recharged with $' + transactionAmount + ' shortly.' +'...................................'+ 'Card ' + selectedCard + ' will be recharged with $' + transactionAmount + ' shortly.' +'...................................'+ 'Card ' + selectedCard + ' will be recharged with $' + transactionAmount + ' shortly.';

    // Show the banner
    banner.style.display = 'block';
  });

  // Get the banner close button element
  var closeButton = document.getElementById('transaction-banner-close');

  // Add click event listener to the close button
  closeButton.addEventListener('click', function() {
    // Get the banner element
    var banner = document.getElementById('transaction-banner');

    // Hide the banner
    banner.style.display = 'none';
  });
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
document.getElementById("sign-out-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  window.location.href = Home.html; // Navigate to the specified URL
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

function handleTransferClick(transferType) {
  

  
    var amount1, AccountNum, Swift, BankName;

    if (transferType === "internal") {
      amount1 = document.getElementById("internal-amount").value;
      AccountNum = document.getElementById("internal-account").value;

    } else if (transferType === "domestic") {
      AccountNum = document.getElementById("domestic-account").value;
      BankName = document.getElementById("domestic-bank").value;
      amount1 = document.getElementById("domestic-amount").value;

    } else if (transferType === "international") {
      amount1 = document.getElementById("international-amount").value;
      Swift = document.getElementById("international-swift").value;
      AccountNum = document.getElementById("international-account").value;
    }
	alert(
  "Transfer Type: " + transferType + "\n" +
  "Amount: " + amount1 + "\n" +
  "Account Number: " + AccountNum + "\n" +
  "Swift Code: " + Swift + "\n" +
  "Bank Name: " + BankName
);

    var banner = document.getElementById('transfer-banner');
    var bannerText = document.getElementById('transfer-banner-text');

    // Set the banner text
    bannerText.textContent = 'Transfering ' + amount1 + ' to ' + AccountNum + ' , ' + Swift + ' , ' + BankName;

    // Show the banner
    banner.style.display = 'block';
	 banner.style.display = 'block';

  
}

document.getElementById("internal-transfer-button").addEventListener("click", function() {
  handleTransferClick("internal");
});

document.getElementById("domestic-transfer-button").addEventListener("click", function() {
  handleTransferClick("domestic");
});

document.getElementById("international-transfer-button").addEventListener("click", function() {
  handleTransferClick("international");
});


