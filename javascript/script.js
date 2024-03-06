let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows:true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableonInteraction:false,
    }
});
