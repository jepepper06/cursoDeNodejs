//libreria os de nodejs
const os = require('os')

//info actual usuario

const user = os.userInfo()
console.log(user)

//tiempo en linea
console.log(`The sistem Uptime is ${os.uptime} seconds`);

//sistema operativo
//obtengo info del OS
const OS = {
    //tipo de sistema
    name:os.type(),
    //nro de procesadores
    cpus:os.cpus(),
    //version del OS
    version:os.version(),
    //memoria
    memoria:os.totalmem(),
    //memoria libre
    libreMem:os.freemem(),
    //release
    release: os.release()
}
//imprimo por consola
console.log(OS);