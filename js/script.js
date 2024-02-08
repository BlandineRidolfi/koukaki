// Crée un observateur pour gérer l'animation des titres

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

// Initialisation du Swiper pour les personnages 

const swiper = new Swiper(".swiper", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  spaceBetween: 40,
  speed: 1000,
  autoplay: {
    delay: 1500,
  },
  
});
// Mise en place de la variable pour le mouvement des nuages
let cloudsPositionX = 0;

// Elements pour le mouvement des nuages
const root = document.documentElement;
const locationElement = document.getElementById("place");

// Fonction pour l'ajustement de la position des nuages lors du scroll
function adjustCloudsPosition() {
    const { scrollY } = window;
    const elementTopOffset = locationElement.offsetTop;
    const verticalShift = 300;

    // Calcule de la position des nuages en fonction du scroll
    cloudsPositionX = Math.round(0 - (scrollY - elementTopOffset - verticalShift));

    // Condition qui assigne la position calculée en pixels à la variable CSS --cloudsPositionX
    if (cloudsPositionX <= 0 && cloudsPositionX > -300) {
        root.style.setProperty("--cloudsPositionX", `${cloudsPositionX}px`);
    }
}

window.addEventListener("scroll", () => {
    root.style.setProperty('--speed', '1s');
    adjustCloudsPosition();
});
