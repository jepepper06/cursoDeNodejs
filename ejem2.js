const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello world');
})

servidor.listen(5000, ()=>{
    console.log('server on port 5000');
})



