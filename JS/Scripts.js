//Funcion para verificar que los campos del formulario no sean vacios
$(document).ready(function(){
	$("#formulario").submit(function () { //el nombre "formulario" tiene que ser un atributo , que sale del "form name=formulario" en el html
        var nombre = $("#nombre").val();  //almaceno el input del formulario en una variable
        var apellido = $("#apellido").val();  //almaceno el input del formulario en una variable
        var nacimiento = $("#nacimiento").val();  //almaceno el input del formulario en una variable
        var sexo = $("#sexo").val();  //almaceno el input del formulario en una variable
        var valoracion = $("#valoracion").val();  //almaceno el input del formulario en una variable

         //alert('Pusiste la palabra '+nombre);


var validar  = function(event) {
    event.preventDefault();

    // continua ejecución
}


   		if(nombre.length < 1) {
		 alert("El Nombre no puede ser un campo vacio");
		 return false;
		}
		if(apellido.length < 1) {
			alert("El apellido no puede ser un campo vacio");
			return false;
		}
		if(nacimiento.length < 1) {
			alert("La Fecha de Nacimiento no puede ser un campo vacio");
			return false;
	 	}
		if(sexo.length < 1) {
			alert("El Sexo no puede ser un campo vacio");
			return false;
		}
		if(valoracion.length < 1) {
			alert("Debe tener una valoracion del sitio para completar el formulario");
			return false;
		}
         //alert('Encuesta: Nombre:'+nombre+' -Apellido:'+apellido+' -Nacimiento:'+nacimiento+' -Valoracion:'+valoracion+' -Sexo:'+sexo);
         var aviso = window.open("", "aviso", "width=500,height=500,color:#15FF00","");
         aviso.document.write("<p style='color:#15FF00'>Gracias por Completar la Encuesta</p>");
         //timeout( aviso.close() },1000); //5 segundos son 5000 milisegundos
         setTimeout( function() {
            console.log('asd')
            aviso.close();
        } , 5000);


         //aviso.close();
         console.log('asd')
        });
});


//Funcion para Imprimir el mensaje despues de completar el formulario
function MensajeEncuesta() {
    var aviso = window.open("", "aviso", "width=500,height=500,color:#15FF00","");
    aviso.document.write("<p style='color:#15FF00'>Gracias por Completar la Encuesta</p>");
    setTimeout( function(){ aviso.close() },5000); //5 segundos son 5000 milisegundos
}

//Funcion para calcular el coste del carrito de compras
$(document).ready(function(){
	$("#carrito").click(function (e) {

     if (seccion1producto1.style.opacity ==0.5) {
	 var precio1  = $("#producto1").val();  //almaceno el input del formulario en una variable
    } else {var precio1 = 0}

    if (seccion1producto2.style.opacity ==0.5) {
     var precio2  = $("#producto2").val();  //almaceno el input del formulario en una variable
    } else {var precio2 = 0}

    if (seccion1producto3.style.opacity ==0.5) {
     var precio3  = $("#producto3").val();  //almaceno el input del formulario en una variable
    } else {var precio3 = 0}

    if (seccion1producto4.style.opacity ==0.5) {
     var precio4  = $("#producto4").val();  //almaceno el input del formulario en una variable
    } else {var precio4 = 0}

     var total = parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3) + parseFloat(precio4);
     $("#total").val(total); //retorno el valor de la suma en el input del formulario
  	});
});

//Funcion para establecer la transparencia y/o seleccionar un elemento del carrito de compras
function SeleccionarProducto(seccionproducto,seleccion) { //deja la transparencia a un %50 , osea selecciona un producto
   seccionproducto.style.opacity="0.5";
}

//Funcion para establecer la transparencia y/o deseleccionar un elemento del carrito de compras
function BorrarProducto(seccionproducto,seleccion) { //deja la transparencia al %100 , quito un producto
    seccionproducto.style.opacity="1";
}

//Funcion que verificar si solo se admite letras en el formulario , el funcionamiento del codigo no nos va a permitir ingresar caracteres especiales
function soloLetras(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toLowerCase();
 letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
 especiales = "8-37-39-46";
 tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
         tecla_especial = true;
         break;
         }
    }
    if(letras.indexOf(tecla)==-1 && !tecla_especial){
     return false;
    }
}

