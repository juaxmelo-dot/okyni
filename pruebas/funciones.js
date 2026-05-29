function CalcularPrecio (PrecioUnitario , cantidad) {
    const total = PrecioUnitario * cantidad;
    return total;
}

console.log (CalcularPrecio (5, 2));
console.log (CalcularPrecio (3, 4));
console.log (CalcularPrecio (7, 1));

// una funcion que decide 

function PuedeReservar (cantidad){ 
    if (cantidad <=2) {
        return true;
    } else {
        return false;   
        }
    }
    if (PuedeReservar (8)) {
        console.log ("Reservacion confirmada");
        } else {
        console.log ("Losiento maximo dos tazas por persona, No puedes reservar");
    }
