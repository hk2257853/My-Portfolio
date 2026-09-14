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

// ===================================================
// Archive Chamber Glass Modal
// ===================================================
function initArchiveModal() {
  const modalMarkup = `
    <div id="archiveModalBackdrop" class="archive-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="archiveModalTitle">
      <div class="archive-modal-card">
        <button id="archiveModalCloseBtn" class="archive-modal-close" aria-label="Close modal">&times;</button>
        <div class="archive-modal-badge">
          <span>⚠️</span> Archived Portfolio (2023)
        </div>
        <h3 id="archiveModalTitle" class="archive-modal-title">Looking for my latest work?</h3>
        <p class="archive-modal-text">
          This portfolio was built during my college 3rd year and is now preserved as an archive. 
          I have completely redesigned my portfolio into an interactive distributed systems architecture experience!
        </p>
        <a href="https://hk2257853.github.io" class="archive-modal-btn">
          <span>Take Me to the New Portfolio</span>
          <i class="bi bi-arrow-right"></i>
        </a>
        <button id="archiveModalDismissBtn" class="archive-modal-dismiss">
          Continue browsing this archive
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalMarkup);

  const backdrop = document.getElementById('archiveModalBackdrop');
  const closeBtn = document.getElementById('archiveModalCloseBtn');
  const dismissBtn = document.getElementById('archiveModalDismissBtn');

  function closeModal() {
    if (!backdrop) return;
    backdrop.classList.remove('show');
    setTimeout(() => {
      if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }, 300);
  }

  // Smooth entrance
  setTimeout(() => {
    if (backdrop) backdrop.classList.add('show');
  }, 120);

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

  // Close when clicking outside modal card
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('show')) {
      closeModal();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initArchiveModal);
} else {
  initArchiveModal();
}