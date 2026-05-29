function CalcularPrecio (PrecioUnitario , cantidad) {
    const total = PrecioUnitario * cantidad;
    return total;
}
//function PuedeReservar (cantidad){ 
 //   if (cantidad <=2);
  //  }
function PuedeReservar (TazasDisponibles){
    return TazasDisponibles >0;
    }
  //  const botonReservar = document.querySelector("#boton-reservar");

   // botonReservar.addEventListener("click", function() {
   //     console.log("el usuario hizo click");
   // });

    const botonReservar = document.querySelector("#boton-reservar");
    const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

    if (PuedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;  
    } else {
        botonReservar.textContent = "No puedes reservar";
        botonReservar.disabled = true;
    } 
});