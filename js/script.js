// ARRAYS DE AUTOS Y PRECIOS
const autos = ["Toyota Corolla", "Chevrolet Onix", "Ford Ranger"];
const precios = [20000, 15000, 35000];

let totalCompra = 0;

// FUNCION 1: MOSTRAR AUTOS
function mostrarAutos() {
    console.log("Autos disponibles en FindCars:");
    for (let i = 0; i < autos.length; i++) {
        console.log(i + " - " + autos[i] + " - $" + precios[i]);
    }
}

// FUNCION 2: COMPRAR AUTO
function comprarAuto() {
    let opcion = parseInt(prompt(
        "Selecciona el auto que quieres comprar:\n" +
        "0 - Toyota Corolla ($20000)\n" +
        "1 - Chevrolet Onix ($15000)\n" +
        "2 - Ford Ranger ($35000)"
    ));
    if (opcion >= 0 && opcion < autos.length) {
        totalCompra = totalCompra + precios[opcion];
        alert("Agregaste " + autos[opcion] + " al carrito");
    } else {
        alert("Opción inválida");
    }
}

// FUNCION 3: MOSTRAR TOTAL
function mostrarTotal() {
    alert("El total de tu compra es: $" + totalCompra);
    console.log("Total de la compra:", totalCompra);
}

// PROGRAMA PRINCIPAL
alert("Bienvenido a FindCars 🚗");
let continuar = true;
while (continuar) {
    mostrarAutos();
    comprarAuto();
    continuar = confirm("¿Quieres comprar otro auto?");
}

mostrarTotal();