
//By Omnio52 - Omar Romero

//Estadísticas de calificaciones - Reto2

// Operaciones para el ejecicio se declara variable let en 0
function calcularMetricasBase(notas) {
  let suma = 0;
  let max = notas[0];
  let min = notas[0];


  //recorrer el arreglo de cada nota
  for (let nota of notas) {
    suma += nota;

    if (nota > max) max = nota;
    if (nota < min) min = nota;
  }
//devuelve resultado de suma, max y min
  return {
    suma,
    max,
    min
  };
}

// Cuenta cuántas notas están sobre o igual al promedio
function contarSobrePromedio(notas, promedio) {
  let contador = 0;

  for (let nota of notas) {
    if (nota >= promedio) contador++;
  }

  return contador;
}


function generarEstadisticas(notas) {
  if (!notas || notas.length === 0) {
    throw new Error("El arreglo de calificaciones no puede estar vacío.");
  }

  const { suma, max, min } = calcularMetricasBase(notas);

  const promedio = suma / notas.length;
  const sobrePromedio = contarSobrePromedio(notas, promedio);

  return {
    total: notas.length, //length: cuenta cuantos elementos tiene el array
    promedio,
    maxima: max,
    minima: min,
    sobrePromedio
  };
}

//Mostrar resultado de operacion

function mostrarEstadisticas(estadisticas) {
  console.log("-------ESTADÍSTICAS DE CALIFICACIONES-------");
  console.log(`Total de calificaciones: ${estadisticas.total}`);
  console.log(`Promedio: ${estadisticas.promedio.toFixed(2)}`);
  console.log(`Calificación más alta: ${estadisticas.maxima}`);
  console.log(`Calificación más baja: ${estadisticas.minima}`);
  console.log(`Calificaciones sobre el promedio: ${estadisticas.sobrePromedio}`);
  console.log("--------------------------------------------");
}

// MAIN -  Array con definicion de Datos Datos
const calificaciones = [5, 3, 4, 2, 5, 1, 4];

//realiza llamado de Generacion Estadisticas y muestra resultado
const resultado = generarEstadisticas(calificaciones);
mostrarEstadisticas(resultado);
