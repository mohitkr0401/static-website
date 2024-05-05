function displayAlert() {
    alert("Login button clicked!");
}

// Function to toggle the visibility of the sign-up form
function toggleSignUpForm() {
    var signUpForm = document.getElementById('signup-form');
    signUpForm.classList.toggle('hidden');
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

// Add event listener to the login button
document.querySelector('input[type="submit"]').addEventListener('click', displayAlert);

// Add event listener to the sign-up link to toggle the visibility of the sign-up form
document.querySelector('#signup-link a').addEventListener('click', toggleSignUpForm);

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

    // Show button when user scrolls down 500px from top
    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener("click", scrollToTop);
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform some basic validation (e.g., check if username and password are not empty)
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return; // Exit the function early if validation fails
    }

    // If validation passes, you can perform further actions, such as sending the data to a server
    // For now, let's just display an alert
    alert("Username: " + username + "\nPassword: " + password);

    // Optionally, you can reset the form after submission
    // document.getElementById("login-form").reset();
});
