class Parallax {
  constructor(options = {}) {
    this.speed = options.speed || 0.2;
    this.elements = document.querySelectorAll('.parallax');
    this.visibleElements = new Set(); // Store only visible elements

    if (this.elements.length > 0) {
      this.init();
    }
  }

  init() {
    // 1. Observer Configuration
    const observerOptions = {
      root: null, // observe relative to browser window
      threshold: 0 // just 1 pixel of visibility is enough to start animating
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element entered viewport - add to active elements
          this.visibleElements.add(entry.target);
        } else {
          // Element left viewport - stop updating it
          this.visibleElements.delete(entry.target);
        }
      });
    }, observerOptions);

    // 2. Start observing each element
    this.elements.forEach(el => observer.observe(el));

    // 3. Listen to scroll with optimization
    window.addEventListener('scroll', () => {
      // Use requestAnimationFrame for perfect smoothness
      requestAnimationFrame(() => this.update());
    }, { passive: true }); // 'passive' improves scroll performance
  }

  update() {
    const scrolled = window.pageYOffset;

    // Update ONLY elements visible on screen
    this.visibleElements.forEach(el => {
      // Get element position relative to top of page
      const elementOffset = el.getBoundingClientRect().top + scrolled;
      const relativeScroll = scrolled - elementOffset;
      
      const move = relativeScroll * this.speed;
      el.style.transform = `translate3d(0, ${move}px, 0)`;
    });
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Parallax;
} else {
  window.Parallax = Parallax;
}
