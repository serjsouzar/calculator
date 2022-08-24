function insertNumber(num){
  var number = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = number + num;
}

function clearNumber(){
  document.getElementById('resultado').innerHTML = "";
}