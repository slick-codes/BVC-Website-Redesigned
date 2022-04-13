const slideImageArray = ['slide1.jpg' , 'slide2.jpg' ,'slide3.jpg']

const generateSlideNodes = function(){
    const firstSlide = null 

    slideImageArray.forEach( (slide, index) => {
        const slideDiv = document.createElement('div')
        slideDiv.setAttribute("loading", "lazy")
        slideDiv.style.backgroundImage = `url(assets/images/slides/${slide})`
    
        if( index > 0)
            slideDiv.classList.add('hide')

        slideDiv.classList.add('slide')
        document.querySelector('.backgroundSlider').appendChild(slideDiv)
    })
}

generateSlideNodes()

let index = 1;

setInterval( function(){
    const slides = document.querySelectorAll('.backgroundSlider .slide')
    if(index >= slides.length)
        index = 0
    
    slides.forEach(slide => slide.classList.add('hide') )
    slides[index].classList.remove('hide')
    index++
}, 6000)