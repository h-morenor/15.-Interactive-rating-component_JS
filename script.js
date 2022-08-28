// Grabbing all buttons into an array
const buttons = document.querySelectorAll('.rateBtn')
const submit = document.querySelector('.submit')
const selected= document.querySelector('.you-selected')
const thankYou= document.querySelector('.thank-you')
const ratingWindow= document.querySelector('.rating')

let rating;

document.addEventListener('DOMContentLoaded', ()=> {
    // array method .forEach() to iterate through all buttons
    buttons.forEach((btn)=>{
        btn.addEventListener('click', ()=> {
            rating = btn.dataset.rating
            console.log(rating)
            btn.style.backgroundColor = 'hsl(25, 97%, 53%)'
            btn.style.color = 'hsl(0, 0%, 100%)'

            buttons.forEach(item => {
                if(item.dataset.rating != rating) {
                    item.style.backgroundColor = ''
                    item.style.color = ""
                }
            })
            return rating;
        })
    })

submit.addEventListener('click', ()=>{

    if (rating != undefined){
        ratingWindow.style.display = "none"
        thankYou.style.display = "flex"
    selected.innerHTML = `You selected ${rating} out of 5`
    } 
})

})


