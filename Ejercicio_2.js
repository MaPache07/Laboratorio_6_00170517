function SumProm (array){
    acum = 0;
    for (let i of array){
        acum += i;
    }
    console.log(acum);
    console.log(acum/array.length);
}