// //que son las variables y tipos de datos en ella


// let nombre1 = "luciano"; //let para variables locales
// var nombre2="luciana"; //var para variables globales

// const nombre3 = "carlos"; //es constante

// //valores que maneja js

// /**
//  * boolean = true/false
//  * string = cadena de caracteres
//  * numer = numero
//  * null
//  * undefined (todo lo que no se define)
//  */

// let nombre = "raul";
// let apellido = "perez";
// const DNI=43657897;
// let domicilio = "calle falsa 123";
// console.log(nombre);

//operadores
/**
 * == => que sean iguales en el mismo valor 5 == "5"= true
 * === => compara tipo y valor 5 === "5" me daria false
 * != desigualdad =>5 != "5" nos daría false
 * !== => 5 !== "5" = true daria true
 * 
 * >, <, >=, <=, &&
 */
// //el if es de toda la vida
// let edad = 18;
// let edadRequerida = 18;

// switch (edad){
//     case 18:
//         console.log("tienes 18");
//         break;
//     case 19:
//         console.log("ganaste");
//         break;
//     default:
//         console.log("ingresa un valor valido");
// }
// console.log("bucle for");
// for(let i = 0; i <=10; i++){
//     console.log(i);
// }
// let bandera = 0;
// console.log("bucle while");
// while(bandera<10){
//     console.log(bandera);
//     bandera++;
// }

// console.log("do while")
// do {
//     console.log(bandera);
// }while(bandera <10);

//FUNCIONES

// function saludar(){
//     console.log("saludar Funcion");
// }
// saludar();
// const saludarArrowFunction = ()=> {
//     console.log("saludar ArrowFunction");
// }
// saludarArrowFunction();

// const sumaDosValores = (num1, num2)=> {
//     return num1 + num2;
// }

// let result = sumaDosValores(2,6);
// console.log(result);

//OBJETOS 

// let persona = {
//     nombre:'Tomas',
//     apellido:'Fernandez',
//     edad: 25,
//     saludar: function() {
//         console.log("Hola mi nombre es ",this.nombre);
//     },
//     direccion:{
//         calle: "Calle falsa",
//         numero:123,
//     }
// };
// persona.saludar();

// console.log(persona.apellido);
// console.log(persona.direccion);
// console.log(persona.direccion.calle);
// console.log(persona.direccion.numero);
// console.log("Direccion: ", persona.direccion)
// console.log("Calle:", persona.direccion.calle );
// console.log("Numero:", persona.direccion.numero);
