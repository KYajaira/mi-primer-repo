let nombre = "Karen";
let edad = 22;
let ciudad = "Cancún";

console.log("Hola, mi nombre es " + nombre);
console.log("Tengo " + edad + " años");
console.log("Vivo en " + ciudad);
let comida = "pizza";
let color = "morado";

console.log("Mi comida favorita es " + comida);
console.log("Mi color favorito es " + color);


if (edad >= 18) {
    console.log("Puedo entrar a la fiesta");
} else {
    console.log("No puedo entrar");
}
let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace mucho calor");
} else {
    console.log("El clima está agradable");
}
let dinero = 500;
if (dinero >= 600) {
    console.log("Puedo comprarme una mochila");
} else {
    console.log ("No me alcanza");

}
let contraseña= "4321";
if (contraseña == "4321") {
    console.log("Adelante");
} else {
    console.log("Denegado");
}
let calificacion = 85;

if (calificacion >= 70) {
    console.log("Aprobaste la materia");
} else {
    console.log("Reprobaste la materia");
}
let trabajo = 8;
console.log ("Mi horario " + trabajo + " horas");
if (trabajo >= 8) {
    console.log("Horas extras");
} else {
    console.log("Jornada normal o menor");
}
function saludar() {
    console.log("Hola Karen");
}

saludar();
function mostrarEdad(edad) {
    console.log("Tu edad es " + edad);
}

mostrarEdad(22);
mostrarEdad(30);
function ComidaFavorita(Comida) {
    console.log("Mi comida favorita es " + Comida);
    }

    ComidaFavorita("Hamburguesa");
    ComidaFavorita("Chile Relleno");

    function mostrarciudad(ciudad) {
        console.log("La ciudad que quiero conocer es " + ciudad);

               
    }
    mostrarciudad("San Luis Potosi " + "y " + "Chiapas ");