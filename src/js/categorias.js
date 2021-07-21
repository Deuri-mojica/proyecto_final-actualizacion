window.addEventListener('load',event =>{
    
let categoria = document.getElementById("formCategoria");

categoria.addEventListener('submit',event=>{
    event.preventDefault();
    let nuevaCat ={
        categoria : document.getElementById("categoriaNueva").value
    }  ;
    
    guardarDatos(nuevaCat);

    alert("Nueva categoria agregada");
categoria.reset();    
});




});

