

const buttonmenu = document.querySelector('.hamburger');
const phonemenu = document.querySelector('.phone-menu');
const navigation = document.querySelector('nav');

buttonmenu.addEventListener('click', event1 => {

buttonmenu.classList.toggle('hamburger--active');
phonemenu.classList.toggle('phone-menu--active');

});

document.addEventListener('scroll', event2 => {
var scrollpos = window.scrollY;

if(scrollpos>=95){
    navigation.classList.add('nav--active');
}
else(navigation.classList.remove('nav--active'));

})
