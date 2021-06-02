
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