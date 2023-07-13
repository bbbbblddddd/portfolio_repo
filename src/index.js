import LocomotiveScroll from 'locomotive-scroll';

let locoScroll;

// Initialize Locomotive Scroll
function initScroll() {
  locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
  });
}

// Enable or disable Locomotive Scroll based on the device screen size
function handleScroll() {
  if (window.innerWidth < 768) {
    // Disable Locomotive Scroll on mobile devices
    if (locoScroll) {
      locoScroll.destroy();
      locoScroll = null;
    }
  } else {
    // Enable Locomotive Scroll on desktop devices
    if (!locoScroll) {
      initScroll();
    }
  }
}

// Initialize or update Locomotive Scroll on page load
window.addEventListener('load', () => {
  handleScroll();
});

// Reinitialize Locomotive Scroll on window resize
window.addEventListener('resize', () => {
  handleScroll();
});
