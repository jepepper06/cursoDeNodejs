//metodo path en nodejs
//se pide libpath = path
const path = require('path');

//se crea un array de path
//FE DE ERRATA: si se hace asi no se imprime el dir completo
//const pathArray = ('carpeta','subcarpeta','texto.txt');

//se crea filePath
//es el archivo que te de la gana jejeje
const filePath = path.join('carpeta','subcarpeta','texto.txt');
//se imprime el archivo seleccionado
console.log(filePath);

//el archivo seleccionado en especifico
const base = path.basename(filePath);
//se imprime
console.log(base);

//el archivo absoluto, su ubicacion exacta
const absolute = path.resolve(__dirname,filePath);
//se imprime 
console.log(absolute);