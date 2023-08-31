export const template = `
<div class="col-md slide-in \${slideInDir}">
  <div class="card \${cardColor} text-light card-color" data-tags="\${tags}">
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
      <div class="tags-wrapper mt-3">
        \${tagsHtml}
      </div>
      <div class="row">
      <div class="d-flex justify-content-between">
        <a href="\${codeLink}" target="_blank" class="btn btn-primary"><i class="bi bi-code-square"></i> Code</a>
        <a href="\${demoLink}" target="_blank" class="btn btn-danger"><i class="bi bi-play-circle"></i> Demo</a>
      </div>
    </div>
    </div>
  </div>
</div>
`;

export const projectpgCardData = [
  {
    projectTitle: 'GCET Prep App',
    imgSource: 'resources/gcet.webp',
    flipText: '1000+ Downloads, rating: 4.9+',
    descriptionText: '(Real World on playstore) An app for Gcet Preparation',
    demoLink: 'https://play.google.com/store/apps/details?id=com.hk.gcetprepapp&hl=en&gl=US',
    codeLink: 'https://github.com/hk2257853/GCETPrepApp',        
    tags: 'android,realworld,java,firebase',
  },  
  {
    projectTitle: 'Technix23 Website',
    imgSource: 'resources/technix.webp',
    flipText: 'Added Sponsors section, Registeration page, luma integration and did some minor fixes',
    descriptionText: 'Offical website of Technix 2023',
    demoLink: 'https://technix23.vercel.app/',
    codeLink: 'https://github.com/lolla-sai/Technix23-Website',              
    tags: 'nextjs,realworld',
  },
  {
    projectTitle: 'Fontend Internship at Gfial',
    imgSource: 'resources/gfial.webp',
    flipText: 'Utilized React and Redux to develop a rejection system, Revamped UI, restructured components, and resolved UI glitches, leading to improved page functionality, Anticipated a 25% increase in user engagement through the implementation of UI enhancements.',
    descriptionText: 'Gfial is a startup that provides a platform for students to discuss engineering problems and solve them. I worked as a frontend intern for 3 months.',
    demoLink: 'https://gfial.com/',
    codeLink: 'https://gfial.com/',       
    tags: 'react,redux,internship,realworld',
  },
  {
    projectTitle: 'RideEasy',
    imgSource: 'resources/ride_easy.webp',
    flipText: 'Consisted of three microservices: Driver detail, Cab detail and Management detail. Tech used: Nextjs, Nodejs, docker. Teamates: Puneet, Rushiket',
    descriptionText: 'Cab Management System utilising microservice architecture and implementing micro frontends',
    demoLink: 'https://drive.google.com/drive/folders/1Abo8gCZDr634a5AyVE2SQoyNBxZEdGLW',
    codeLink: 'https://github.com/hk2257853/A4-23',        
    tags: 'mern,hackathon,microservice',
  },
  {
    projectTitle: 'Campus connect',
    imgSource: 'resources/campusconnect_freelancing.webp',
    flipText: 'Revamped UI and added new features within a tight 2-day timeframe. Effectively collaborated with my teammate to deliver dynamic solutions. Engaged with clients to understand and meet their expectations, ensuring successful project execution. ',
    descriptionText: 'Freelance Project (React, css)',
    demoLink: 'https://docs.google.com/document/d/14U9IKArBdg0BJKcTSoLt221S087RSwn9/edit',
    codeLink: 'https://docs.google.com/document/d/14U9IKArBdg0BJKcTSoLt221S087RSwn9/edit',        
    tags: 'react,freelancing,realworld',
  },
  {
    projectTitle: 'ARM Website',
    imgSource: 'resources/arm.webp',
    flipText: 'Added google auth (firebase), contact us, poll and hosted on vercel',
    descriptionText: 'Offical website of ARM club (robotics) ',
    demoLink: 'https://arm-website.vercel.app/',
    codeLink: 'https://github.com/hk2257853/arm-website',              
    tags: 'react,realworld',
  },    
  
  {
    projectTitle: 'FreshCart',
    imgSource: 'resources/freshkart.webp',
    flipText: 'Built a full-stack MERN application with CRUD functionality, including a machine learning-based recommendation system, recipe management, daily deal feature, user authentication, and admin/user roles. Teamates: Rushikesh',
    descriptionText: 'Mern stack project for DBMS',
    demoLink: 'https://docs.google.com/document/d/1TpbD9dnyezhD7vGMMyMBXxMASZFBve_j/edit',
    codeLink: 'https://github.com/hk2257853/Grocery',        
    tags: 'mern,ml',
  },
  {
    projectTitle: 'Memories',
    imgSource: 'resources/MernProject.webp',
    flipText: 'Features: Post, Update, Delete, Like, Authentication',
    descriptionText: 'A CRUD webapp built using the MERN + Redux stack',
    demoLink: 'https://github.com/hk2257853/WebDev-Learning-Projects',
    codeLink: 'coming soon',
    tags: 'mern,redux',
  },   
  {
    projectTitle: 'Cosmic Crusaders',
    imgSource: 'resources/iitgoa.webp',
    flipText: 'Travel across the multiverse and help our here to find the lost pets. Authentication, Character Creation, Interactive Elements, Database Integration ...and more! Teamates: Greeshma and Urvi',
    descriptionText: 'IIT Goa 48hr hackathon: 2nd place',
    demoLink: 'https://drive.google.com/file/d/1I2pZDt8SWF-Ea8GEGQYreu93DGe9ENPK/view?usp=share_link',
    codeLink: 'https://github.com/Greeshma2903/HackOverflow',        
    tags: 'mern,hackathon',
  },  
  {
    projectTitle: 'ChaatBites',
    imgSource: 'resources/parking.webp',
    flipText: 'SEO-optimized, menu and cart ordering system, admin page for updating parking lot information and adding new items to the menu, authentication and more! Teamates: Rushikesh and Lloyd',
    descriptionText: 'A desi chat ordering website, 7hr chowgule webathon: 2nd place',
    demoLink: 'coming soon',
    codeLink: 'https://github.com/hk2257853/ChaatBites',        
    tags: 'mern,hackathon',
  },  
  {
    projectTitle: 'Adventure Time',
    imgSource: 'resources/coming_soon.webp',
    flipText: 'Under development! It\'s one of the biggest things I ever worked on!',
    descriptionText: 'A RPG game made using UE4',
    demoLink: 'coming soon',            
    codeLink: 'https://github.com/hk2257853/AdventureTime',
    tags: 'UE4,game',
  },
  {
    projectTitle: 'Open-source Contribution',
    imgSource: 'resources/calchub_OSC.webp',
    flipText: 'This was my first open source Contribution!',
    descriptionText: 'CalcHub - html, CSS, JS, Bootstrap',
    demoLink: '',
    codeLink: 'https://github.com/vasu-1/CalcHub/tree/main/Calculators/BaseX_Calculator',        
    tags: 'static,realworld',
  },
  {
    projectTitle: 'ToDoList',
    imgSource: 'resources/todo.webp',
    flipText: 'Simple android app (kotlin) to learn about room database.',
    descriptionText: 'Simple ToDoList app with room database.',
    demoLink: '',
    codeLink: 'https://github.com/hk2257853/Grocery',        
    tags: 'android,learning',
  },

];