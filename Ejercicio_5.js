function tipo (array, m){
    list = [];
    for (let i of array){
        if(typeof i == m){
            list.push(i);
        }
    }
    return list;
}