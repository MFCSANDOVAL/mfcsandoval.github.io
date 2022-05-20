//capturamos el evento click del boton

const btnSuma = document.getElementById('sumar');
const a = document.getElementById('a');
const b = document.getElementById('b');


//asocio al boton el evento click

btnSuma.addEventListener('click',() => {
  //tomo el valor del input a
  const valorA = a.value;
  //tomo el valor del input b //string > number

  const valorB = b.value;


  if(esValido(valorA) && esValido(valorB)){

    //invoco a la funcion sumar, pasando a y b como param

    const suma = sumar(valorA,valorB);
    actualizarResultado(suma);
  }else{
      alert('debe complerta a y b');
  });
  //convierto valorA y valorB a number
  if(valorA == '' || valorB == ''){
    alert('debe complerta a y b');
  }else{


  const suma = parseInt(valorA) + Number(valorB)
 
   //capturo el div por su id

   const div = document.getElementById('resultado');

   //actualizo el contenido del div con el valor o la variable suma

   div.innerHTML = suma;

  }
);

function sumar(a,b){
    return parseInt(a) + Number(b);
}

function esValido(valor){
    return valor !== '';
}

function actualizarResultado(suma){
    //capturo el div por su id
    const div = document.getElementById('resultado');
//actualizo el contenido del div con la variable suma
    div.innerHTML = suma;
}