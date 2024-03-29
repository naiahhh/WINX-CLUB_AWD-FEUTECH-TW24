const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Event listener for sign-up form
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  // Retrieve input field values
  var username = document.getElementById('username').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Validate input fields
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Store user information in localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Display success message
  alert('Signed up successfully!');
  location.reload();
});

// Event listener for login form
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve input field values
  var loginUsername = document.getElementById('loginUsername').value.trim();
  var loginPassword = document.getElementById('loginPassword').value.trim();

  // Retrieve stored user information from localStorage
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  // Validate login credentials
  if (loginUsername === '' || loginPassword === '') {
    alert('Please fill in all fields');
    return; 
  }

  if (loginUsername !== storedUsername || loginPassword !== storedPassword) {
    alert('Incorrect username or password');
    return;
  }

  window.location.href = '../index.html';

  document.getElementById('loginForm').reset();
});
