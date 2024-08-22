let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");

  loginForm.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");

  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  shoppingCart.classList.remove("active");

  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

// Slider Logic for Features Section
// const slider = document.querySelector(".box-container");
// const slides = document.querySelectorAll(".boxes");
// const btnLeft = document.querySelector(".slider__btn--left");
// const btnRight = document.querySelector(".slider__btn--right");
// const dotContainer = document.querySelector(".dots");

// let curSlide = 0;
// const maxSlide = slides.length;

// Function to create dots for navigation
// const createDots = () => {
//   slides.forEach((_, i) => {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };

// Function to activate the dot corresponding to the current slide
// const activateDot = (slide) => {
//   document.querySelectorAll(".dots__dot").forEach((dot) => {
//     dot.classList.remove("dots__dot--active");
//   });

//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add("dots__dot--active");
// };

// Function to go to the specified slide
// const goToSlide = (slide) => {
//   slides.forEach((s, i) => {
//     s.style.transform = `translateX(${100 * (i - slide)}%)`;
//   });
// };

// Function to move to the next slide
// const nextSlide = () => {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// Function to move to the previous slide
// const prevSlide = () => {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else {
//     curSlide--;
//   }
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// Initialize the slider
// const init = () => {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// };
// init();

// Event listeners for navigation buttons
// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);

// Event listener for dot navigation
// dotContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("dots__dot")) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//     activateDot(slide);
//   }
// });

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
