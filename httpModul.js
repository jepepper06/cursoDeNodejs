//se us la lib http
const http = require('http');

//se crea un servidorlas distintas paginas
const server = http.createServer((req,res)=>{

    //se generan 
    if(req.url === '/'){
        res.end('Bienvenido a nuestra pagina');
    };
    if(req.url === '/about'){
        res.end('alguna informacion sobre nosotros ')
    };
    //pagina por defecto
    res.end(`<h1>Ooopss!</h1>
    <p>por favor regrese a la <a href='/'>pagina de inicio</a></p>`
      );
});

server.listen(3000);
