
var factor_de_coonversion_dolares_bolivares=6;
var factor_de_coonversion_dolares_pesos=3750;
var factor_de_coonversion_bolivares_pesos=factor_de_coonversion_dolares_pesos/factor_de_coonversion_dolares_bolivares;
var factor_de_coonversion_bolivares_dolares=1/factor_de_coonversion_dolares_bolivares;
var factor_de_coonversion_pesos_bolivares=1/factor_de_coonversion_bolivares_pesos;
var factor_de_coonversion_pesos_dolares=1/factor_de_coonversion_dolares_pesos;

function transformar_bolivares_pesos(){
    
    const cantidad=document.getElementById("monto_ingresado").value;
    var bolivares=parseInt(cantidad*factor_de_coonversion_dolares_bolivares);
    var pesos=parseInt(cantidad*factor_de_coonversion_dolares_pesos);
    
    const resultado=document.getElementById("resultado");
    resultado.innerHTML="el monto equivalente en pesos es: "+ pesos +"<br>"+ "el monto equivalente en bolivares es: "+  bolivares;
}

function transformar_pesos_dolares(){
    
    const cantidad=document.getElementById("monto_ingresado").value;
    var pesos=parseInt(cantidad*factor_de_coonversion_bolivares_pesos);
    var dolares=parseInt(cantidad*factor_de_coonversion_bolivares_dolares);
    
    const resultado=document.getElementById("resultado");
    resultado.innerHTML="el monto equivalente en pesos es: "+ pesos+ "<br>" + "el monto equivalente en dolares es: "+  dolares;
    
}

function transformar_bolivares_dolares(){
    
    const cantidad=document.getElementById("monto_ingresado").value;
    var bolivares=parseInt(cantidad*factor_de_coonversion_pesos_bolivares);
    var dolares=cantidad*(factor_de_coonversion_pesos_dolares);
    
    const resultado=document.getElementById("resultado");
    resultado.innerHTML= "el monto equivalente en bolivares es: "+ bolivares+ "<br>" + "el monto equivalente en dolares es: "+  dolares
    
}
