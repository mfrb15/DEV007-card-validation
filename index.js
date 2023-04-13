import validator from './validator.js';
console.log(validator);
        let tarjeta ="";
const botonEnviar = document.getElementById("enviar");
const numeroTarjeta = document.getElementById("input-number");

botonEnviar.addEventListener("click", () => {
    tarjeta = document.getElementById("input-number").value;
    console.log(tarjeta);
    let tarjetaValidada = validator.reversarNumero(tarjeta);
    console.log("esta es mi tarjeta reversada " + tarjetaValidada)
  
}
)






