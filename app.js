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

    let videojuegos = ["Minecraft", "Fortnite", "Mario Kart"];

console.log(videojuegos);

console.log(videojuegos[0]);
console.log(videojuegos[1]);
console.log(videojuegos[2]);

let PanFavorito = ["Concha", "Cuernito", "Mantecada"];
console.log(PanFavorito[0]);
console.log(PanFavorito[1]);
console.log(PanFavorito[2]);
let panes = ["Concha", "Cuernito", "Mantecada"];

console.log(panes.length);

console.log(panes[0]);
console.log(panes[panes.length - 1]);
panes.push("Dona");

console.log(panes);
console.log(panes.length);

let canciones = ["Sol en dia nublado", "Todo va estar bien", "Encontrarte"];
console.log(canciones);

console.log(canciones[0]);
console.log(canciones[1]);
console.log(canciones[2]);

console.log(canciones.length);
console.log(canciones[0]);
console.log(canciones[panes.length - 1]);
canciones.push("Promesas");
console.log(canciones);
console.log(canciones.length);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
for (let i = 0; i < canciones.length; i++) {
    console.log(canciones[i]);
}

let ciudades = ["Cancún", "Mérida", "Chiapas", "San Luis Potosí"];
for (let i = 0; i < ciudades.length; i++) {
    console.log(ciudades[i])
}

let series = ["El peso del amor", "Defensores de fantasmas", "Alquimia de almas", "Como se traduce este amor", "Aterrizaje de emergencia en tu corazón"];
for (let i = 1; i < series.length; i++) {
    console.log(series[i])
}
 let persona = {
    nombre: "Karen",
    edad: 22,
    ciudad: "Cancún"
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

let chatarra = {
    nombre: "esquite",
    tipo: "preparado",
    precio: 75
};

console.log(chatarra.nombre);
console.log(chatarra.tipo);
console.log(chatarra.precio);

let seriefavorita = {
    nombre: "La corona perfecta",
    pais: "Corea del sur",
    capitulos: 10,
      
};

console.log(seriefavorita.nombre);
    console.log(seriefavorita.pais);
    console.log(seriefavorita.capitulos);
let seriesNetflix = [
    {
        nombre: "La corona perfecta",
        pais: "Corea del Sur",
        capitulos: 10
    },
    {
        nombre: "Alquimia de Almas",
        pais: "Corea del Sur",
        capitulos: 30
    },
    {
        nombre: "Aterrizaje de emergencia en tu corazón",
        pais: "Corea del Sur",
        capitulos: 16
    }
];

console.log(seriesNetflix[0].nombre);

for (let i = 0; i < seriesNetflix.length; i++) {
    console.log("Serie: " + seriesNetflix[i].nombre);
}

for (let i = 0; i < seriesNetflix.length; i++) {
    if (seriesNetflix[i].capitulos > 15) {
        console.log(seriesNetflix[i].nombre);
    }
}
let contador = 0;

for (let i = 0; i < seriesNetflix.length; i++) {

    if (seriesNetflix[i].capitulos > 15) {
        contador++;
    }

}

console.log("Series con más de 15 capítulos: " + contador);

let empleados = [
    {
        nombre: "Gabriel",
        horas: 6
    },
    {
        nombre: "Juan",
        horas: 10
    },
    {
        nombre: "Samantha",
        horas: 9
    },
    {
        nombre: "Yajaira",
        horas: 7
    }
];

for (let i = 0; i < empleados.length; i++) {

    if (empleados[i].horas < 8) {
        console.log(empleados[i].nombre);
    }

    if (empleados[i].horas == 8) {
        console.log(empleados[i].nombre);
       }

}
let totalHoras = 0;

for (let i = 0; i < empleados.length; i++) {
    totalHoras = totalHoras + empleados[i].horas;
}

console.log("Total de horas trabajadas: " + totalHoras);

let promedio = totalHoras / empleados.length;

console.log("Promedio de horas: " + promedio);

let mayor = empleados[0];
let encontrado = false;

for (let i = 1; i < empleados.length; i++) {

    if (empleados[i].horas > mayor.horas) {
        mayor = empleados[i];

    }

}

console.log("Empleado con más horas: " + mayor.nombre);
console.log("Horas trabajadas: " + mayor.horas);

let menor = empleados[0];

for (let i = 1; i < empleados.length; i++) {

    if (empleados[i].horas < menor.horas) {
        menor = empleados[i];
    }

}

console.log("Empleado con menos horas: " + menor.nombre);
console.log("Horas trabajadas: " + menor.horas);

let nombreBuscado = "Pedro";
encontrado = false;

for (let i = 0; i < empleados.length; i++) {

    if (empleados[i].nombre == nombreBuscado) {

        console.log("Empleado encontrado:");
        console.log(empleados[i].nombre);
        console.log(empleados[i].horas);

        encontrado = true;
    }
}

if (encontrado == false) {
    console.log("Empleado no encontrado");
}

let productos = [
    {
        nombre: "Laptop",
        precio: 15000,
        stock: 5
    },
    {
        nombre: "Mouse",
        precio: 300,
        stock: 20
    },
    {
        nombre: "Teclado",
        precio: 800,
        stock: 10
    }
];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}
for (let i = 0; i < productos.length; i++) {

    console.log("Producto: " + productos[i].nombre);
    console.log("Precio: $" + productos[i].precio);

}

let Tienda = [
    {
        nombre: "Pan",
        Costo: 45,
        Stock: 17
    },
{     
        nombre: "Coca Cola",
        Costo: 52,
        Stock: 25
}, 
        {
            nombre: "Lacteos",
            Costo: 32,
            Stock: 10
        },
{
         nombre: "Jabon",
        Costo: 12,
        Stock: 2

},

{
        nombre: "Higienico",
        Costo:  21,
        Stock: 3
        
        
    }
    ];

    for (let i = 0; i < Tienda.length; i++) {
    console.log(Tienda[i].nombre);
}
for (let i = 0; i < Tienda.length; i++) {

    console.log("Producto: " + Tienda[i].nombre);
    console.log("Costo: $" + Tienda[i].Costo);

}