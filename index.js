// when demo icon is clicked 

function showPopUp(){
    const popUp = document.querySelector('.demo-pop-up')
    popUp.style.display = "block"

    setTimeout(function(){
         popUp.style.display = "none" 
    }, 3000);
}