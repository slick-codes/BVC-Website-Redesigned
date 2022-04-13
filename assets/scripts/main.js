// Slider
const slideImageArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

const generateSlideNodes = function () {
  const firstSlide = null;

  slideImageArray.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.setAttribute("loading", "lazy");
    slideDiv.style.backgroundImage = `url(assets/images/slides/${slide})`;

    if (index > 0) slideDiv.classList.add("hide");

    slideDiv.classList.add("slide");
    document.querySelector(".backgroundSlider").appendChild(slideDiv);
  });
};

generateSlideNodes();

let index = 1;

setInterval(function () {
  const slides = document.querySelectorAll(".backgroundSlider .slide");
  if (index >= slides.length) index = 0;

  slides.forEach((slide) => slide.classList.add("hide"));
  slides[index].classList.remove("hide");
  index++;
}, 6000);

const navigation = document.querySelector("nav.nav");
const navToggleButton = document.querySelector(".nav__menu");
const navLogo = document.querySelector(".nav__logo");
const navSlider = document.querySelector(".nav__link-container");
const navDesktopViewScreen = 1000;
const dropdownTransitionDuration = ".1s";

document.querySelectorAll("[data-aos-delay]").forEach((element) => {
  if (window.innerWidth < navDesktopViewScreen)
    element.setAttribute("data-aoe-delay", 0);
});

function resetMenu(node) {
  const dropdown = document.querySelectorAll(".dropdown");
  dropdown.forEach((list) => list != node && list.classList.add("hide"));
}

// Nav Toggler Fuction
navToggleButton.onclick = function (event) {
  if (navigation.classList.contains("active"))
    navigation.ontransitionend = () => {
      document.querySelectorAll("nav .dropdown").forEach((dropdown) => {
        dropdown.style.height = 0;
      });
      resetMenu();
    };
  else navigation.ontransitionend = null;

  navigation.classList.toggle("active");
  event.target.classList.toggle("hide");
};

const mainContainer = document.querySelector("main");

function solidNavigationEffect(event) {
  const mainRect = mainContainer.getBoundingClientRect().top;
  const calc = mainRect - navigation.clientHeight;
  const scrollUpButton = document.querySelector(".up__button");
  
  if (calc <= -300) {
    navigation.classList.remove("transparent");
    scrollUpButton.classList.add("show");
    return;
  }
  navigation.classList.add("transparent");
  scrollUpButton.classList.remove("show");
}

const dropdownHeightUpdater = function () {
  const dropdownsContainer = document.querySelectorAll(
    "label.dropdown__container"
  );

  dropdownsContainer.forEach(function (dropdownContainer) {
    const dropdown = dropdownContainer.querySelector(".dropdown");
    const dropdownButton = dropdownContainer.querySelector(".dropdown__link");
    const height = dropdown.clientHeight;

    if (window.innerWidth <= navDesktopViewScreen) {
      dropdown.style.height = 0;

      setTimeout(
        () => (dropdown.style.transitionDuration = dropdownTransitionDuration),
        200
      );

      dropdownButton.onclick = function (event) {
        event.preventDefault();
        if (dropdown.style.height == 0 + "px") {
          dropdown.style.height = height + 25 + "px";
        } else {
          dropdown.style.height = 0;
        }
      };
    } else {
      dropdown.style.height = "auto";
    }
  });
};

function load() {
  navSlider.style.transitionDuration = ".3s";
  dropdownHeightUpdater();
  solidNavigationEffect();
}

window.onscroll = function () {
  solidNavigationEffect();
  //   dropdownHeightUpdater()
};

window.onload = function () {
  load();
};
