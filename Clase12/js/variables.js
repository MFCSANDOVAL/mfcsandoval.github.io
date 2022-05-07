
/*variables

let edad = 10; //tipo number
//puedo cambiar el valor de edad
console.log(edad, typeof edad); //no es un alert(), escribe en consola
console.log(typeof edad)
edad = 20;
console.log(edad);

/*imprimir variable numerica que no se modifique
console.log(typeof edad) //ver tipo
const altura = 174.5;
console.log(altura, typeof altura);
//altura =  200;
//console.log(altura);

var nombre = 'carlos';//define variale de manera global

//tipo de dato string

let apellido = 'perez';

console.log(nombre, typeof nombre, apellido, typeof apellido);
//operador typeof

const flag = true;
const iguales = false;

console.log(flag,  typeof flag);

//arrays de string

const nombres = []; //array de string vacios

const materias = ['lengua', 'ingles','etc']

//nombreVaraibale[pos] = valor

let materia = materias[0];

console.error(materia);

//reasignar en la variable materia el valor de materias en posicion 1

console.info(materias[1]);

//crear objeto
//quiero crear objeto persona

let persona = {
   edad: 36,
   argentina: true,
   nombre: 'carlos',
   apellido: 'lopez',
   idiomas: ['español','ingles']
};

console.log(persona,typeof persona);

//undefined

let perro = undefined;
//perro.apodo = 100;

perro = {
    apodo: 'firulais'
}
console.log(perro,typeof perro);
perro = {
    apodo: 'perrito',
    edad: 100,
}
console.log(perro,typeof perro);

let gato = null;
gato = {edad: 100};
console.log(gato, typeof gato);

/*los tipos de datos tiene funciones o metodo */

let nacionalidad = '   argentina   ';

//al ser string puedo ejecutar cierto metodos o funciones
console.log(nacionalidad);
nacionalidad = nacionalidad.trim() //saca espacios
console.log(nacionalidad);

nacionalidad = nacionalidad.toUpperCase();
console.log(nacionalidad);

nacionalidad = nacionalidad.toLocaleLowerCase();
console.log(nacionalidad);

//cantidad caracteres

console.log(nacionalidad.length);

//ejemplo de number y sus metodos
let valorNumericoGuardadoEnString = '100';

//sumarle 1
//valorNumericoGuardadoEnString = parseInt(valorNumericoGuardadoEnString) + 1;
//valorNumericoGuardadoEnString = +valorNumericoGuardadoEnString + 1;

valorNumericoGuardadoEnString = Number(valorNumericoGuardadoEnString) + 1;
console.log(valorNumericoGuardadoEnString)

//NaN se da cuando quiero convertir a numero un texto no numerico

console.log(valorNumericoGuardadoEnString);

let valorFlotanteEnString = '175.5';
console.log(parseInt(valorFlotanteEnString))
console.log(parseFloat(valorFlotanteEnString))
console.log(Number(valorFlotanteEnString))
