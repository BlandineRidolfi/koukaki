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


/* Sélection des éléments du DOM */
const buttonMenu = document.querySelector(".buttonMenu");
const burger = document.querySelector(".activeMenu");
const menuLinks = document.querySelectorAll(".activeMenu ul li a");
const animTitles = document.querySelectorAll(".animeLink, .animateTitle");

/* Fonction pour basculer l'état du menu et du bouton */
const toggleMenu = () => {
  if (!burger.classList.contains("active_nav")) {
      burger.classList.add("active_nav");
      buttonMenu.classList.add("active");
  } else {
      burger.classList.remove("active_nav");
      burger.classList.add("inactive_nav"); // Ajout de la classe "inactive_nav" pour l'animation de fermeture
      buttonMenu.classList.remove("active");
      setTimeout(() => {
          burger.classList.remove("inactive_nav"); // Supprime la classe "inactive_nav" après l'animation de fermeture
      }, 1000); // Durée de l'animation de fermeture en millisecondes
  }
};

/* Gestion de l'ouverture du menu au clic sur le bouton */
buttonMenu.addEventListener("click", toggleMenu);

/* Gestion de la fermeture du menu au clic sur un lien */
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
      burger.classList.remove("active_nav");
      burger.classList.add("inactive_nav"); // Ajout de la classe "inactive_nav" pour l'animation de fermeture
      buttonMenu.classList.remove("active");
      setTimeout(() => {
          burger.classList.remove("inactive_nav"); // Supprime la classe "inactive_nav" après l'animation de fermeture
      }, 1000); // Durée de l'animation de fermeture en millisecondes
  });
});

/* Annule le style "overflow: hidden;" lorsque "animeLink" ou "animateTitle" est cliqué */
animTitles.forEach((title) => {
  title.addEventListener("click", () => {
      // Supprime les styles overflow et paddingRight
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
  });
});


