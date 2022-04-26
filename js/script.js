let btn = document.querySelector('.fa-eye')

// MOSTRAR CONFIRMAR SENHA AO CLICAR NO EYE BUTTON
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

// AUTENTICAÇÃO
function entrar() {
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')

  // DECLARA A ARRAY DE CADASTRO DE USUÁRIOS
  let listaUser = []
  // CRIA UM USUÁRIO VÁLIDO
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  // CAPTURA A LISTA DE USUÁRIOS CADASTRADOS NO LOCALSTORAGE
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  // PERCORRE O ARRAY DE USUÁRIOS CADASTRADOS VERIFICANDO SE USUÁRIO E SENHA BATEM
  listaUser.forEach(item => {
    if (usuario.value == item.userCad && senha.value == item.passCad) {
      // CASO BATAM, INSERIR OS DADOS NO OBJETO USERVALID
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.passCad
      }
    }
  })

  // COMPARAR O USERVALID COM O DIGITADO
  if (
    usuario.value == userValid.user &&
    senha.value == userValid.senha &&
    userValid.user.length > 0
  ) {
    window.location.href = './inicio.html'

    localStorage.setItem('userLogado', JSON.stringify(userValid))

    // CRIAR TOKEN DE 16 DIGITOS
    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')

    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'

    setTimeout(() => {
      document.location.reload(true)
    }, 3000)

    usuario.focus()
  }
}
