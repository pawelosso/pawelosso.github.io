
const buttonmenu = document.querySelector('.hamburger');
const phonemenu = document.querySelector('.phone-menu')

buttonmenu.addEventListener('click', event => {

buttonmenu.classList.toggle('hamburger--active');
phonemenu.classList.toggle('phone-menu--active')

});

