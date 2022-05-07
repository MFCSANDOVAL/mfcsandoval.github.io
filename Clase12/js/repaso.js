//estructuras de iteracion

let alumnos = ['alan','pepe','arbol','auto'];

//hay 4 elementos
//alan posicion 0

let tamanio = alumnos.length;
//alert(tamanio);
console.log(tamanio);

//recorrer el array de nombres y mostrar cada uno

for(let i=0; i < tamanio; i++){
    console.log(i,alumnos[i], typeof alumnos[i]);
}

//foreach

for(let nombre of alumnos){

    console.log(nombre);
}

//while
let i = 0;
while(nombres[i] !== 'daiana'){

console.log(i,nombres[i]);
i++;//debemos incrementar el indice para recorrer

}

console.log('while 2');
i-0;//reset indice
while(i < tamanio){
    
   if(alumno[i] === 'daiana'){
       console.log(i,'daiana');
       break; //sale del while
   }
    
}


///ahora con objetos

let alumnosObj = [

    {
        edad:25,
        nombre: 'jose'
    },
    {
        edad:24,
        nombre: 'pepe'
    }
];

//for/while do while
//como detecto el menor de los alumnos???
let primero = true;
let alumnoMasChico;//aca va a kedar el mas chico
for(const alumnoObj of alumnosObj){
    if(primero){
      alumnoMasChico = alumnoObj;
      primero = false;
    }
    //si alumnoMasChico es menor alumnoObj, entonces pasa a ser el nuevo menor
    if(alumnoObj.edad < alumnoMasChico.edad){
        alumnoMasChico = alumnoObj;
    }
}
//al finalizar el ciclo for obtengo al menor
console.log('alumno mas chico',alumnoMasChico);

const vector = [1,2,3,4,5,6,7,8];
let contador = 0;
let pos = [];
for(let i = 0;i< vector.length;i++){
    if(vector[i]===3){
        contador++;
        pos.push(i);
    }
}

console.log('cantidad de 3: ',contador);
console.log('posiciones:',pos);

//filtrar los numero > a 2

for(let i of vector){
    if(i>2){
        mayoresA2.push(i);
    }
}
console.log(mayoresA2);

//FILTER

let mayoresA2ConFilter = vector.filter(num => num > 2);//que quiero
console.log(mayoresA2ConFilter);

//valores que js evalua como false
let aux = 0;
if(aux){
    console.log('false');
}

let aux2= undefined;
if(aux2){
    console.log('false');
}

let aux3 = null;
if(aux3){
    console.log('false');
}





