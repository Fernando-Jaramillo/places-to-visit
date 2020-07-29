const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navigation');

// console.log(hamburguer);
// console.log(menu);

hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread");
});

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != hamburguer && e.target != menu){
        menu.classList.toggle("spread");
    }
})
