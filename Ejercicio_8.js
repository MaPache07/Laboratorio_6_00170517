function matriz (m1, m2){
    var aux = [];
    for (var i = 0; i < m1.length; i++){
        let f = [];
        for (let j = 0; j < m1[i].length; j++) {
            m = m1[i][j] + m2[i][j];
            f.push(m);
        }
        aux.push(f);
    }
    for (let i of aux) {
        console.log(i);
    }
}
