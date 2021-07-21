window.addEventListener('load',event =>{
    
let categoria = document.getElementById("formCategoria");

categoria.addEventListener('submit',event=>{
    event.preventDefault();
    let nuevaCat ={
        categoria : document.getElementById("categoriaNueva").value
    }  ;
    
    guardarDatos(nuevaCat);
      categoria.reset(); 

    // alert("Nueva categoria agregada");
      
});




});

