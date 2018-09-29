function Sum(array){
    var n = Math.ceil(array.length/2);
    for (let i = 0; i < n; i++){
        let m = array[i] + array[array.length-i-1];
        console.log(m);
    }
}