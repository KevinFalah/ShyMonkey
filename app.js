const closedFace = document.querySelector('div.closed');
const openFace = document.querySelector('div.open');
const emoji = document.querySelectorAll('.emoji');

emoji.forEach((emoji) => {
    emoji.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.37)';
    emoji.style.borderRadius = '10%';
})

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active')
        closedFace.classList.remove('active')
    } 

});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})

