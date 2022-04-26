let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

//  DECLARAÇÕES DE VARIÁVEIS DE INPUT
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

// VALIDAÇÃO DO CAMPO DE NOME
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Insira no mínimo 03 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

// VALIDAÇÃO DO CAMPO DE USUÁRIO
usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Insira no mínimo 05 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

// VALIDAÇÃO DO CAMPO DE SENHA
senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Insira no mínimo 06 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

// VALIDAÇÃO DO CAMPO DE CONFIRMAR SENHA
confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value || confirmSenha.value.length <= 5) {
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar senha "As senhas não conferem"'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

// FUNÇÃO CADASTRAR USUÁRIO
function cadastrar() {
  // BOELANO QUE IDENTIFICA SE TODOS OS CAMPOS ESTÃO VÁLIDOS
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    // PEGAR LISTA OU CRIAR UMA VAZIA
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    // PUSH DE NOVO USER
    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      passCad: senha.value
    })
    // TRANSFORMAR O PUSH EM STRING
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    // VALIDAÇÕES DE CADASTRO
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Cadastro sendo realizado...'
    msgError.innerHTML = ''
    msgError.setAttribute('style', 'display: none')
    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/'
    }, 2500)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Preencha todos os campos corretamente..'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

// MOSTRAR SENHA AO CLICAR NO EYE BUTTON
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

// MOSTRAR CONFIRMAR SENHA AO CLICAR NO EYE BUTTON
btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
