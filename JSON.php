<?php
//Los datos que se reciben del Formulario se guardan en variables , y para eso usamos un ARRAY,  que posteriormente se convierte en un Objeto JSON

if ($_SERVER["REQUEST_METHOD"] == "GET") { //Si el Metodo es GET Asincronico
 $preJson = array (
     'nombre' => empty($_GET['nombre'])?'Nombre_Default':$_GET['nombre'], //si esta vacio le dejamos algo por defecto
     'apellido' => empty($_GET['apellido'])?'Apellido_Default':$_GET['apellido'], //si esta vacio le dejamos algo por defecto
     'dni' => empty($_GET['dni'])?'DNI_Default':$_GET['dni'] //si esta vacio le dejamos algo por defecto
    );
 echo json_encode($preJson);
}
 

if ($_SERVER["REQUEST_METHOD"] == "POST") { //Si el Metodo es POST Sincronico
 $preJson = array (
     'nombre' => empty($_POST['nombre'])?'Nombre Default':$_POST['nombre'], //si esta vacio le dejamos algo por defecto
     'apellido' => empty($_POST['apellido'])?'Apellido Default':$_POST['apellido'], //si esta vacio le dejamos algo por defecto
     'dni' => empty($_POST['dni'])?'DNI Default':$_POST['dni'] //si esta vacio le dejamos algo por defecto
    );
echo json_encode($preJson);
 }




 
?>