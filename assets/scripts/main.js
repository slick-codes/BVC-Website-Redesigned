const navigation = document.querySelector('nav.nav')
const navToggleButton = document.querySelector('.nav__menu')
const navLogo = document.querySelector('.nav__logo')
const navDesktopViewScreen = 1000
const navLinks = document.querySelectorAll('label.dropdown__link')
const navSlider = document.querySelector('.nav__link-container')


console.log(navLinks)

function resetMenu() {
    const dropdown = document.querySelectorAll('.dropdown')
    dropdown.forEach(list => list.classList.remove('show'))
    
    // navSlider.addEventListener('animationend' , function(event){
    //     console.log('animation ended')
    // })
}

navToggleButton.onclick = function (event) {
    navigation.classList.toggle('active')
    event.target.classList.toggle('hide')
    resetMenu()
}


function fixLogo() {
    if (window.innerWidth < navDesktopViewScreen) {
        const image = window.innerWidth > navDesktopViewScreen ? 'BVC-Logo-1.png' : 'BVC-Logo-2.png';
        // navLogo.src = `assets/images/${image}`
    }
}




navLinks.forEach((navItem, index) => {

    navItem.onclick = function (event) {
    if(window.innerWidth > navDesktopViewScreen)
        return 
        
        event.stopPropagation()
        const dropdown = document.querySelectorAll('.dropdown')
        // dropdown.forEach(node => node.classList.remove('show'))
        resetMenu()

        dropdown[index].classList.toggle('show')

    }

})

window.onload = function () {
    fixLogo()
    window.onload = () => fixLogo
}