var personas = [];
function Persona() {
    flag = true;
    while(flag){
        console.log('1. Ingresar una persona.')
        console.log('2. Buscar persona.')
        console.log('3. Modificar una persona.')
        console.log('4. Eliminar una persona.')
        console.log('5. Mostrar todas persona.')
        console.log('6. Salir')
        var o = prompt('Ingrese una opcion');
        switch(o){
            case '1':
                Ingresar();
                break;
            case '2':
                Buscar();
                break;
            case '3':
                Modificar();
                break;
            case '4':
                Eliminar();
                break;
            case '5':
                Mostrar();
                break;
            case '6':
                flag = false;
                break;
            default:
                console.log('No ingreso un opcion valida');
        }
    }
}

function Ingresar(){
    Nombre = prompt('Ingrese el nombre');
    Apellido = prompt('Ingrese el apellido');
    FechaNac = prompt('Ingrese la fecha de nacimiento');
    Tel = prompt('Ingrese el telefono');
    Email = prompt('Ingrse su correo');
    personas.push({Nombre, Apellido, FechaNac, Tel, Email});
}

function Buscar(){
    if(personas.length == 0){
        console.log('Aun no ha ingresado personas')
        return 0;
    }
    let flag = false;
    let p;
     var n = prompt('Ingrese la persona a buscar');
    for(let i of personas){
        if(n == i.Nombre){
            if(flag){
                console.log('O tambien puede ser esta')
            }
            else {
                console.log('La persona que ha estado buscando es esta')
            }
            console.log(i);
            flag = true;
            p = i;
        }
    }
    if (!flag){
        console.log('La persona que busca no se encuentra en los registros')
    }
    return p;
}

function Modificar(){
    var p = Buscar();
    console.log('Que desea modificar');
    console.log('1. Numero de telefono.');
    console.log('2. El correo electronico')
    var o = prompt('Ingrese una opcion');
    switch (o){
        case '1':
            let t = prompt('Ingrese el nuevo numero de telefono');
            personas[personas.indexOf(p)].Tel = t;
            break;
        case '2':
            let e = prompt('Ingrese el nuevo Email');
            personas[personas.indexOf(p)].Email = e;
            break;
        default:
            console.log('La opcion que ingreso no es valida');
    }
}

function Eliminar(){
    p = Buscar();
    personas.splice(personas.indexOf(p), 1);
}

function Mostrar(){
    if(personas.length == 0){
        console.log('Aun no ha ingresado personas');
        return 0;
    }
    for (let i of personas){
        console.log(i);
    }
}