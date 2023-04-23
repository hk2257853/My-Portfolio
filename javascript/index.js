// close navbar on click
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navmenu");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

