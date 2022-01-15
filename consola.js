const process = require('process');
//se incia un array de preguntas
var preguntas = ['Cuantos años tienes?',
                 'A qué te dedicas?'   ,
                 'Qué haces en tus dias libres?'];

//se ace una array de respuestas                 
var respuestas = [];

//se hace una funcion que imprime preguntas
function  pregunta(i){
    process.stdout.write(preguntas[i]);
}


process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());
    
    if(respuestas.length < preguntas.lenght){
        pregunta(respuestas.lenght);
    }else{
        process.exit();
    }
});
newFunction();
function newFunction() {
    pregunta(0);
}

