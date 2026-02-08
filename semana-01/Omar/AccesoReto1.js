
//By Omnio52 - Omar Romero

// Función validar de acceso

function validarAcceso(nombre, edad) {
  
  console.log("Nombre recibido:", nombre);
  console.log("Edad recibida:", edad);
  
// se agrega validar que nombre sea tipo string y maximo 20 caracteres, Edad tipo Int. si no se cumple aparece mensaje por consola

  const nombreValido = typeof nombre === 'string' && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
  console.log("¿Nombre válido?", nombreValido);
  
  const longitudValida = nombre.length <= 20;
  console.log("¿Longitud válida?", longitudValida);
  
  const edadValida = Number.isInteger(edad) && edad >= 0;
  console.log("¿Edad válida?", edadValida);
  
  // Operador ternario

  !nombreValido ? console.log("Error: El nombre solo debe contener caracteres") :
  !longitudValida ? console.log("Error: El nombre no puede exceder 20 caracteres") :
  !edadValida ? console.log("Error: La edad solo debe contener números naturales") :
  edad >= 18 ? console.log(`Bienvenido ${nombre}`) :
  console.log("Acceso denegado");
  
  
}

// Prueba
validarAcceso("Ana1234", 25);