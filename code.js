// Select all the feature panels
const featurePanels = document.querySelectorAll('.feature-panel');

// Function to check if a panel is in view
function checkVisibility() {
    console.log("checking");
  featurePanels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      panel.classList.add('visible'); // Add 'visible' class when in view
    } else {
      panel.classList.remove('visible'); // Remove 'visible' class when out of view
    }
  });
}

// Call the checkVisibility function when the page loads or scrolls
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Initial check in case the page is already scrolled when it loads
checkVisibility();
