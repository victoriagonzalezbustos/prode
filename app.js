let contraseniaUsuario= "1234"
let usuario = prompt ("ingrese su nombre")
let contraseniaIngresada = prompt ("ingrese su contraseña")

while (contraseniaIngresada != contraseniaUsuario){
    contraseniaIngresada = prompt ("ingrese su contraseña")
}


let puntosUsuario = 0

// esto es lo que completa el usuario antes de que el partido suceda
let golesRiverProde = parseInt(prompt("ingresa los goles que crees que va a hacer river"))
let golesBocaProde = parseInt(prompt("ingresa los goles que crees que va a hacer boca"))
// esto es el resultado real que se carga una vez que el partido ya sucedio
let golesRiverReal = 2
let golesBocaReal = 2



//esto arroja los resultados sobre si el usuario acerto o no en el resultado
if ( (golesBocaProde > golesRiverProde & golesBocaReal > golesRiverReal)) {
    console.log("Acertaste! Gano Boca, sumas 1 punto")
    puntosUsuario ++
}
else if ((golesBocaProde < golesRiverProde & golesBocaReal < golesRiverReal)) {
    console.log("Acertaste! Gano River, sumas 1 punto")
    puntosUsuario ++
}
else if ((golesBocaProde == golesRiverProde & golesBocaReal == golesRiverReal)){
    console.log("Acertaste! Empataron, sumas 1 punto")
    puntosUsuario ++
} else {
    console.log("No acertaste! No sumas puntos en esta categoria")
    
}

if (golesBocaProde==golesBocaReal) {
    console.log("Acertaste los goles de Boca! Sumas un punto!")
    puntosUsuario ++
} else {
    console.log("No acertaste los goles de Boca, no sumas puntos en esta categoria")
    
}

if (golesRiverProde==golesRiverReal) {
    console.log("Acertaste los goles de River! Sumas un punto!")
    puntosUsuario ++
} else {
    console.log("No acertaste los goles de River, no sumas puntos en esta categoria")
    
}

console.log("Tenes un total de " + puntosUsuario + "punto/s")