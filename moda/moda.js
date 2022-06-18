const lista1=[
    1,
    2,
    3,
    3,
    4,
    2,
    1,
    3,
    2,
    2

];

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

