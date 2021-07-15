
function guardarDB(arreglo){
  let  datos = arreglo;
 let datosLocalStore = JSON.stringify(datos);
 localStorage.setItem("datosForm",datosLocalStore);
}


