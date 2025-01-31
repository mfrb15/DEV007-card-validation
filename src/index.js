import validator from './validator.js';
//Declarando variables. 
let creditCardNumber = "";
const botonEnviar = document.getElementById("enviar");
const sectionPadre = document.getElementById("padre");
const h1tdc = document.getElementById("h1Tdc");
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const numerodeTarjeta = document.getElementById("numerodeTarjeta");
const nombredeTarjeta = document.getElementById("nombreDeTarjeta");
const inputCvc = document.getElementById("input-cvc");
const mesTarjeta = document.getElementById("mes");
const añoTarjeta = document.getElementById("año");
const cvcTarjeta = document.getElementById("cvcTarjeta");
//aplicando una función 
botonEnviar.addEventListener("click", () => {
  //Declarando una variable dentro de una función y extrayendo su valor. (ingresado por el usuario)
  creditCardNumber = document.getElementById("input-number").value;
  // console.log(creditCardNumber); //mostrando este valor en la consola. 


  // Declarando la variable tarjeta validada para poder reversar su numero y usarlo para
  //reversarlo con el método .reverse que esta en validator.
  const cardValid = validator.isValid(creditCardNumber);

  if (inputYear.value, inputMonth.value, inputName.value, inputNumber.value === "") {
    alert("Debe rellenar todos los campos");
  }
  else {
    if (cardValid === true) {
      h1tdc.innerHTML = "Resultado de la operación";
      sectionPadre.innerHTML = `<section class="maskify">
   <div class="pagoProcesado" id="pagoAprobado">
   <img src="./images/aprobado.png" class="iconoAprobado" alt="icono de Aprobado">
   <p class="mensajeGraciasporsucompra">¡Gracias por tu compra!</p>
   <p id="input-number-maskify"></p>
   </section>`;
      const maskify = validator.maskify(creditCardNumber);
      const pCardNumber = document.getElementById("input-number-maskify");
      pCardNumber.innerHTML = "Operación validada para tu tarjeta " + maskify;
      // console.log(maskify);
    } else {
      h1tdc.innerHTML = "Resultado de la operación";
      sectionPadre.innerHTML = `<section class="maskify">
   <div class="pagoProcesado" id="pagoAprobado">
   <img src="./images/rechazado.png" class="iconoAprobado" alt="icono de Aprobado">
   <p class="mensajeGraciasporsucompra">¡Error, Tarjeta Inválida!</p>
   <p id="input-number-maskify"></p>
   </section>`;
    }

  }

}
)
// tarjeta valida
//4532314509432211

// Logica para Css
//interaccion tarjeta

inputName.addEventListener("input", () => {
  nombredeTarjeta.innerText = inputName.value;
  if (inputName.value.length === 0) {
    nombredeTarjeta.innerText = "Mafer Rodriguez";
  }
});

inputNumber.addEventListener("input", () => {
  numerodeTarjeta.innerText = inputNumber.value;
  if (inputNumber.value.length === 0) {
    numerodeTarjeta.innerText = "0000 0000 0000 0000";
  }
}
)

inputMonth.addEventListener("input", () => {
  mesTarjeta.innerText = inputMonth.value
  if (inputMonth.value.length === 0) {
    inputMonth.innerText = "00";
  }
}
)

inputYear.addEventListener("input", () => {
  añoTarjeta.innerText = inputYear.value
  if (inputYear.value.length === 0) {
    inputYear.innerText = "00";
  }
}
)


inputCvc.addEventListener("input", () => {
  cvcTarjeta.innerText = inputCvc.value
  if (inputCvc.value.length === 0) {
    inputCvc.innerText = "00";
  }
}
)
