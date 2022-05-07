/*
aritmeticos
logicos
relacionales

asignacion

*/

//aritmeticos +,-,*,/,%,++,--

let a = 10;
let b = 20;
console.log(a,b);
let c = a + b;
console.log(c)
let d = a - b;
console.log(b)

let div = a / b;
console.log(div, '/')

let multi = a * b;
console.log(multi, '*')

// % resto sirve para saber impar o par

let anio = 2022;

let resto = anio % 2

console.log(resto);

//incremento ++
let valor = 0;
valor = valor + 1;
console.log(valor, 'valor');
valor++;
console.log(valor,'valor');

//restar uno a valor
valor = valor - 1;
console.log(valor, 'valor');
valor--;
console.log(valor,'valor');

/*OPERADORES LOGICOS*/
//AND && OR || NOT !

let username = 'root';
let password = '1234';

let usuarioValido = (username === 'root' && password === '1234');
let usuarioValido = username === 'root' || password === '1234'

let usuarioValido = username !=='root'
let usuarioValido = !(username ==='root')

/*RELACIONALES, nos da valor booleano */
let x = 10;
let y = 20;
let xMayorY = (x > y);
console.log(x,'>',y,xMayorY);
console.log(x,'<',y,x < y);
console.log(x,'===',y,x === y);
console.log(x,'>=',y,x => y);
console.log(x,'<=',y,x <= y);

