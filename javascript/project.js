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
    
// // filter
// function filterCards(tag) {
//   // Get all cards
//   const cards = document.querySelectorAll('.card');
  
//   // Loop through all cards
//   cards.forEach(card => {
//     // Get the tags of the current card
//     const tags = card.dataset.tags.split(',');

//     // Check if the card has the selected tag
//     if (tags.includes(tag)) {
//       // If the card has the selected tag, show it
//       card.style.display = '';
//     } else {
//       // If the card doesn't have the selected tag, hide it
//       card.style.display = 'none';
//     }
//   });
// }
    
// // filter buttons
// window.addEventListener('load', () => {
//   const tagButtons = document.querySelectorAll('.tag-button');

//   tagButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       if (button.classList.contains('selected')) {
//         button.classList.remove('selected');
        
//       } else {
//         // tagButtons.forEach(button => button.classList.remove('selected')); // if want only one button to be selected
//         button.classList.add('selected');
//       }
//     });
//   });
// });


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
