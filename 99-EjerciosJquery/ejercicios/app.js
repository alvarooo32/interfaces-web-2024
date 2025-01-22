$(function(){
    $(".item").eq(0).text("Hola paco"); //cambiar texto del primer elemento
    $(".producto").css("background-color","blue");//cambiar el color de fondo del los elemento con clase producto
    $("div:first").text("Soy tu padre");//cambiar el texto del primero div
    $("#titulo").css("color","red");//cambiar el color de la letra del id elemento titulo
    $("p").css("font-size","18px");//cambiar el tamaño de la letra de los elementos p
    $("#lista").append("<li>Último elemento añadido con Jquery</li>");//añadir un elemento al final de la lista
    console.log($("#descripcion").text());//mostrar el texto del elemento con id descripcion;
    $(".carta").css("border","1px solid green");//añadir un borde verde a los elementos con clase carta
    $(".eliminar").remove();//eliminar los elementos con la clase eliminar
    $("#contenedor span").css("background-color","grey");//cambiar el color de fondo de los elementos span que contiene el div
    //Funciones DOM
    $(".foto").hide();//ocultar las imagenes con la clase foto
    $(".foto").show();//mostrar las imagenes con la clase foto
    $("div h1").css("border","1px solid red");//añadir un border rojo a los h1 que estan dentro de un div
    $("input").val("texto por defecto");//añadir un texto por defecto a los input
    $("div").eq(1).css("background-color","yellow");//cambiar el color de fonde del segundo div
    $("nav a").addClass("activo");//añadir la clase activo a los elementos a que estan dentro 
    $("body").prepend("<p>Bienvenido</p>");//añadir un parrafo al principio del body
    $("#imagen").attr("src","nuevo-src.jpg");//cambiar la ruta de la imagen
    $(".productos").attr("data-id","1");//añadir un atributo data-id con valor 1 a los elementos con calse productos
    $("form #nombre").val("Juan Pérez");//añadir un valor al input con id nombre que esta dentro de un form
    $("title").remove();//eliminar el titulo de la pagina
    $("head").append("<title>Titulo nuevo cambiado</title>");//añadir un nuevo titulo a la pagina




});