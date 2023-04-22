//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navmenu");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

const search = document.getElementById("search");
const projects = document.querySelectorAll(".col-md");

search.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredProjects = Array.from(projects).filter((project) => {
    const title = project.querySelector(".card-title");
    const description = project.querySelector(".card-text");
    return (
      (title && title.textContent.toLowerCase().includes(searchString)) ||
      (description && description.textContent.toLowerCase().includes(searchString))
    );
  });

  Array.from(projects).forEach((project) => {
    if (filteredProjects.includes(project)) {
      project.classList.remove("d-none");
    } else {
      project.classList.add("d-none");
    }
  });
});
