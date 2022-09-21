/*Codigo: Captura los valores de los input. los convierte en valores enteros y los suma.
por medio de un boton opera los valores y los muestra  en un parrafo.*/
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function btnOnClick() {
  const sumaInputs = parseInt(input1.value)  + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}
//el codigo se ejecuta desde una funcion invocada en el codigo HTML
//Fin codigo

