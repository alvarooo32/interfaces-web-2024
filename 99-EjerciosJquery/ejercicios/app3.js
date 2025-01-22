/* Ejercicio 1: Cambiar el color de fondo

Descripción: Al hacer clic en el botón, cambia
 el color de fondo de la página a un color aleatorio. */
$("#cambiarColor").click(function(){
    let colores= ["red","blue","yellow","green","orange","white"];
    let color = colores[Math.floor(Math.random()*colores.length)];
    $("body").css('background-color',color);
});

/* Ejercicio 2: Mostrar/Ocultar un texto

Descripción: Al hacer clic en el botón,
muestra u oculta el texto dentro de un <div>. */
$("#toggleTexto").click(function(){
    $("#texto").toggle();
});

/* Ejercicio 3: Agregar un elemento al DOM

Descripción: Cuando se haga clic en el botón, agrega un nuevo 
párrafo con el texto "¡Nuevo párrafo agregado!" debajo de los ejercicios. */
$("#agregarElemento").click(function(){
   // $(this).before("<p>Nuevo parrafo agregado</p>");
   //$("body").append("<p>Nuevo parrafo agregado</p>");
});

/* Ejercicio 4: Contar elementos en una lista

Descripción: Contar cuántos elementos <li> hay 
en una lista y mostrar el resultado en un área de texto. */
$("#contarElementos").click(function(){
    let cantidad = $("#miLista li").length;
    $("#resultado").text(cantidad);
});

/* Ejercicio 5: Efecto de desvanecimiento

Descripción: Al hacer clic en el botón,
haz que el texto se desvanezca hacia dentro y hacia fuera. */
$("#fadeToggle").click(function(){
    $("#desvanecer").fadeToggle();
});

/* Ejercicio 6: Agregar clases

Descripción: Al hacer clic en el botón, 
agrega la clase "resaltado" al texto dentro de un <div>. */
$("#agregarClase").click(function(){
    $("#textoResaltado").addClass("resaltado");
});