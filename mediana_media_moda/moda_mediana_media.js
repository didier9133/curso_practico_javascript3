
function calcular_moda(){
    
    const valor_array=document.getElementById("lista").value;
    let lista1=Array.from(valor_array.split(","), Number);
    
    const lista_count={}; //lista_count={} indica que es un objeto.

        // .map recorre un array recibe una funcion y como argumento (elemento) va a guardar
        // en una nueva array o en este caso un objeto que se llamara lista_count, con el if
        //si el elemento ya se encuentra en el objeto va a sumar 1 y si no cae en el else y crea
        //un nuevo elemento en el objeto con un valor igual a 1 lista_count[elemento]=1
        //esto se hizo para que contara cada elemento del array lista1 cuantas veces estaba.

    lista1.map(
        function(elemento){
            if (lista_count[elemento]){
                    
                lista_count[elemento]+= 1;
                
            }else{
                
                lista_count[elemento]=1;
            }    
        }
    )
    
    //debemos tranformar el objeto a un array de nuevo para eso se utiliza el object.entries(objeto a transformar)
    //para aplicar sort(solo se aplica en arrays)  

    const array_ordenado=Object.entries (lista_count).sort(function(a,b){

        return a[1]-b[1];
    })

    const moda=array_ordenado[array_ordenado.length - 1];

    const resultado=document.getElementById("resultado");
    resultado.innerHTML="la moda es: "+moda[0];


}

function calcular_media_original(array){
    
        const sumatoria=array.reduce(function (valoracumulado=0, valorinicial){
            return valoracumulado + valorinicial;
            
        })
        
        var media=sumatoria/array.length
        return media;
        

}



function calcular_media(){
    
    const valor_array=document.getElementById("lista").value;
    let lista1=Array.from(valor_array.split(","), Number);

    const sumatoria=lista1.reduce(function (valoracumulado=0,valorinicial){
        return valoracumulado + valorinicial;
        
    })
    
    var media=sumatoria/lista1.length

    const resultado=document.getElementById("resultado");
    resultado.innerHTML="la media es: "+media;
    
    
};

function calcular_mediana(){
    
    const valor_array=document.getElementById("lista").value;
    let lista1=Array.from(valor_array.split(","), Number);
    
    var mitad=parseInt(lista1.length/2);

    if (lista1.length % 2===0){
        var elemento1=lista1[mitad-1];
        var elemento2=lista1[mitad];
        var media_lista=calcular_media_original([elemento1,elemento2]);
        const resultado=document.getElementById("resultado");
        resultado.innerHTML="la mediana es: "+media_lista;

    }else{
        var mediana= lista1[mitad];
        const resultado=document.getElementById("resultado");
        resultado.innerHTML="la mediana es: "+mediana;
        
    }
}
