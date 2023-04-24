window.addEventListener('load', () => {

  // Search
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
});

let selectedTags = [];

function filterCards() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const tags = card.dataset.tags.split(',');

    if (selectedTags.every(tag => tags.includes(tag))) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function toggleTag(tag) {
  const index = selectedTags.indexOf(tag);

  if (index === -1) {
    selectedTags.push(tag);
  } else {
    selectedTags.splice(index, 1);
  }
}

window.addEventListener('load', () => {
  const tagButtons = document.querySelectorAll('.tag-button');

  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.dataset.tag;

      button.classList.toggle('selected');
      toggleTag(tag);
      filterCards();
    });
  });
});

// project count
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  const projectCount = document.getElementById('project-count');
  
  projectCount.textContent = cards.length.toString();
});