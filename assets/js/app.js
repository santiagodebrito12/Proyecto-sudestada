
//variables
const contenedorCarrousel = document.querySelector('.contenedor-productos');
const btnIzquierda = document.querySelector('.flecha-izq');
const btnDerecha = document.querySelector('.flecha-derecha');


//Eventos

btnDerecha.addEventListener('click', () =>{
    console.log('desde btn derecha...')
    contenedorCarrousel.scrollLeft += contenedorCarrousel.offsetWidth;
})

btnIzquierda.addEventListener('click', () =>{
    contenedorCarrousel.scrollLeft -= contenedorCarrousel.offsetWidth;
})



//funcionalidad del nav Bar
const contenedorNavBar = document.querySelector('.contenedor-burguer-menu');
const btnNavBar = document.querySelector('.contenedor-navbar');
const navMenu   = document.querySelector('#nav-menu');


//Evento CLICK

btnNavBar.addEventListener('click', () =>{
    
    if(navMenu.classList.contains('close')){
        
        navMenu.classList.remove('close');
        contenedorNavBar.classList.add('open','animate__animated' ,'animate__slideInDown')
        navMenu.classList.add('open','animate__animated' ,'animate__slideInDown');
     
    }else{
       navMenu.classList.add('close','animate__animated','slideInUp');
       contenedorNavBar.classList.remove('open','animate__animated' ,'animate__slideInDown');
       navMenu.classList.remove('open');
    }

})

//animacion de imagenes
