const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let campoA = document.getElementById("campoA");
  let campoB = document.getElementById("campoB");

  let numeroA = Number(campoA.value);
  let numeroB = Number(campoB.value);

  let mensagem = document.getElementById("mensagem");

  if (numeroB > numeroA) {
    mensagem.textContent = `Sim, o número ${numeroB} é maior que ${numeroA}`;
    mensagem.style.color = "green";
    mensagem.style.display = "block";
  } else {
    mensagem.textContent = `Não, o número ${numeroB} não é maior que ${numeroA}`;
    mensagem.style.color = "red";
    mensagem.style.display = "block";
  }
});