//Funcion que Oculta las descripciones de una seccion
function Ocultar() {
$("p").toggle();
}


//JSON --> J.S.O.N = Java.Script.Object.Notation (PARA PATU QUE LO APRENDIO EN DISEÑO)
function jasonvoorhees() {
 ////////////////////////////////////////////////////////////////
 //De aca para abajo es la parte donde cargamos el JSON VOORHEES QUE SI SE CARGO BIEN APARECE EN VIERNES 13 PARTE 10
 ////////////////////////////////////////////////////////////////
 var jason = '{"productos":['
 +'{"marca":"Samsung","modelo":"Galaxy S9","foto":"Imagenes/SamsungGalaxyS9.jpg","precio":"23500","descripcion":"El Galaxy S9 cuenta con una pantalla de 5.8 pulgadas a 1440 x 2960 pixels de resolución, procesador Snapdragon 845 o Exynos 9810, 4GB de RAM, 64GB de almacenamiento, cámara principal de 12 MP, cámara frontal de 8 MP, batería de 3000 mAh y Android 8.0 Oreo."},'
 +'{"marca":"Apple","modelo":"Iphone X","foto":"Imagenes/IphoneX.jpg","precio":"26000","descripcion":"El nuevo Iphone X cuenta con una Pantalla 5.8 pulgadas con una resolucion de 1125 x 2436 pixels , un procesador Apple A11 Bionic , 3GB de Memoria RAM , 64GB/256GB de almacenamiento, sin microSD , una Cámara: 12 MP, Dual , Batería: 2700 mAh y Sistema Operativo iOS 11."},'
 +'{"marca":"Xiaomi","modelo":"Redmi Note 5 Pro","foto":"Imagenes/XiaomiRedmiNote5Pro.jpg","precio":"9000","descripcion":"El Xiaomi Redmi Note 5 Pro cuenta con 4 GB de memoria RAM y 64 GB para almacenamiento de apps, vídeos, fotos y datos en general. Completando sus características técnicas, en sus tripas encontraremos un procesador Qualcomm Snapdragon 636 de 8 núcleos a 1,8 GHz de velocidad"},'
 +'{"marca":"Motorola","modelo":"Moto Z3","foto":"Imagenes/MotorolaMotoZForce3.jpg","precio":"18500","descripcion":"La pantalla del Motorola Moto Z3 se extiende hasta las 6.01,,posee un panel tipo Super AMOLED y ofrece una resolución máxima de 2.160 x 1.080 píxeles , ademas El procesador integrado en el interior de este Motorola Moto Z3 se trata del Qualcomm Snapdragon 835 octa core hasta 2.35 GHz y una GPU Adreno 540."}  ]}';

 //De esta linea para abajo viene la parte de mostrar los datos
 ////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////
 obj = JSON.parse(jason); //almacenamos el JSON en un Objeto
 var i=0; //Contador del While
 var j=0; //contador para los id (arrancan en 1 y el while en 0 es por eso que necesitamos 2 , siendo este 1 unidad mayor al otro)
 var cantidadproductos=4; //Esta variable contiene el limite de los productos que hay en una seccion es decir si hay 5 productos , que la variable valga 5 ok?
 //////////////////////////////////////////////
    while (i<cantidadproductos) { //Arranca el tipico While para poder recorrer todo el Json
     //////////////////////////////////////////////
     j=i+1; //incrementamos para iniciar el ID en 1 , osea el prodcuto 1! de cantidadproductos=valor que sea!
     var productonombre= "producto"+j+"nombre"; //almacenamos cada productoinombre que depende del indice
     var productodescripcion= "producto"+j+"descripcion"; //almacenamos cada productoidescripcion que depende del indice
     var productofoto= "producto"+j+"foto"; //almacenamos cada productoifoto que depende del indice
     var productoprecio= "producto"+j+"precio"; //almacenamos cada productoifoto que depende del indice
     //////////////////////////////////////////////
     //Luego de aca se imprimen los datos del JSON
     //////////////////////////////////////////////
     document.getElementById(productonombre).innerHTML = obj.productos[i].marca + " " + obj.productos[i].modelo; //se muestra cada elemento
     document.getElementById(productodescripcion).innerHTML = obj.productos[i].descripcion; //se muestra cada elemento
     document.getElementById(productofoto).src = obj.productos[i].foto; //se muestra cada elemento
     document.getElementById(productoprecio).innerHTML = "$"+obj.productos[i].precio; //se muestra cada elemento
     //////////////////////////////////////////////
     i=i+1; //tenemos que incrementar el valor de I para pasar de posicion dentro del JSON
    }
//recordar que si quiero llamar a esta funcion al cargar la pagina debemos poner la siguiente linea en la etiqueta body onload="jasonvoorhees()"
}

