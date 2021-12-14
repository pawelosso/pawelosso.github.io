
const buttonmenu = document.querySelector('.hamburger');
const phonemenu = document.querySelector('.phone-menu');
const navigation = document.querySelector('nav');
const bars = document.querySelector('.bars');
const aboutoffset = document.querySelector('.aboutme').offsetTop;
const h1 = document.querySelector('h1');
const textcontainer = document.querySelector('.text-container'); 
const headerimg = document.querySelector('.photo');
const button = document.querySelector('.button');
const arrowback = document.querySelector('.arrowback-comp')

buttonmenu.addEventListener('click', event1 => {

buttonmenu.classList.toggle('hamburger--active');
phonemenu.classList.toggle('phone-menu--active');

});

document.addEventListener('scroll', event2 => {
var scrollpos = window.scrollY;

if(scrollpos>=70){
    navigation.classList.add('nav--active');
    arrowback.classList.add('arrowback--active');
}
else
{
    navigation.classList.remove('nav--active');
    arrowback.classList.remove('arrowback--active');
}
})

document.addEventListener('scroll', event3 =>{

    var scrollpos = window.scrollY;
    
    if(scrollpos>=aboutoffset-70){
        bars.classList.add('black');
        arrowback.classList.add('arrowback--active2')
    }
    else{
        bars.classList.remove('black')
        arrowback.classList.remove('arrowback--active2')
    }       

    if(scrollpos>=aboutoffset-170){
        arrowback.classList.add('arrowback--active2')
    }
    else{
        arrowback.classList.remove('arrowback--active2')
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

window.onload = function(){
    h1.classList.add('h1--active');
    textcontainer.classList.add('text-container--active');
    headerimg.classList.add('img--active')
    navigation.classList.add('nav--active2')
    button.classList.add('button--active');
};

