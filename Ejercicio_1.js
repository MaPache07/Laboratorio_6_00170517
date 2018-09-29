function Ocurrencias (n, array){
    var cont = 0;
    for (let i of array){
        if (n == i) {
            cont += 1;
        }
    }
    return cont;
}