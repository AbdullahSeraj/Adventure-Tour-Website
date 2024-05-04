// Menu Btn
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

document.getElementById("menu-btn").addEventListener("click", () => {
  navbar.classList.add("active");
});

document.getElementById("nav-close").addEventListener("click", () => {
  navbar.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// Search Btn
let searchForm = document.querySelector(".search-form");

document.getElementById("search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.getElementById("close-search").onclick = () => {
  searchForm.classList.remove("active");
};

// Initialize Swiper
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,

  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,

  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
});
