//HAMBURGER-MENU
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
    document.querySelector('.phone-menu').classList.toggle('phone-menu--active');
});

//MENU-PHONE-1 
document.querySelector('.menu-phone1').addEventListener('click', () => {
    window.scrollTo({
        top:document.querySelector('.aboutme').offsetTop,
        behavior:"smooth"
    })
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
    document.querySelector('.phone-menu').classList.toggle('phone-menu--active');
})

//MENU-PHONE-2 
document.querySelector('.menu-phone2').addEventListener('click', () => {
    window.scrollTo({
        top:document.querySelector('.design').offsetTop-60,
        behavior:"smooth"
    })
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
    document.querySelector('.phone-menu').classList.toggle('phone-menu--active');
})

//MEMU-COMP-1
$('.menu1').hover(() => {
    $('.bar1').toggleClass('bar--active');
})
document.querySelector('.menu1').addEventListener('click', ()=>{
    window.scrollTo({
        top:document.querySelector('.aboutme').offsetTop,
        behavior:"smooth"
    })
})

//MEMU-COMP-2
$('.menu2').hover(() => {
    $('.bar2').toggleClass('bar--active');
})
document.querySelector('.menu2').addEventListener('click', ()=>{
    window.scrollTo({
        top:document.querySelector('.design').offsetTop-40,
        behavior:"smooth"
    })
})

//MEMU-COMP-3
$('.menu3').hover(() => {
    $('.bar3').toggleClass('bar--active');
})


document.querySelector('.phone-menu h2').addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
    document.querySelector('.phone-menu').classList.toggle('phone-menu--active');
})

document.querySelector('.arrowback').addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

document.addEventListener('scroll', () => {
    var scrollpos = window.scrollY;

    if (scrollpos >= 70) {
        document.querySelector('nav').classList.add('nav--active');
        document.querySelector('.arrowback').classList.add('arrowback--active');
    }

    else {
        document.querySelector('nav').classList.remove('nav--active');
        document.querySelector('.arrowback').classList.remove('arrowback--active');
    }
})

window.onload = () => {
    document.querySelector('.photo').classList.add('img--active');
    document.querySelector('nav').classList.add('nav--active2');
    document.querySelector('.button').classList.add('button--active');

    let emptyText = new String();
    const welcomeText = "Stwórz swoją stronę internetową ze mną!";

    for(let i=0; i<welcomeText.length; i++)
     {
          setTimeout(() => {
                    emptyText += welcomeText[i];
                    document.querySelector("h1").innerHTML = `${emptyText}`;
                    
                    if(emptyText==welcomeText)
                {
                        setInterval(() => document.querySelector(".text-container").classList.add("text-container--active"),300)
                }        
        },(i+1)*100)      
     }      
};