// when demo icon is clicked 

function showPopUp(){
    const popUp = document.querySelector('.demo-pop-up')
    popUp.style.display = "block"

    setTimeout(function(){
         popUp.style.display = "none" 
    }, 3000);
}

// check if form is being submitted
const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted")
})

