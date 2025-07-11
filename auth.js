// auth.js

// Signup Page Logic
if (window.location.pathname.includes("create.html")) {
  const form = document.querySelector('.auth-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const password = form.querySelector('input[placeholder="Password"]').value.trim();

    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("cryptopulseUser", JSON.stringify(user));

    alert("Account created successfully! Please sign in.");
    window.location.href = "signin.html";
  });
}

// Login Page Logic
if (window.location.pathname.includes("signin.html")) {
  const form = document.querySelector('.auth-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const password = form.querySelector('input[placeholder="Password"]').value.trim();

    const userData = JSON.parse(localStorage.getItem("cryptopulseUser"));

    if (userData && userData.email === email && userData.password === password) {
      localStorage.setItem("userSession", userData.name);
      alert(`Welcome back, ${userData.name}!`);
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}
