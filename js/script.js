// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika mie menu di klik
document.querySelector("#mie-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const mie = document.querySelector("#mie-menu");

document.addEventListener("click", function (e) {
  if (!mie.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
