// SIMULADOR DE DISTRIBUIDORA MUSCIAL.

let nombre = prompt("Porfavor Ingrese su nombre")

alert("Hola " + nombre + "! Bienvenidx a DUBmusic")
alert("A continuacion le mostraremos los plenes actualmente disponibles")

let pagoEfectivo = 0.20
let pagoTarjeta = 0.15
let precio = 0

function calculadoraEfect(precio, pagoEfectivo, precio) {
    return (precio - (precio * pagoEfectivo))
}
function calculadoraTarjeta(precio, pagoTarjeta, precio) {
    return (precio + (precio * pagoTarjeta))
}
let seleccionUsuario = prompt("(1)Plan personal $2500<->(2)Plan duo $2750<->(3)Plan familiar $3000")


while (seleccionUsuario) {
    if (seleccionUsuario == 1) {
        let metodoPago = prompt("Ha seleccionado el plan personal, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
        if (metodoPago == "efectivo") {
            let precio = 2500
            let compraPlan = confirm("Pagando en efectivo el precio con descuento es el siguiente $" + calculadoraEfect(precio, pagoEfectivo, precio) + " ¿Desea pagar con este medio de pago?")
            if (compraPlan === false) {
                metodoPago = prompt("Ha seleccionado Ford Escort, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
                if (metodoPago == "tarjeta") {
                    let compraPlan = confirm("Pagando con tarjeta tiene un recargo del 15%, el precio es el siguiente $" + calculadoraTarjeta(precio, pagoTarjeta, precio) + " ¿Desea pagar con este medio de pago?")
                    if (compraPlan == true) {
                        alert("Muchas gracias por su compra!")
                    }
                    break
                }
            }
            else if (compraPlan === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
        else if (metodoPago == "tarjeta") {
            let precio = 2500
            let compraPlan = confirm("Pagando con tarjeta tiene un recargo del 15%, el precio es el siguiente $" + calculadoraTarjeta(precio, pagoTarjeta, precio) + " ¿Desea pagar con este medio de pago?")
            if (compraPlan === false) {
                metodoPago = prompt("Ha seleccionado el plan personal, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
                if (metodoPago == "efectivo") {
                    let compraPlan = confirm("Pagando en efectivo el precio con descuento es el siguiente $" + calculadoraEfect(precio, pagoEfectivo, precio) + " ¿Desea pagar con este medio de pago?")
                    if (compraPlan == true) {
                        alert("Muchas gracias por su compra!")
                    }
                    break
                }

            }
            else if (compraPlan === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
    }
    else if (seleccionUsuario == 2) {
        let metodoPago = prompt("Ha seleccionado el plan duo, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
        if (metodoPago == "efectivo") {
            let precio = 2750
            let compraPlan = confirm("Pagando en efectivo el precio con descuento es el siguiente $" + calculadoraEfect(precio, pagoEfectivo, precio) + " ¿Desea pagar con este medio de pago?")
            if (compraPlan === false) {
                metodoPago = prompt("Ha seleccionado el plan duo, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()

                if (metodoPago == "tarjeta") {
                    let compraPlan = confirm("Pagando con tarjeta tiene un recargo del 15%, el precio es el siguiente $" + calculadoraTarjeta(precio, pagoTarjeta, precio) + " ¿Desea pagar con este medio de pago?")
                    if (compraPlan == true) {
                        alert("Muchas gracias por su compra!")
                    }
                    break
                }
            }
            else if (compraPlan === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
        else if (metodoPago == "tarjeta") {
            let precio = 2750
            let compraPlan = confirm("Pagando con tarjeta tiene un recargo del 15%, el precio es el siguiente $" + calculadoraTarjeta(precio, pagoTarjeta, precio) + " ¿Desea pagar con este medio de pago?")
            if (compraPlan === false) {
                metodoPago = prompt("Ha seleccionado el plan duo, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
                if (metodoPago == "efectivo") {
                    let compraPlan = confirm("Pagando en efectivo el precio con descuento es el siguiente $" + calculadoraEfect(precio, pagoEfectivo, precio) + " ¿Desea pagar con este medio de pago?")
                    if (compraPlan == true) {
                        alert("Muchas gracias por su compra!")
                    }
                    break
                }

            }
            else if (compraPlan === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
    }
    else if (seleccionUsuario == 3) {
        let metodoPago = prompt("Ha seleccionado Plan familiar, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
        if (metodoPago == "efectivo") {
            let precio = 3000
            let compraPlan = confirm("Pagando en efectivo el precio con descuento es el siguiente $" + calculadoraEfect(precio, pagoEfectivo, precio) + " ¿Desea pagar con este medio de pago?")
            if (compraPlan === false) {
                metodoPago = prompt("Ha seleccionado Plan familiar, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
                if (metodoPago == "tarjeta") {
                    let compraPlan = confirm("Pagando con tarjeta tiene un recargo del 15%, el precio es el siguiente $" + calculadoraTarjeta(precio, pagoTarjeta, precio) + " ¿Desea pagar con este medio de pago?")
                    if (compraPlan == true) {
                        alert("Muchas gracias por su compra!")
                    }
                    break
                }
            }
            else if (compraPlan === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
        else if (metodoPago == "tarjeta") {
            let precio = 3000
            let compraPlan = confirm("Pagando con tarjeta tiene uon recargo del 15%, el precio es el siguiente $" + calculadoraTarjeta(precio, pagoTarjeta, precio) + " ¿Desea pagar con este medio de pago?")
            if (compraPlan === false) {
                metodoPago = prompt("Ha seleccionado Plan familiar, desea pagar en efectivo o con tarjeta? Escriba su respuesta.").toLowerCase()
                if (metodoPago == "efectivo") {
                    let compraPlan = confirm("Pagando en efectivo el precio con descuento es el siguiente $" + calculadoraEfect(precio, pagoEfectivo, precio) + " ¿Desea pagar con este medio de pago?")
                    if (compraPlan == true) {
                        alert("Muchas gracias por su compra!")
                    }
                    break
                }

            }
            else if (compraPlan === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
    }
    else (seleccionUsuario == "" || seleccionUsuario > 3); {
        alert("Tas aburrido genio?")
    }
}
const Producto = function(plan, pago, suscripcion, compra) {
    this.plan = plan;
    this.pago = pago;
    this.suscripcion = suscripcion;
    this.compra = compra;
};

let plan1 = new Producto("Plan personal", 2500, 8, true);
let plan2 = new Producto("Plan dúo", 2750, 8, true);
let plan3 = new Producto("Plan familiar", 3000, 8, true);

let lista = [plan1, plan2, plan3];

function filtrarProductos() {
    let palabraClave = prompt("Ingresa el plan que quieras comprar").trim().toUpperCase();
    let resultado = lista.filter((x) => x.plan.toUpperCase().includes(palabraClave));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("No se encontraron coincidencias con: " + palabraClave);
    }
}

function agregarProducto() {
    let plan = prompt("Ingresa el plan").trim();
    let pago = parseInt(prompt("Ingresa el método de pago"));
    let suscripcion = parseInt(prompt("Ingresa el/los años de suscripción"));
    let compra = prompt("Desea finalizar su compra? (Sí o No)").trim().toUpperCase();

    if (isNaN(pago) || isNaN(suscripcion) || plan === "" || compra !== "SÍ" && compra !== "NO") {
        alert("Por favor ingresa valores válidos");
        return;
    }

    let producto = new Producto(plan, pago, suscripcion, compra === "SÍ");

    lista.push(producto);
    console.table(lista);
}









