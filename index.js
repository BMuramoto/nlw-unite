let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 1, 02, 19, 23),
    dataCheckIn: new Date(2024, 1, 05, 20, 00)
  },
  {
    nome: "Ana Silva",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 0, 15, 14, 30),
    dataCheckIn: null
  },
  {
    nome: "Luiza Santos",
    email: "luiza@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 10, 15),
    dataCheckIn: new Date(2024, 3, 15, 13, 30)
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 4, 5, 11, 45),
    dataCheckIn: new Date(2024, 4, 10, 16, 20)
  },
  {
    nome: "Camila Costa",
    email: "camila@gmail.com",
    dataInscricao: new Date(2024, 5, 20, 8, 10),
    dataCheckIn: new Date(2024, 5, 25, 12, 40)
  },
  {
    nome: "Rafaela Almeida",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2024, 6, 18, 16, 55),
    dataCheckIn: new Date(2024, 6, 23, 20, 15)
  },
  {
    nome: "Carlos Souza",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 7, 7, 9, 30),
    dataCheckIn: null
  },
  {
    nome: "Juliana Lima",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 8, 25, 17, 20),
    dataCheckIn: new Date(2024, 8, 30, 21, 50)
  },
  {
    nome: "Fernando Oliveira",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2024, 9, 14, 13, 40),
    dataCheckIn: null
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button 
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
  }
  
  return ` 
  <tr>
    <td> 
      <strong> 
         ${participante.nome}
      </strong>
      <br>
      <small>
         ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  ` 
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
    document
    .querySelector('tbody')
    .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //verificar se o participante ja existe
  const participanteExiste = participantes.find(
      (p) => {
        return p.email == participante.email
      }
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)
  //limpar o form
  event.target.querySelector('[name="nome"]').value =""
  event.target.querySelector('[name="email"]').value =""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  //att o check-in do participante
  participante.dataCheckIn = new Date()
  //att a lista de participantes
  atualizarLista(participantes)
}