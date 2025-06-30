const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  themeToggleBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});
