const navigation = document.querySelector("nav.nav");
const navToggleButton = document.querySelector(".nav__menu");
const navLogo = document.querySelector(".nav__logo");
const navSlider = document.querySelector(".nav__link-container");
const navDesktopViewScreen = 1000;
const dropdownTransitionDuration = ".3s";

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
  
  if (calc <= 0) {
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
        if (dropdown.style.height == 0 + "px") {
          dropdown.style.height = height + 25 + "px";
        } else {
          dropdown.style.height = 0;
        }
	};
}else{
	dropdown.style.height = 100 + '%'
}

});

};

function load(){
	navSlider.style.transitionDuration = dropdownTransitionDuration
	dropdownHeightUpdater();
	solidNavigationEffect();
}


window.onscroll = function () {
	solidNavigationEffect();
//   dropdownHeightUpdater()
};

window.onload = function () {
  load()
};
