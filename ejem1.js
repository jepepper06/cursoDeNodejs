const fs = require('fs');

console.log('comienzo de latarea');

fs.readFile('./carpeta/total','utf-8',(err,resultado)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(resultado);
    console.log('tarea completada');
});
console.log('comezando otra tarea');