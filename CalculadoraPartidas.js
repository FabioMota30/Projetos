let partida = calcularPartida(70, 2); 

function calcularPartida(vitoria, derrota){
    let subtrair = vitoria - derrota;
    return subtrair;
}


if(partida < 10){
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Ferro");
}
else if(partida >= 11 && partida <= 20){
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Bronze");
}
else if(partida >= 21 && partida <= 50){
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Prata");
}
else if(partida >= 51 && partida <= 80){
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Ouro");
}
else if(partida >= 81 && partida <= 90){
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Diamante");
}
else if(partida >= 91 && partida <= 100){
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Lendário");
} else {
    console.log( "O Herói tem o saldo de " + partida + " pontos. Você está no nível de Imortal");
    
}
}
