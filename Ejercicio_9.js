function adivina (){
    array = [];
    for (let i = 0; i < 20; i++){
        array.push(Math.floor(Math.random() * 21));
    }
    var n = prompt('Adivine el numero');
    n = parseInt(n);
    if (array.includes(n)) {
        console.log('Felicidades, adivino');
    }
    else{
        console.log('Perdiste :(');
    }
}