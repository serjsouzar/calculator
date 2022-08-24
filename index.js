function insertNumber(num){
  var number = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = number + num;
}

function clearNumber(){
  document.getElementById('resultado').innerHTML = "";
}

function backspace() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
}

function calculate(){
  var resultado = document.getElementById('resultado').innerHTML;
  resultado ? document.getElementById('resultado').innerHTML = eval(resultado) : false
}