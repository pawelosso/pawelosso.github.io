

const buttonmenu = document.querySelector('.hamburger');
const phonemenu = document.querySelector('.phone-menu');
const navigation = document.querySelector('nav');
const bars = document.querySelector('.bars')
const logo = document.querySelector('.logo');
const aboutoffset = document.querySelector('.aboutme').offsetTop;


buttonmenu.addEventListener('click', event1 => {

buttonmenu.classList.toggle('hamburger--active');
phonemenu.classList.toggle('phone-menu--active');

});

document.addEventListener('scroll', event2 => {
var scrollpos = window.scrollY;

if(scrollpos>=90){
    navigation.classList.add('nav--active');
    logo.classList.add('logo--active');
}
else
{
    navigation.classList.remove('nav--active');
    logo.classList.remove('logo--active');
}
})

document.addEventListener('scroll', event3 =>{

    var scrollpos = window.scrollY;
    
    if(scrollpos>=aboutoffset-180){
        logo.classList.add('black');
    }
    else{
        logo.classList.remove('black')
    }       

    if(scrollpos>=aboutoffset-70){
        bars.classList.add('black');
    }
    else{
        bars.classList.remove('black')
    }       
})

$('.menu1').hover(function(){
    $('.bar1').toggleClass('bar--active');
})

$('.menu2').hover(function(){
    $('.bar2').toggleClass('bar--active');
})

$('.menu3').hover(function(){
    $('.bar3').toggleClass('bar--active');
})



