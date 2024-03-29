  ////////////////////////////////////////////////
 // ANIMATION DES TITRES EN FONCTION DU SCROLL //
////////////////////////////////////////////////

console.log("Démarrage du script");

// Créer un observateur pour gérer l'animation des titres
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('title-animation');
      } else {
          entry.target.classList.remove('title-animation');
      }
  });
}, { rootMargin: '0px', threshold: 0 });

// Sélectionner les sections à animer
const sections = document.querySelectorAll('span.title');

// Ajouter l'observateur d'intersection à chaque section
sections.forEach((section) => {
  sectionObserver.observe(section);
});

  /////////////////////////////////////////////////
 // SWIPPERJS POUR LE CAROUSSEL DES PERSONNAGES //
/////////////////////////////////////////////////

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
  ////////////////////////////
 // DEPLACEMENT DES NUAGES // 
////////////////////////////

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

  /////////////////
 // MENU BURGER //
/////////////////

const buttonMenu = document.querySelector(".buttonMenu");
const burger = document.querySelector(".activeMenu");
const menuLinks = document.querySelectorAll(".activeMenu ul li a");
const animTitles = document.querySelectorAll(".animeLink, .animateTitle");

const toggleMenu = () => {
        console.log("Menu burger ouvert");
    if (!burger.classList.contains("active_nav")) {
        burger.classList.add("active_nav");
        buttonMenu.classList.add("active");
    } else {
        closeMenu();
    }
};

const closeMenu = () => {
    console.log("Menu burger fermé");
    burger.classList.add("inactive_nav"); // Ajout de la classe d'animation de fermeture
    buttonMenu.classList.remove("active");
    setTimeout(() => {
        burger.classList.remove("active_nav"); // Supprime la classe active_nav après l'animation de fermeture
        burger.classList.remove("inactive_nav"); // Supprime la classe d'animation de fermeture
    }, 1000);
};

buttonMenu.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

animTitles.forEach((title) => {
    title.addEventListener("click", () => {
        document.body.style.overflowY = "";
        document.body.style.paddingRight = "";
    });
});



