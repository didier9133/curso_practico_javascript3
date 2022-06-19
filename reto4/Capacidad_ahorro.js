

function capacidad_ahorro(){
    
    const ingresos=document.getElementById("ingresos").value;
    const egresos=document.getElementById("egresos").value;
    const ahorro_deseado=document.getElementById("ahorro").value
    const ingreso_neto=ingresos-egresos;
    const porcentaje_ahorro= (1-(egresos/ingresos))*100;
    const tiempo=(ahorro_deseado/ingreso_neto)/12;
    
    const años=parseInt(tiempo);
    const meses=parseInt((tiempo-años)*10);
    const dias=parseInt(((tiempo.toFixed(2)-años)-(meses/10))*100);

    const resultado=document.getElementById("resultado");
    resultado.innerHTML= "el tiempo estimado es de "+ años +" año "+  meses +" meses "+ dias +" dias" +"<br>" + "y tu porcentaje de ingresos disponibles es del  "+porcentaje_ahorro+"%"; 
    

}