const themeToggle = document.getElementById("theme-toggle");

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}
function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}
function setInitialTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (preferDarkMode) {
    themeToggle.checked = true;
    setTheme("dark");
  } else {
    themeToggle.checked = false;
    setTheme("light");
  }
}

function showInitialTheme() {
  setInitialTheme();
}
document.addEventListener("DOMContentLoaded", showInitialTheme);

themeToggle.addEventListener("change", toggleTheme);
