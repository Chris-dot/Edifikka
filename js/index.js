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
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
