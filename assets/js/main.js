var nombre= document.getElementById('name');
var apellido= document.getElementById('lastname');
var email= document.getElementById('input-email');
var pasword=document.getElementById('input-password');
var div=document.getElementsByClassName("input-box");
var indice = document.getElementById("form-control1");
var span=document.getElementById("tooltiptext");
var characterAllowed = /^[a-zA-Z]+$/;
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


  function validateForm(){
    	 if(nombre.value.length == 0 ){
         mostrar("nombre","Ingrese su nombre");
       }else {
         ocultar("nombre")
       }
    	 if(characterAllowed.test(nombre.value)== false){
    		//alert("Solo vamos a aceptar letras!");
        mostrar("nombre","Solo vamos a aceptar letras!");
      }else {
        ocultar("nombre")
      }
    	 if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase()){
    		//alert("Tu Nombre Debe comenzar con Mayúscula");
        mostrar("nombre","Tu Nombre Debe comenzar con Mayúscula");
      }else {
        ocultar("nombre")
      }
    	if(apellido.value.length == 0 ){
    		//alert("Ingresa tu apellido")
        mostrar("apellido","Ingresa tu apellido");
      }else {
        ocultar("apellido")
      }
    	if(characterAllowed.test(apellido.value)== false){
    		//alert("Solo vamos a aceptar letras!");
        mostrar("apellido","Solo vamos a aceptar letras!");
      }else {
        ocultar("apellido")
      }
    	if(apellido.value.charAt(0) != apellido.value.charAt(0).toUpperCase()){
    		//alert("Tu apellido Debe comenzar con Mayúscula");
        mostrar("apellido","Tu apellido Debe comenzar con Mayúscula");
      }else {
        ocultar("apellido")
      }

    	if((email.value=="")||(emailRegex.test(email.value)==false)){
    		//alert("Ingrese un email valido");
        mostrar("correo","Ingrese un email valido");
      }else {
        ocultar("correo")
      }

    	if((pasword.value=="")||(pasword.value.length>=7)||( pasword.value=="password")||(pasword.value=="123456")||(pasword.value=="098754")){
    		//alert("Ingreso correctamente su contraseña");
        mostrar("contra","Ingreso correctamente su contraseña");
      }else {
        ocultar("contra")
      }

    if( indice.selectedIndex == null || indice.selectedIndex == 0 ) {
      //alert("Seleccione una opcion");
      mostrar("selectvo","Seleccione una opcion");
    }else {
      ocultar("selectvo")
    }
}
function mostrar(id,message){
 var x=document.getElementById(id);
 x.innerHTML=message;
 x.style.display= "block";
}
function ocultar(id){
var x=document.getElementById(id)
x.style.display= "none";
}
