function verificarAcceso(nombre, edad) {
    
    if (edad >= 18) {
        console.log(`Bienvenido ${nombre} ya le cabe`);
    } else {
        console.log(`Acceso denegado ${nombre} aun no eres legal`);
    }
}
verificarAcceso("Gabriel", 24); 
verificarAcceso("Maykol", 15);   