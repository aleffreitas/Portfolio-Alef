const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); // toggle = (adicione caso tenha, remova caso não tenha)
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);