/* 
Ejercicio 1: Cambiar el texto de un elemento
Descripción: Al hacer clic en el botón, cambia el texto del elemento con el id #textoAModificar por "¡Texto actualizado!".

*/
$("#cambiarTexto").click(function(){
    $("#textoAModificar").text("Texto Actualizado");
});


/*
Ejercicio 2: Modificar un atributo

Descripción: Al hacer clic en el botón, cambia el atributo src de la imagen con el id #imagen por una nueva URL de imagen.
*/
$("#cambiarImagen").click(function(){
    $("div:eq(2) img").attr("src","./equipo2.jpg");
})

/*
Ejercicio 3: Añadir un nuevo elemento a una lista

Descripción: Cuando se haga clic en el botón, agrega un nuevo elemento <li> con el texto "Nuevo Elemento" a la lista #miLista.
*/
$("#agregarElementoLista").click(function(){
    $("#miLista").append("<li>Nuevo Elemento</li>");
})

/*
Ejercicio 4: Cambiar el valor de un input

Descripción: Al hacer clic en el botón, cambia el valor del input con id #miInput a "Nuevo valor de input".
*/
$("#cambiarValorInput").click(function(){
    $("#miInput").val("Nuevo valor del Input");
});
/*
Ejercicio 5: Agregar un estilo CSS

Descripción: Cuando se haga clic en el botón, agrega el estilo color: red al texto contenido en el elemento con el id #textoEstilo.
Ejercicio 6: Eliminar un elemento del DOM

Descripción: Al hacer clic en el botón, elimina el primer elemento <li> de la lista #miLista.
Ejercicio 7: Modificar la clase de un elemento

Descripción: Cuando se haga clic en el botón, cambia la clase del div con id #divClase a nuevaClase.
Ejercicio 8: Seleccionar y modificar varios elementos

Descripción: Al hacer clic en el botón, cambia el texto de todos los elementos <li> dentro de la lista con id #miLista a "Elemento modificado".
Ejercicio 9: Añadir y quitar clases

Descripción: Cuando se haga clic en el botón, alterna la clase resaltado en el div con id #divAlternarClase.
Ejercicio 10: Obtener y mostrar el valor de un atributo

Descripción: Al hacer clic en el botón, muestra el valor del atributo href del enlace con id #miEnlace en un área de texto.
*/