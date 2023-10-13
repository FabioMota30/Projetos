
let partida = calcularPartida(81, 2)

function calcularPartida(vitoria, derrota) {

    let resultado = vitoria - derrota;

    if(resultado < 10){
        console.log("Você recebeu medalha de Ferro" );
    } 
    else if(resultado >= 11 && resultado <= 20){
        console.log("Você recebeu medalha de Bronze");
    }
    else if(resultado >= 21 && resultado <= 50){
        console.log("Você recebeu medalha de Prata");
    }
    else if(resultado >= 51 && resultado <= 80){
        console.log("Você recebeu medalha de Ouro");
    }
    else if(resultado >= 81 && resultado <= 90){
        console.log("Você recebeu medalha de Diamante");
    }
    else if(resultado >= 91 && resultado <= 100){
        console.log("Você recebeu medalha de Lendário");
    } else{
        console.log("Você recebeu medalha de Imortal");
    }

    
    return resultado;

    console.log(resultado);
}