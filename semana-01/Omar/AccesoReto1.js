
//By Omnio52 - Omar Romero

// Función validar de acceso

function validarAcceso(nombre, edad) {
  //se agrega validar que nombre sea tipo string y maximo 20 caracteres, Edad tipo Int. si no se cumple aparece mensaje por consola
  // validación con un return
  typeof nombre !== 'string' || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) ? 
    (console.log("Error: El nombre solo debe contener caracteres"), undefined) : 
  nombre.length > 20 ? 
    (console.log("Error: El nombre no puede exceder 20 caracteres"), undefined) : 
  !Number.isInteger(edad) || edad < 0 ? 
    (console.log("Error: La edad solo debe contener números"), undefined) : 
  edad >= 18 ? 
    console.log(`Bienvenido ${nombre}, tienes ${edad} años`) : 
    console.log("Acceso denegado");
}
// Prueba
validarAcceso("Ana maria", "25");