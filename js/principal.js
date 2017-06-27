var titulo = document.querySelector(".titulo");
titulo.textContent = "teste";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = document.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

   var pesovalido = true;
   var alturavalida = true;

  if (peso <= 0 || peso >= 1000){
      pesovalido = false;
      tdImc.textContent= "Peso inválido!";
      paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00){
      alturavalida = false;
      tdImc.textContent= "Altura inválida!";
      paciente.classList.add("paciente-invalido");
  }

  if(alturavalida && pesovalido){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc
  }
}
