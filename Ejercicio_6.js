function codigo (cadena){
    var letras = ['m', 'u', 'r', 'c', 'i', 'e', 'l', 'a', 'g', 'o'];
    var numero =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var cad = "";
    for(let i of cadena){
        if (letras.includes(i)){
            cad = cad + numero[letras.indexOf(i)];
        }
        else {
            cad = cad + i;
        }
    }
    return cad;
}