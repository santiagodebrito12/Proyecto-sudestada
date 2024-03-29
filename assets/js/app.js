

//variables
const contenedorCarrousel = document.querySelector('.contenedor-productos');
const btnIzquierda = document.querySelector('.flecha-izq');
const btnDerecha = document.querySelector('.flecha-derecha');






//funcionalidad del nav Bar
const contenedorNavBar = document.querySelector('.contenedor-burguer-menu');
const btnNavBar = document.querySelector('.contenedor-navbar');
const navMenu   = document.querySelector('#nav-menu');
const listaNav  = document.querySelector('.lista-nav');

// Evento CLICK
btnNavBar.addEventListener('click', () =>{   
    if(navMenu.classList.contains('close')){     
        navMenu.classList.remove('close');
        // contenedorNavBar.classList.add('open','animate__animated' ,'animate__slideInDown')
        navMenu.classList.add('open','animate__animated' ,'animate__slideInDown');
    }else{
       navMenu.classList.add('close','animate__animated','slideInUp');
       navMenu.classList.remove('open');
    }
})

listaNav.addEventListener('click', ()=>{
  if(navMenu.classList.contains('open')){
    navMenu.classList.remove('open');
    navMenu.classList.add('close','animate__animated','slideInUp');
  }
})
  
  






const swiper = new Swiper('.swiper-container', {
     
        // slidesPerView: 3,
        spaceBetween: 30,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1044:{
        slidesPerView: 3,
        spaceBetween: 10
      }

}, 

});