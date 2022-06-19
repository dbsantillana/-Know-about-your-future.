const inputPergunta = document.querySelector("#inputPergunta")
const respostasElement = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const resposta = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "Não pense duas vezes sobre isso.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta(){

 if(inputPergunta.value == ""){
   alert("Digite sua pergunta!")
    return
 }

buttonPerguntar.setAttribute("disabled", true)


 const pergunta = "<div>" + inputPergunta.value + "<div>"

// gerar numero aleatorio
  const totalRespostas = resposta.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


respostasElement.innerHTML= pergunta + resposta[numeroAleatorio]


// sumir a reposta depois de 3 segundos
respostasElement.style.opacity = 1;

 setTimeout(function() {
    respostasElement.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)


}