const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle login logic here
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle registration logic here
});

// Toggle between login and registration form
const toggleForms = () => {
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
};

document.getElementById("toggle-forms").addEventListener("click", toggleForms);
