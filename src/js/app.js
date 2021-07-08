
function guardarDB(arreglo){
  let  datos = arreglo;
 let datosLocalStore = JSON.stringify(datos);
 localStorage.setItem("datosForm",datosLocalStore);
}



let formulario = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let descricion = document.getElementById("textarea").value,
    categoria = document.getElementById("select").value,
    fecha = document.getElementById("fecha").value,
    monto = document.getElementById("monto").value,
    moneda = document.getElementById("flexRadioDefault1").value
    let arrglo = [descricion,categoria,fecha,monto,moneda];

   guardarDB(arrglo);

   

   });