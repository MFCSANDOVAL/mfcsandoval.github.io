function outer(a){
    const a = 23;
    function inner(){
        console(a);
    }
    inner();
}

//invocar >> inner ? outer?

//outer > fuera por ende es a quien debo llamar primero
//iinner > esta dentro de outer, por ende es invocada por esta

//const btn = document.getElementById('btn')
document.getElementById('btn').addEventListener('click',() => {
    outer();
})

//Pasos para hacer debug
//F12 EN NAVEGADOR
//PESTAÑA SOURCE, html, css, js
//ctrl + p buscar archivo debugar
//selecciono la linea y hago click para agregar breakpoint
//f10 avanzo linea
//f11 entro en la funcion


