import { template, indexCardData, projectpgCardData } from "./cardData.js";

// on page load
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.dynamic-cards');
    let projectCardData;

    if (window.location.pathname === '/index.html') {
      projectCardData = indexCardData;
    } else if (window.location.pathname === '/project.html') {
      projectCardData = projectpgCardData;
    }

    projectCardData.forEach((project, index) => {
      const html = template
          .replace(/\${projectTitle}/g, project.projectTitle)
          .replace(/\${imgSource}/g, project.imgSource)
          .replace(/\${flipText}/g, project.flipText)
          .replace(/\${descriptionText}/g, project.descriptionText)
          .replace(/\${demoLink}/g, project.demoLink)
          .replace(/\${demoText}/g, project.demoText)
          .replace(/\${cardColor}/g, project.cardColor)
          .replace(/\${slideInDir}/g, project.slideInDir)
          .replace(/\${tags}/g, project.tags);
        
          // 2 cards on main pg, 3 on project
          if (window.location.pathname === '/index.html') 
          {
            if (index % 2 === 0) {
              // Create a new row div for every second card
              const row = document.createElement('div');
              row.classList.add('row', 'text-center', 'g-4', 'mb-4');
              container.appendChild(row);
            }
            
          // Create a new card div for every card
          const card = document.createElement('div');
          card.classList.add('col-md', 'slide-in', project.slideInDir);
          card.innerHTML = html;
          container.lastChild.appendChild(card);
          } 
          else if (window.location.pathname === '/project.html') 
          {
          if (index % 3 === 0) {
            // Create a new row div for every third card
            const row = document.createElement('div');
            row.classList.add('row', 'text-center', 'g-4', 'mb-4');
            container.appendChild(row);
          }

          // Create a new card div for every card
          const card = document.createElement('div');
          card.classList.add('col-md-4', 'slide-in', project.slideInDir);
          card.innerHTML = html;
          container.lastChild.appendChild(card);
          }
      
  });
});
