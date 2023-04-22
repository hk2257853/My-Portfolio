const template = `
<div class="col-md slide-in \${slideInDir}">
  <div class="card \${cardColor} text-light card-color">
    <div class="card-body text-center">
      <h3 class="card-title mb-3 project-title">\${projectTitle}</h3>
      <div class="flip-container">
        <div class="flipper">
          <div class="front">
            <img src="\${imgSource}" class="img-fluid img-source" alt="#" />
          </div>
          <div class="back center-text">
            <p class="card-text flip-text">\${flipText}</p>
          </div>
        </div>
      </div>
      <p class="card-text description-text">\${descriptionText}</p>
      <a href="\${demoLink}" target="_blank" class="btn btn-danger demo-link">\${demoText}</a>
    </div>
  </div>
</div>
`;

const projectCardData = [
    {
      projectTitle: 'GCET Prep App',
      imgSource: 'resources/gcet.png',
      flipText: '800+ Downloads, rating: 4.9+',
      descriptionText: '(Deployed on playstore) An app for Gcet Preparation',
      demoLink: 'https://play.google.com/store/apps/details?id=com.hk.gcetprepapp&hl=en&gl=US',
      demoText: 'Playstore',
      cardColor: 'bg-dark',
      slideInDir: 'from-left'
    },
    {
      projectTitle: 'Memories',
      imgSource: 'resources/MernProject.png',
      flipText: 'Features: Post, Update, Delete, Like, Authentication',
      descriptionText: 'A CRUD webapp built using the MERN stack',
      demoLink: 'https://github.com/hk2257853/WebDev-Learning-Projects',
      demoText: 'Github',
      cardColor: 'bg-secondary',
        slideInDir: 'from-right'
    },
    {
      projectTitle: 'Open-source Contribution',
      imgSource: 'resources/calchub_OSC.png',
      flipText: 'This was my first open source Contribution!',
      descriptionText: 'CalcHub - html, CSS, JS, Bootstrap',
      demoLink: 'https://github.com/vasu-1/CalcHub/pull/83#issue-1159699341',
      demoText: 'Issue link',
      cardColor: 'bg-dark',
        slideInDir: 'from-left'
    },
    {
      projectTitle: 'Adventure Time',
      imgSource: 'resources/coming_soon.jpg',
      flipText: 'Under development! It\'s one of the biggest things I ever worked on!',
      descriptionText: 'A RPG game made using UE4',
      demoLink: 'https://github.com/vasu-1/CalcHub/tree/main/Calculators/BaseX_Calculator#readme',
      demoText: 'Github',
      cardColor: 'bg-secondary',
        slideInDir: 'from-right'
    },
];

// on page load
window.addEventListener('load', () => {
    const container = document.querySelector('.dynamic-cards');
    
    projectCardData.forEach((project, index) => {
      const html = template
          .replace(/\${projectTitle}/g, project.projectTitle)
          .replace(/\${imgSource}/g, project.imgSource)
          .replace(/\${flipText}/g, project.flipText)
          .replace(/\${descriptionText}/g, project.descriptionText)
          .replace(/\${demoLink}/g, project.demoLink)
          .replace(/\${demoText}/g, project.demoText)
          .replace(/\${cardColor}/g, project.cardColor)
          .replace(/\${slideInDir}/g, project.slideInDir);
        
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
  });
});