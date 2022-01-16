//metodos asincronos para leer y escribir archivos
const {readFile, writeFile} = require('fs');

//lee el archivo en func(x,y,z)

console.log('Empezamos la tarea');
readFile('./carpeta/subcarpeta/first.txt','utf-8'

//el error y el resultado arrojan cosas diferentes
,(err,result) => {
    if(err){//si el error existe
        //se imprime el error
        console.log(err);
        //regresa
        return;
    }
    //si no hay error se rejistra el resultado
    const first = result;
    //se lee el segundo archivo
    readFile('./carpeta/subcarpeta/second.txt','utf-8'
    
    ,(err,result) => {
        if(err){//si hay error 
            //se imprime
            console.log(err);
            //se regresa
            return;
        }
        //se toma el resutado y se guarda
        const second = result;
        //se escribe en un archivo de texto
        writeFile('./carpeta/fsPrueba',`He aqui el resultado: ${first},\ny ${second}`
        ,(err,result)=>{
            if(err){//si hay error
                //se imprime el error
                console.log(err);
                //se regresa
                return;
            };
            //se toma el total
            total = result;
            //se imrpime
            console.log('terminamos la tarea');
        })
    });
});
console.log('Empezamos otra tarea');


