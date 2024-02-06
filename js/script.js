// Crée un observateur pour gérer l'animation

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('title-animation')
          observer.unobserve(entry.target);

      }
  });
}, { rootMargin: '0px', threshold: 0.25 });


// Sélection des sections à animer
const sections = document.querySelectorAll('span.title');

// Ajout de l'observateur d'intersection à chaque section
sections.forEach((section) => {
  sectionObserver.observe(section);
});
