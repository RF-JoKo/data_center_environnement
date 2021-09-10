const menu = document.querySelector('nav');
const burger = document.querySelector('.burger');
const liens = document.querySelectorAll('nav a');

burger.addEventListener('click', ()=>{
    menu.classList.toggle('nav-reveal');
    burger.classList.toggle('burger-reveal');
});

liens.forEach(lien =>{
    lien.addEventListener('click', ()=>{
        menu.classList.remove('nav-reveal');
        burger.classList.remove('burger-reveal');
    });
});