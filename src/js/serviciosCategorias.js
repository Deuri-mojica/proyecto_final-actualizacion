/*********AQUI INICIAN LAS FUNCIONES PARA GUARDAR LAS CATEGORIAS************ */

guardarDatos = nuevaCat => {
    let listadoCat = ObtenerListadoCategoria();
    listadoCat.push(nuevaCat);
    actualizarLista(listadoCat);

};
ObtenerListadoCategoria = ()=>{
    let listadoCategoria = JSON.parse(localStorage.getItem("listadoCategoria"))

    if (listadoCategoria === null) {
        listadoCategoria = [];
        actualizarLista(listadoCategoria);
    }
    return listadoCategoria
};

actualizarLista = listadoCategoria =>{

    localStorage.setItem("listadoCategoria", JSON.stringify(listadoCategoria));
};

/************************************* */


cargarCategorias = () =>{
    //Aqui ponemos el elemento al que queremos agregar los cambios
    let selectCategorias = document.getElementById("Categorias");
    let categorias = ObtenerListadoCategoria();

    categorias.forEach(item => {
        let option = document.createElement('option');
        option.value = item.categoria;
        option.text = item.categoria;

        selectCategorias.append(option);
    });
};