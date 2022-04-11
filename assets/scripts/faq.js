const faqCard = document.querySelectorAll('.faq .faq_card')
// const hideClassName = '--hide' 
// const dropdownTransitionDuration = '.1s'

const clearFaqCardClass = function( exclude ){
    faqCard.forEach( card => {
        const icon = card.querySelector('.faq_card__title > div:first-child i')
        const iconContainer = card.querySelector('.faq_card__title > div:first-child')
        if( card !== exclude ){
            card.querySelector('.faq_card__dropdown').style.height = 0
            iconContainer.style.transform = 'rotate(-90deg)'
            icon.classList.replace('fa-minus' , 'fa-plus')
        }
    })
}



function faqDropDown(){
faqCard.forEach( card => {
    const cardTitle = card.querySelector('.faq_card__title')
    const dropdown = card.querySelector('.faq_card__dropdown')
    const height = dropdown.clientHeight
    dropdown.style.height = 0
        
    setTimeout( () => dropdown.style.transitionDuration = dropdownTransitionDuration, 300 )

    cardTitle.onclick = function(event){
        clearFaqCardClass(card)
        const icon = card.querySelector('.faq_card__title > div:first-child i')
        const iconContainer = card.querySelector('.faq_card__title > div:first-child')

        if( dropdown.style.height <= 0 + 'px'){
            dropdown.style.height = height + 25 + 'px'
            iconContainer.style.transform = 'rotate(0deg)'
            icon.classList.replace('fa-plus' , 'fa-minus')
        }else{
            dropdown.style.height = 0
            icon.classList.replace('fa-minus' , 'fa-plus')
            iconContainer.style.transform = 'rotate(-90deg)'
        }
    }
})
}

window.onload = function(){ // Overiding the main.js file 
    load() //  Overidig main.js file
    faqDropDown()
}