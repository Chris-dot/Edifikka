/*$('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');
});
*/

const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');

const filtrar = () => {
    console.log(buscador.value)
    //const texto = buscador.Value.toLowerCase();
}

boton.addEventListener('click', filtrar)


let div = document.getElementById("field-search-id");
div.style.display = "absolute";

/*function desplegar(){
    
}
*/

