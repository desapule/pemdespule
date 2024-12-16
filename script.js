
window.onload = () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', () => {
        if(nav.style.display == "none"){
            nav.style.display = "block";
        }else{
            nav.style.display = "none";
        }
    });
}

