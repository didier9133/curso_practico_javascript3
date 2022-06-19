//La media geométrica se calcula como un producto conjunto. 
//Es decir, que todos los valores se multiplican entre sí.
//Uno de sus principales usos es para calcular medias sobre porcentajes, 
//pues su cálculo ofrece unos resultados más adaptados a la realidad


function calculando_media_geometrica(array){
    
    array.sort(function(a,b){
        return a -b
    })
    
    const sumalista=array.reduce(

        function (valor_acumulado,nuevo_elemento){
            return valor_acumulado * nuevo_elemento;
        }
    );
    
    const media_geometrica = (sumalista)**1/array.length;
    
    
    return media_geometrica;
}


const lista=[
    1.20,
    1.33,
    1.15,
    1.25,
    
]


// la media armónica es una medida estadística recíproca a la media aritmética, 
//que es la suma de un conjunto de valores entre el número de observaciones.
//Este tipo de media suele utilizarse, principalmente, en velocidades, tiempos, o en el área de la electrónica.
// Sin embargo, su uso no está muy extendido en otras disciplinas.



const lista_original=[
    15,
    14,
    17,
    13,
    12
    
];


function array_invertido(elemento){
    return 1/elemento
}

const nueva_lista=lista_original.map(array_invertido);

function calculando_media_armonica(array){
    
    array.sort(function(a,b){return a -b})
    
    const sumalista=array.reduce(

        function (valor_acumulado=0,nuevo_elemento){
            return valor_acumulado + nuevo_elemento;
        }
    );
    
    const media_armonica=array.length/sumalista;

    return media_armonica;
}




