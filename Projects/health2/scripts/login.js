let logoutTimer; // Timer for logging out after inactivity

// Check login status on page load
document.addEventListener("DOMContentLoaded", (event) => {
  checkLoginStatus();
  startLogoutTimer(); // Start logout timer on page load
});

// Login button click event
document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (authenticate(username, password)) {
    // Save login state and details to localStorage
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("loginTime", Date.now());
    showApp(); // Show the app
    startLogoutTimer(); // Start logout timer
  } else {
    document.getElementById("loginMessage").textContent =
      "Invalid credentials. Please try again.";
  }
});

// Dummy authentication function
function authenticate(username, password) {
  return username === "admins" && password === "password";
}

// Check login status and handle accordingly
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const loginTime = localStorage.getItem("loginTime");
  const currentTime = Date.now();

  if (
    isLoggedIn === "true" &&
    loginTime &&
    currentTime - loginTime < 10 * 60 * 1000
  ) {
    showApp(); // Show the app if logged in and within time limit
    startLogoutTimer(); // Restart logout timer
  } else {
    showLogin(); // Show login form if not logged in or time limit exceeded
    clearParseData(); // Clear any parse-related data
  }
}

// Start or reset the logout timer
function startLogoutTimer() {
  clearTimeout(logoutTimer); // Clear existing timer
  logoutTimer = setTimeout(logout, 10 * 60 * 1000); // Set timer for 10 minutes
}

// Reset the logout timer and update login time
function resetLogoutTimer() {
  clearTimeout(logoutTimer); // Clear existing timer
  localStorage.setItem("loginTime", Date.now()); // Update login time
  startLogoutTimer(); // Restart timer
}

// Logout function
function logout() {
  clearParseData(); // Clear parse-related data
  showLogin(); // Show login form
  alert("You have been logged out due to inactivity."); // Show alert
}

// Clear parse-related data from localStorage and DOM
function clearParseData() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("loginTime");

  // Clear the image container
  const container = document.getElementById("imageContainer");
  container.innerHTML = "";

  // Reset relevant variables in parse.js
  if (window.clearParseVars) {
    window.clearParseVars();
  }
}

// Show the app and hide the login form
function showApp() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("appContainer").style.display = "block";
}

// Show the login form and hide the app
function showLogin() {
  document.getElementById("loginContainer").style.display = "flex";
  document.getElementById("appContainer").style.display = "none";
}

// Reset logout timer on user activity
window.addEventListener("mousemove", resetLogoutTimer);
window.addEventListener("keypress", resetLogoutTimer);
