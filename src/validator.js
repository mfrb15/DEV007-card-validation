//Esto es un objeto. 
const validator = {
  // ... 
  //Esto es un método
  isValid(creditCardNumber) {
    //let nombre = "1234 1234 1234 1234";
    // El método split corta una cadena de texto o string, para separarla y poderla contar.
    const arrayCard = creditCardNumber.split(""); //("")--->Porque no tengo ni comas ni espacios, si hubiera , seria (",")
    // console.log(arrayCard);
    const reversed = arrayCard.reverse();

    // console.log(reversed);
    //Multiplicar Pares por 2
    for (let i = 0; i < reversed.length; i++) {
      if (i % 2 !== 0) {
        reversed[i] = reversed[i] * 2


        if (reversed[i] >= 10) {
          // 1 0 
          let dosDigitosSumados = 0;
          const numeroDosdigitos = reversed[i].toString().split("");
          // console.log("numero 2 digitos " + numeroDosdigitos)
          for (let i = 0; i < numeroDosdigitos.length; i++) {
            dosDigitosSumados = dosDigitosSumados + parseInt(numeroDosdigitos[i]);
          }
          reversed[i] = dosDigitosSumados;
          // console.log(dosDigitosSumados + " esta es mi suma de dos digitos")
          dosDigitosSumados = 0; //es para que se resetee la variable para que se sumen solo los 2 números que entran al if.
        }
      }
    }
    // console.log(reversed + "Esta es la multiplicación");

    // Sumar todos los elementos 

    let digitosSumados = 0;

    for (let i = 0; i < reversed.length; i++) {
      digitosSumados = digitosSumados + parseInt(reversed[i]);
      // console.log(typeof (digitosSumados))
    }

    // console.log(digitosSumados + "esta es mi suma")

    // validar que el residuo de 10 sea igual a cero
    let validCard = false;
    if (digitosSumados % 10 === 0) {
      validCard = true;
    } else {
      validCard = false;
    }
    return validCard;
  },

  maskify(cardNumber) {
    const arrayNumber = cardNumber.toString().split('');
    for (let i = 0; i < arrayNumber.length-4 ; i++) {
      arrayNumber[i] = "#";
    }
    return arrayNumber.join('');
  },
}


export default validator;
