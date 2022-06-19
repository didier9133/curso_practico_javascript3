const salarios_tomados=sueldos_Venezuela.map(function(elemento){
    return elemento.salario
});

const salarios_tomados_ordenados=salarios_tomados.sort(function(a,b){
    return a-b;
})



function calcular_media(array){
    
    const sumatoria=array.reduce(function (valoracumulado=0,valorinicial){
        return valoracumulado + valorinicial;
        
    })
    
    var media=sumatoria/array.length
    return media;
    console.log(media);
};

function mediana_salarios(lista){
    
    var mitad=parseInt(lista.length/2);

    if (lista.length % 2===0){
        var elemento1=lista[mitad-1];
        var elemento2=lista[mitad];
        var media=calcular_media([elemento1,elemento2]);
        return media;

    }else{
        var mediana= lista[mitad];
        return mediana;
        
    }
}


const mediana_general_vene=mediana_salarios(salarios_tomados_ordenados) 

//queremos el 10% de la lista

const splice_star=salarios_tomados_ordenados.length*(1-0.30);
const splice_end=salarios_tomados_ordenados.length-splice_star;


const salarios_top_10_vene=salarios_tomados_ordenados.splice(splice_star,splice_end);

const mediana_salarios_top_10_vene=mediana_salarios(salarios_top_10_vene);

console.log(
    mediana_general_vene,
    mediana_salarios_top_10_vene
    
);
