//librería de eventos en nodejs 
//BUSCAR EN nodejs.dev para informacion mas clara
const eventEmitter = require('events')

//construimos u objeto de la clase eventEmitter
const customEmitter = new eventEmitter()

//se geneera la respuesta de mi evento al ser disparado
customEmitter.on('response', ()=>{
    console.log('datos recibidos')
})
//se genera otra respuesta de mi evento al ser disparado
customEmitter.on('response', ()=>{
    console.log('alguna otra logica de programacion')
})
//se dispara mi evento
customEmitter.emit('response')