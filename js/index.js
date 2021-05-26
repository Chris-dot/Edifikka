/*$('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');
});
*/

// Barra de busqueda Banner

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

//Circular NavBar Contact RRSS
document.querySelector(".navbar-btn").addEventListener("click", () => {

    document.querySelector(".navbar-wrapper").classList.toggle("change");
});
