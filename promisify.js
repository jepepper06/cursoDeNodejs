const fs = require('fs')
const util = require('util')

const readFilePromise = util.promisify(fs.readFile)
const writeFilePrimise = util.promisify(fs.writeFile)



const start = async()=>{
    try{
        const first = await readFilePromise('./carpeta/subcarpeta/first.txt','utf-8')
        const second = await readFilePromise('./carpeta/subcarpeta/second.txt','utf-8')
        const prueba = await writeFilePrimise('./carpeta/subcarpeta/prueba.txt',`ESTO ES IMPRESIONANTE:\n ${first} , ${second}\n`,{flag:'a'})
        console.log(`${first}, ${second}`)
    }catch(error){
        console.log(error);
    }
    
}

start()
//ARRIBA ESTÁ OTRA FORMA MAS RAPIDA DE HACER LO MISMO XDXDXDXDXXDXDXDXDXDXDXD  
        // const readFilePromise = util.promisify()
        //patrones asincronos
        // const getText = (path)=>{
        //     //se crea un objeto del tipo promesa
        //     return new Promise((resolve,reject)=>{
        //         fs.readFile(path, 'utf-8',(err,data)=>{
        //             if(err){
        //                 reject(err)
        //             }else{
        //                 resolve(data)
        //             }
        //         })
        //     })
        // }
// getText('./carpeta/subcarpeta/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))