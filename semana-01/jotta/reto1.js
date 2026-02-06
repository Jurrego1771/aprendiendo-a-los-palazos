function validarAcceso(nombre, edad) {
    if (edad >= 18) {
        console.log("Bienvenido " + nombre + " :P ");
    } else {
        console.log("Acceso Denegado X ");
    }
}

validarAcceso("Jotta", 31);
