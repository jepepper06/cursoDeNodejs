//extrae los modulos 
//forma sincrona de leer archivos
//se piden los metodos de fs en un nugget
const {readFileSync, writeFileSync} = require('fs');

//se lee el primer archivo
const first = readFileSync('./carpeta/subcarpeta/first.txt','utf-8');

//se lee el segundo archivo 
const second = readFileSync('./carpeta/subcarpeta/second.txt','utf-8');

//se imprimen los archivos first y second
//console.log(first,"\n",second );

//se crea un archivo con el primero y el segundo
writeFileSync('./carpeta/total',`El resultado es: ${first} \ny ${second}`,
//la flag hace que se vuelva a alterar el archivo cada vez que se ejecuta
{ flag:'a' });

//se hace un read para mprimir por consola
//const total = readFileSync('./carpeta/total','utf-8');

//se imprime
//onsole.log(total);