//Funcion de Contacto de la Empresa
function ContactoEmpresa() {
 var contactonombre="Movilence"; //almaceno datos random en una variable para despues asignarlos al ID correspondiente
 var contactotelefono="2215432190"; //almaceno datos random en una variable para despues asignarlos al ID correspondiente
 var contactomail="TP3Moviles@frlp.utn.edu.ar"; //almaceno datos random en una variable para despues asignarlos al ID correspondiente
 var contactofax="0998 455879"; //almaceno datos random en una variable para despues asignarlos al ID correspondiente
 $("#contactonombre").val(contactonombre);
 $("#contactotelefono").val(contactotelefono);
 $("#contactomail").val(contactomail);
 $("#contactofax").val(contactofax);
}

//Funciones JS de la Api de Google Geolocation para obtener y mostrar la ubicacion actual
var errormapa = document.getElementById("UbicacionPosibleAvisoDeError");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}
//Funcion JS que imprime por pantalla la imagen con la localizacion
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=800x300&key=AIzaSyCWhC5P8lOGlHPw9FkmmDH8XbE-IFZNe_s";
//AIzaSyCWhC5P8lOGlHPw9FkmmDH8XbE-IFZNe_s Carlos
//AIzaSyC4NtMuDvW7x1Sep_AFygaY7GkZLunqPFM Alan
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    //https://developers.google.com/maps/documentation/embed/get-api-key --> Saca una KEY QUE SE VENCIO LA QUE TENIA [°_°]
}

//Funcion JS que mmuestra si ocurre algun error
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errormapa.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            errormapa.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            errormapa.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            errormapa.innerHTML = "An unknown error occurred."
            break;
    }
}
//Revisar si se puede hacer mejor con el Iframe queda mas lindo


//Funcion JS para recibir el JSON por el Metodo GET
$(document).on('ready',function() {
 var pet =$('#MetodoGet form').attr('action');
 var met =$('#MetodoGet form').attr('method');
 $('#MetodoGet form').on('submit',function(e) {
 e.preventDefault();
 var info=$('#MetodoGet form').serialize();
 alert("Carga del Json Exitosa , en breve mostrando resultados")
 $.getJSON('JSON.php',info,function(resp){$.each(resp, function(i, field){$("#statusget").append("<tr><td>"+field+"</td></tr>");});})})
 //$(selector).getJSON(url,data,success(data,status,xhr)) --> Linea para Obtener el JSON
 //$.each(resp,function(i, field){$("#statusget").append(field + "<br>");}) --> Usamos la funcion .each para recorrer el JSON
})

//Funcion JS para recibir el JSON por el Metodo POST
$(document).on('ready',function() {
 var pet =$('#MetodoPost form').attr('action');
 var met =$('#MetodoPost form').attr('method');
 $('#MetodoPost form').on('submit',function(e) {
 e.preventDefault();
 var info=$('#MetodoPost form').serialize();
 alert("Carga del Json Exitosa , en breve mostrando resultados")
 $.getJSON('JSON.php',info,function(resp){$.each(resp, function(i, field){$("#statuspost").append("<tr><td>"+field+"</td></tr>");});})})
 //$(selector).getJSON(url,data,success(data,status,xhr)) --> Linea para Obtener el JSON
 //$.each(resp,function(i, field){$("#statuspost").append(field + "<br>");}) --> Usamos la funcion .each para recorrer el JSON
})
