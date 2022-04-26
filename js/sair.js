let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let textUse = document.querySelector('#usuario')


if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar esta página')
  window.location.href = './index.html'
}

textUse.innerText = `Bem-vindo, ${userLogado.nome}!`

function sair() {
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = './index.html'
}
