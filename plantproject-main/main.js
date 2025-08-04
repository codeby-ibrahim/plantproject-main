const navmenu = document.getElementById("nav-menu");
const toggleIcon = document.getElementById("nave_icon");
const navLinks = document.querySelectorAll(".nav-link");

toggleIcon.addEventListener("click", () => {
  navmenu.classList.toggle("left-0");
  navmenu.classList.toggle("left-[-100%]");
  toggleIcon.classList.toggle("ri-close-fill");
  toggleIcon.classList.toggle("ri-menu-4-line");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navmenu.classList.add("left-[-100%]");
    navmenu.classList.remove("left-0");
    toggleIcon.classList.remove("ri-close-fill");
    toggleIcon.classList.add("ri-menu-4-line");
  });
});

// Swiper initialization

const swiper = new swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spacebetween: 30,
  autoplay: {
    delay: 3000,
    disableoninteractino: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,

    },

    700: {
      slidesPerView: 1,

    },
  }
});

const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("opacity-0", "pointer-events-none");
    scrollBtn.classList.add("opacity-100");
  } else {
    scrollBtn.classList.add("opacity-0", "pointer-events-none");
    scrollBtn.classList.remove("opacity-100");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

