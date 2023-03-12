// cerrar menu lateral
const contenido = document.querySelector('#contenido');

document.querySelector('#boton-menu').addEventListener('click', () => {

    contenido.classList.toggle('active');
});

const comprobarAncho = () => {

    if(window.innerWidth <= 768){
        contenido.classList.remove('active');
    }else{
        contenido.classList.add('active');
    }
}
comprobarAncho();

window.addEventListener('resize', () => {
    comprobarAncho();
});
