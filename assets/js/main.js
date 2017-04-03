var nombre= document.getElementById('name');
var apellido= document.getElementById('lastname');
var email= document.getElementById('input-email');
var pasword=document.getElementById('input-password');
var div=document.getElementsByClassName("input-box");
var indice = document.getElementById("form-control1");
var characterAllowed = /^[a-zA-Z]+$/;
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  function validateForm(){
    	  	if(nombre.value.length == 0 ){
    		tooltip("Ingresa tu Nombre",0);
    	}
    	else if(characterAllowed.test(nombre.value)== false){
    		//alert("Solo vamos a aceptar letras!");
        tooltip("Solo vamos a aceptar letras!",0);
    	}
    	else if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase()){
    		//alert("Tu Nombre Debe comenzar con Mayúscula");
        tooltip("Tu Nombre Debe comenzar con Mayúscula",0);
    	}

    	if(apellido.value.length == 0 ){
    		//alert("Ingresa tu apellido")
        tooltip("Ingresa tu Apellido",1);
    	}
    	else if(characterAllowed.test(apellido.value)== false){
    		//alert("Solo vamos a aceptar letras!");
        tooltip("Solo vamos a aceptar letras!",1);
    	}
    	else if(apellido.value.charAt(0) != apellido.value.charAt(0).toUpperCase()){
    		//alert("Tu apellido Debe comenzar con Mayúscula");
        tooltip("Tu apellido Debe comenzar con Mayúscula",1);
    	}

    	if((email.value=="")||(emailRegex.test(email.value)==false)){
    		//alert("Ingrese un email valido");
        tooltip("Ingrese un email valido",2);
    	};

    	if((pasword.value=="")||(pasword.value.length>=7)||( pasword.value=="password")||(pasword.value=="123456")||(pasword.value=="098754")){
    		//alert("Ingreso correctamente su contraseña");
        tooltip("Ingreso correctamente su contraseña",3);
      } else {
      removetooltip(3);
      }

    if( indice.selectedIndex == null || indice.selectedIndex == 0 ) {
      //alert("Seleccione una opcion");
      tooltip("Seleccione una opcion",4);
    }else {
      removetooltip(4);
    }
}

function tooltip(e,index){
  var t=document.createElement("span");
  t.setAttribute("class", "tooltiptext" );
  t.appendChild(document.createTextNode(e));
  div[index].appendChild(t);
};
function removetooltip(index){
    var delette=document.getElementsByClassName("tooltiptext")[index];
  div[index].removeChild(delette);

  }
