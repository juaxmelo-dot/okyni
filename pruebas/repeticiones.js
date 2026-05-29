console.log ("V60");
console.log ("Kyoto drip");
console.log ("Siphon");
console.log ("Prensa Francesa");

//lista de metodos , se llaman arrays 

const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa Francesa"];

//instruccion que rrecorre la lista y hace algo con cada elemento 

for (const metodo of metodos) {
    console.log (metodo);
}

console.log ("final de programa");

const ReservasDelDia = [2,1,2,1,2];
let totalTazas= 0;

for (const cantidad of ReservasDelDia) {
    totalTazas += cantidad;
}

console.log (totalTazas);