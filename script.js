console.log('connecté !')
// Je selectionnet je stock
// Bouton succes
const btnSuccess = document.querySelector('.btn-succes');

// DIV cookies
const cookies = document.querySelector('.cookies');

// Je soumet un evenement lors du click sur le bouton accepter cookies
btnSuccess.addEventListener('click', function(){
    console.log('bouton clické')
    cookies.style.opacity = "0";
});