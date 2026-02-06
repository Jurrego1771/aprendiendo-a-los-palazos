//Validador de acceso

let nombre = "Gabriel";
let edad = 22;

function validarAcceso(){

    if(edad >= 18){
        console.log("Bienvenido " + nombre + " acceso Correcto.");
    }else{
        console.log("Lo siento " + nombre + " sin acceso.");
    }
    
}

validarAcceso();