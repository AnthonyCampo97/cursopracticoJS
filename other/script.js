const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const form = document.querySelector("#form");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = parseInt(input1.value)  + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
  }
  
form.addEventListener('submit', sumarInputValues);
