function fisica(array){
    console.log('Las mediciones son:')
    for (let i of array){
        console.log(i);
    }
    console.log('\n El promedio es:')
    var acum = 0;
    for (let i of array) {
        acum += i;
    }
    prom = acum/array.length;
    console.log(prom);
    console.log('\n La incerteza es:');
    a = 0;
    for (let i of array){
        a += Math.pow(i-prom, 2);
    }
    a = Math.sqrt(a/(array.length-1));
    console.log(a);
}

