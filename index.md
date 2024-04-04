// objeto js
const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao:new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao:new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  }
] 




Você é um especialista em estrutura de dados com JavaScript

Com o exemplo abaixo, crie 10 participantes:
<output>
let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao:new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
{
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao:new Date(2024, 1, 02, 19, 23),
    dataCheckIn: new Date(2024, 1, 05, 20, 00)
  },
...
]
</output>

Retorne apenas a lista

for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  } 

  no codigo acima ele gera um loop entre os participante que estão na lista
  fazendo com que o codigo rode até o ultimo participante.