import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    mobile: {
      smooth: true
  },
  tablet: {
      smooth: true
  }
  });
  
  setTimeout(() => {  
    locoScroll.destroy();
}, 0);
setTimeout(() => {  
    locoScroll.init();
}, 50);
setTimeout(() => {  
    locoScroll.update();
}, 1000);