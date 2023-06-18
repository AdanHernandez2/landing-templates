//boton ir arriba
document.querySelector('#buttonUp').addEventListener('click', ()=> {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if(currentScroll > 0){
        window.scrollTo(0,0);
    }
});

buttonUp = document.querySelector('#buttonUp');
window.onscroll = function(){

    let scroll = document.documentElement.scrollTop;

    if(scroll > 250){
        buttonUp.style.transform = "scale(1)";
    }else if( scroll < 250){
        buttonUp.style.transform = "scale(0)";
    }
}

let regresar = document.querySelector(".btn__regresar");

regresar.addEventListener("click", () => {
    window.location.href = "/";
});

