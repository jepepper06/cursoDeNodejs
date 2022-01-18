const { createReadStream } = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    const fileStream = createReadStream('./carpeta/gran.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        console.log(err);
    })

}).listen(3000)