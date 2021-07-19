window.addEventListener("load", event =>{
  event.preventDefault();
  let  formularioGastos = document.getElementById("form");
    formularioGastos.addEventListener('submit', event => {
      event.preventDefault();
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
        alertaFormulario();
        
     };
    
  gurdarDatos(listadosDeGastos);
  
  

  });
  });

window.addEventListener("load", (event) =>{
  event.preventDefault();
 let datos =JSON.parse(localStorage.getItem("gastos"));
 
 renderizarGastos = document.getElementById("listado-gastos");
 renderizarGastos.innerHTML = "";
 if (datos ===null){
   alertasGastos()
 }else{
  datos.forEach(element =>{
  renderizarGastos.innerHTML = renderizarGastos.innerHTML+= 
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title title">Tarjeta de Gastos</h5>
    <p class="card-text parrafo">${element.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <p><span>Categoria:</span> ${element.categoria}</span>
    <p><span> Fecha :</span>${element.fecha}</p>
  </ul>
  <div class="card-body p-2">
  <span>Monto:</span>
  <span>${element.monto}</span>
  <span>${element.moneda}</span>
  
  </div>
</div>
` 

}) 
 }

   
 });

