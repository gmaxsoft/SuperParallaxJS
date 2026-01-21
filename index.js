class Parallax {
  constructor(options = {}) {
    this.speed = options.speed || 0.2;
    this.elements = document.querySelectorAll('.parallax');
    this.visibleElements = new Set(); // Przechowujemy tylko widoczne elementy

    if (this.elements.length > 0) {
      this.init();
    }
  }

  init() {
    // 1. Konfiguracja Obserwatora
    const observerOptions = {
      root: null, // obserwujemy względem okna przeglądarki
      threshold: 0 // wystarczy 1 piksel widoczności, by zacząć animować
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element wszedł w pole widzenia - dodaj do aktywnych
          this.visibleElements.add(entry.target);
        } else {
          // Element wyszedł - przestań go aktualizować
          this.visibleElements.delete(entry.target);
        }
      });
    }, observerOptions);

    // 2. Rozpocznij obserwację każdego elementu
    this.elements.forEach(el => observer.observe(el));

    // 3. Nasłuchuj scrolla z optymalizacją
    window.addEventListener('scroll', () => {
      // Używamy requestAnimationFrame dla idealnej płynności
      requestAnimationFrame(() => this.update());
    }, { passive: true }); // 'passive' poprawia wydajność scrollowania
  }

  update() {
    const scrolled = window.pageYOffset;

    // Aktualizujemy TYLKO elementy widoczne na ekranie
    this.visibleElements.forEach(el => {
      // Pobieramy pozycję elementu względem góry strony
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