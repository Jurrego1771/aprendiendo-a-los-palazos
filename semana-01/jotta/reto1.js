function validarAcceso(nombre, edad) {
    edad >= 18 ? console.log("Bienvenido " + nombre) : console.log("Acceso denegado");
}

validarAcceso("Jotta", 31);
