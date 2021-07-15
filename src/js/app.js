window.addEventListener("load", event =>{
 event.preventDefault();
  let  formularioGastos = document.getElementById("form");
    formularioGastos.addEventListener('submit', event => {
        event.preventDefault()
        let listadosDeGastos = {
        descripcion: document.getElementById("descripcion").value,
        categoria: document.getElementById("Categorias").value,
        fecha: document.getElementById("fecha").value,
        monto: document.getElementById("monto").value,
        moneda: document.getElementById("flexRadioDefault1").value
      }
 
     let  gurdarDatos  = (listadosDeGastos) => {
         gastos = listadosDeGastos;
      let  lista = JSON.parse(localStorage.getItem("gastos")) || [];
        lista.push(gastos);
        
        localStorage.setItem("gastos",JSON.stringify(lista));
        formularioGastos.reset();
        
     };
    
  gurdarDatos(listadosDeGastos);
  

  });
});