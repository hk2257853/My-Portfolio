import { template, indexCardData, projectpgCardData } from "./cardData.js";

// on page load
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.dynamic-cards');
    let projectCardData;

    if (window.location.pathname === '/project.html') {
      projectCardData = projectpgCardData;
    } else {
      projectCardData = indexCardData;
    }

    projectCardData.forEach((project, index) => {
      let cardColor;
      if (index % 2 === 0) {
        cardColor = 'bg-dark';
      } else {
        cardColor = 'bg-secondary';
      }

      let slideInDir;
      if(window.location.pathname === '/project.html')
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

      const html = template
          .replace(/\${projectTitle}/g, project.projectTitle)
          .replace(/\${imgSource}/g, project.imgSource)
          .replace(/\${flipText}/g, project.flipText)
          .replace(/\${descriptionText}/g, project.descriptionText)
          .replace(/\${demoLink}/g, project.demoLink)
          .replace(/\${cardColor}/g, cardColor)
          .replace(/\${slideInDir}/g, slideInDir)
          .replace(/\${tags}/g, project.tags)
          .replace(/\${codeLink}/g, project.codeLink);
                           
          if (window.location.pathname === '/project.html') 
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
