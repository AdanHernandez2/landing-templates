let btnRegresar = '<div class="btn__regresar" onclick="btn_Regresar()"> Volver inicio </div>';
let stileRegresar = '<link rel="stylesheet" href="../css/btn_regresar.css">';

document.head.innerHTML += stileRegresar;
document.body.innerHTML += btnRegresar;

function btn_Regresar() {
    window.location.href = "/landing-templates/";
}
    

