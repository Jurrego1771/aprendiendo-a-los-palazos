let calificaciones = [8,7,8,9,8,7,6,8,9,8,8,8,9,9]

function obtenerPromedio(notas: number[]): number {
    if (notas.length===0){
        throw new Error ("No hay ninguna calificacion")
    }
    let suma = 0
for (const n of notas) {
    suma = suma + n;
}
    return suma / notas.length;
}

function calificacionMayor (notas:number[]):number{
    if (notas.length===0) {
        throw new Error ("No hay ninguna calificacion")
    }
    let max = notas[0];
    for (const n of notas) {
        if (n>max) {
            max=n;
        }
    }
    return max
};

function calificacionMenor (notas:number[]):number{
    if (notas.length===0) {
        throw new Error ("No hay ninguna calificacion")
    }
    let min = notas[0];
    for (const n of notas) {
        if (n<min) {
            min=n;
        }
    }
    return min
};

function calificacionesSobrepromedio (notas:number[],promedio:number):number{
    if (notas.length===0 || isNaN(promedio) ) {
        throw new Error ("Error en el promedio o en las calidfcaciones")
    }

    let contador = 0

    for (const n of notas) {
        if (n>=promedio){
            contador = contador + 1

        }
        
    }
    return contador
}
function main() {
  try {
    const promedio = obtenerPromedio(calificaciones);
    const maxima = calificacionMayor(calificaciones);
    const minima = calificacionMenor(calificaciones);
    const sobrePromedio = calificacionesSobrepromedio(calificaciones, promedio);

    console.log("calificaciones");
    console.log("---------------------------");
    console.log("Promedio:", promedio.toFixed(2));
    console.log("Máxima:", maxima);
    console.log("Mínima:", minima);
    console.log("Por encima o igual al promedio:", sobrePromedio);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();