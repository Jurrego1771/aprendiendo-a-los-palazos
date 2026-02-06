function autorizacion(edad,nombre){
  let result;
  if(edad>=18){
    result= 'Bienvenido ';
    console.log(result+nombre);
  }else{
    result= 'Acceso denegado '
    console.log(result+nombre);
  }
}

autorizacion(23,'Julio')