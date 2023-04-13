const validator = {
  // ... 
 reversarNumero(tarjeta){
  //let nombre = "1234 1234 1234 1234";
  let arrayTarjeta = tarjeta.split("");
  console.log(arrayTarjeta);
  let reversed = arrayTarjeta.reverse();
  console.log(reversed);
  return reversed; 
 }
};


export default validator;
