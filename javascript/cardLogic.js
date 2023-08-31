import { template, projectpgCardData } from "./cardData.js";

// on page load
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.dynamic-cards');
    let projectCardData;

    if (window.location.pathname.includes('project')) {
      projectCardData = projectpgCardData;
    } else {
      // from 0 to 3 index
      projectCardData = projectpgCardData.slice(0, 4);
    }

    projectCardData.forEach((project, index) => {
      let cardColor;
      if (index % 2 === 0) {
        cardColor = 'bg-dark';
      } else {
        cardColor = 'bg-secondary';
      }

      let slideInDir;
      if (window.location.pathname.includes('project'))
      {
        if(index % 3 === 0) slideInDir = 'from-left';
        else if(index % 3 === 1) slideInDir = 'fade-in';
        else slideInDir = 'from-right';
      }
      else
      {
        if(index % 2 === 0) slideInDir = 'from-left';
        else slideInDir = 'from-right';
      }

      const tagsHtml = createTagsHtml(project.tags);

      const html = template
          .replace(/\${projectTitle}/g, project.projectTitle)
          .replace(/\${imgSource}/g, project.imgSource)
          .replace(/\${flipText}/g, project.flipText)
          .replace(/\${descriptionText}/g, project.descriptionText)
          .replace(/\${demoLink}/g, project.demoLink)
          .replace(/\${cardColor}/g, cardColor)
          .replace(/\${slideInDir}/g, slideInDir)
          .replace(/\${tags}/g, project.tags)
          .replace(/\${codeLink}/g, project.codeLink)
          .replace(/\${tagsHtml}/g, tagsHtml);
                           
          if (window.location.pathname.includes('project')) 
          {
          if (index % 3 === 0) {
            // Create a new row div for every third card
            const row = document.createElement('div');
            row.classList.add('row', 'text-center', 'g-4', 'mb-4');
            container.appendChild(row);
          }

          // Create a new card div for every card
          const card = document.createElement('div');
          card.classList.add('col-md-4', 'slide-in', slideInDir);
          card.innerHTML = html;
          container.lastChild.appendChild(card);
          }
          // 2 cards on main pg, 3 on project
          else
          {
            if (index % 2 === 0) {
              // Create a new row div for every second card
              const row = document.createElement('div');
              row.classList.add('row', 'text-center', 'g-4', 'mb-4');
              container.appendChild(row);
            }
            
          // Create a new card div for every card
          const card = document.createElement('div');
          card.classList.add('col-md', 'slide-in', slideInDir);
          card.innerHTML = html;
          container.lastChild.appendChild(card);
          }
      
  });
});

function createTagsHtml(tags) {
  const tagsArray = tags.split(',');
  return tagsArray.map((tag) => {
    return `
      <div class="rounded-pill bg-danger d-inline-block px-2 py-1 mb-3">${tag}</div>
    `;
  }).join('');
}
