const body = document.querySelector('body');

//offset
let aboutoffset = document.querySelector('.aboutme').offsetTop;
let designoffset = document.querySelector('.design').offsetTop;
let formoffer = document.querySelector('.contactme').offsetTop;

//offset for phones


//header
const h1 = document.querySelector('h1');
const textcontainer = document.querySelector('.text-container'); 
const headerimg = document.querySelector('.photo');
const button = document.querySelector('.button');
const arrowback = document.querySelector('.arrowback');
const arrowbackPhone = document.querySelector('.phone-menu h2');

//phone-menu
const menuPhone1 = document.querySelector('.menu-phone1');
const menuPhone2 = document.querySelector('.menu-phone2');
const menuPhone3 = document.querySelector('.menu-phone3');
const phonemenu = document.querySelector('.phone-menu');
const buttonmenu = document.querySelector('.hamburger');

//comp-menu
const navigation = document.querySelector('nav');
const bars = document.querySelector('.bars');
const menuComp1 = document.querySelector('.menu1');
const menuComp2 = document.querySelector('.menu2');
const menuComp3 = document.querySelector('.menu3');

buttonmenu.addEventListener('click', () => {
        buttonmenu.classList.toggle('hamburger--active');
        phonemenu.classList.toggle('phone-menu--active');
});

document.addEventListener('scroll', () => {
        var scrollpos = window.scrollY;

        if (scrollpos >= 70) {
            navigation.classList.add('nav--active');
            arrowback.classList.add('arrowback--active');
        }

        else {
            navigation.classList.remove('nav--active');
            arrowback.classList.remove('arrowback--active');
        }
    })

button.addEventListener('click', () => {
        window.scrollTo({
            top:formoffer-60,
            behavior:"smooth"
        })
})

//Menu buttons start
arrowback.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

menuComp1.addEventListener('click', ()=>{
    window.scrollTo({
        top:aboutoffset-150,
        left:0,
        behavior:"smooth"
    })
})
menuComp2.addEventListener('click', ()=>{
    window.scrollTo({
        top:designoffset-30,
        left:0,
        behavior:"smooth"
    })
})

menuComp3.addEventListener('click', ()=>{
    window.scrollTo({
        top:formoffer,
        left:0,
        behavior:"smooth"
    })
})


$('.menu1').hover(() => {
        $('.bar1').toggleClass('bar--active');
    })

$('.menu2').hover(() => {
        $('.bar2').toggleClass('bar--active');
    })

$('.menu3').hover(() => {
        $('.bar3').toggleClass('bar--active');
    })

window.onload = () => {
    headerimg.classList.add('img--active');
    navigation.classList.add('nav--active2');
    button.classList.add('button--active');

    let emptyText = new String();
    const welcomeText = "Stwórz swoją stronę internetową ze mną!";

    for(let i=0; i<welcomeText.length; i++)
     {
          setTimeout(() => {
                    emptyText += welcomeText[i];
                    document.querySelector("h1").innerHTML = emptyText;
                    
                    if(emptyText==welcomeText)
                {
                        setInterval(() => {
                        document.querySelector(".text-container").classList.add("text-container--active");
                        },300)
                        
                        setInterval(() => { 
                            
                        },300)
                }     
               
        },(i+1)*100)      
     }      

};

