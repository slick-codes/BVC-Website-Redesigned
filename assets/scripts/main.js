
AOS.init();

console.log(AOS)
//  fix mood for mobile

const navigation = document.querySelector("nav.nav");
const navToggleButton = document.querySelector(".nav__menu");
const navLogo = document.querySelector(".nav__logo");
const navLinks = document.querySelectorAll("label.dropdown__link");
const navSlider = document.querySelector(".nav__link-container");
const navDesktopViewScreen = 1000;

document.querySelectorAll('[data-aos-delay]').forEach( element => {
	if( window.innerWidth < navDesktopViewScreen)
		element.setAttribute('data-aoe-delay' , 0)
})



function resetMenu(node) {
	const dropdown = document.querySelectorAll(".dropdown");
	dropdown.forEach((list) => list != node && list.classList.add("hide"));
}

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

	console.log('-------------------')
	const dropdownContainers = document.querySelectorAll(".dropdown__container");

	dropdownContainers.forEach(function (dropdownCont, index) {
		if (window.innerWidth > navDesktopViewScreen) return;

		const dropdown = dropdownCont.querySelector(".dropdown");
		dropdown.classList.remove("hide");


		const dropdownHeight = dropdown.clientHeight;
		console.log("clientHeight", dropdownHeight);

		dropdown.ontransitionend = function () {
			console.log('srink')
		}
		dropdown.classList.add("hide");

		dropdownCont.querySelector(".link").onclick = function (event) {
			event.preventDefault();
			
			if (dropdown.classList.contains("hide")) {
				dropdown.style.height = dropdownHeight + "px";
			} else {
				dropdown.style.height = 0;
			}

			dropdown.classList.toggle("hide");
		};
	});
};



window.onscroll = function () {
	solidNavigationEffect()
};


window.onload = function () {
	// resetMenu()
	solidNavigationEffect();
	dropdownHeightUpdater()
	// window.onresize = dropdownHeightUpdater

};