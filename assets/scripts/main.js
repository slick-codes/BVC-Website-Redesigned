const navigation = document.querySelector('nav.nav')
const navToggleButton = document.querySelector('.nav__menu')
const navLogo = document.querySelector('.nav__logo')
const navLinks = document.querySelectorAll('label.dropdown__link')
const navSlider = document.querySelector('.nav__link-container')
const navDesktopViewScreen = 1000


console.log(navLinks)

function resetMenu( node ) {
    const dropdown = document.querySelectorAll('.dropdown')
    dropdown.forEach(list => (list != node)&&  list.classList.remove('show') )
}

navToggleButton.onclick = function (event) {
    navigation.classList.toggle('active')
    event.target.classList.toggle('hide')
    resetMenu()
}


function fixLogo() {
    resetMenu()
    if (window.innerWidth < navDesktopViewScreen) {
        const image = window.innerWidth > navDesktopViewScreen ? 'BVC-Logo-1.png' : 'BVC-Logo-2.png';
        // navLogo.src = `assets/images/${image}`
    }
}


navLinks.forEach((navItem, index) => {

    navItem.onclick = function (event) {
        event.preventDefault()
    if(window.innerWidth >= navDesktopViewScreen)
        return resetMenu()
        
        event.stopPropagation()
        const dropdown = document.querySelectorAll('.dropdown')
        
        resetMenu(dropdown[index])
        dropdown[index].classList.toggle('show')

    }

})




const mainContainer = document.querySelector('main')

function solidNavigationEffect(event){
    const mainRect = mainContainer.getBoundingClientRect().top
    const calc = mainRect - navigation.clientHeight
    const scrollUpButton = document.querySelector('.up__button')
    
    if( calc <= 0){
        navigation.classList.remove('transparent')
        scrollUpButton.classList.add('show')
        return
    }
        navigation.classList.add('transparent')
        scrollUpButton.classList.remove('show')
}


window.onscroll = solidNavigationEffect

window.onload = function () {
    fixLogo()
    solidNavigationEffect()
}



