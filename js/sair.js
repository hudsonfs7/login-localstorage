let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let textUse = document.querySelector('#usuario')
textUse.innerText = `Bem-vindo, ${userLogado.nome}!`

if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar esta página')
  window.location.href = 'http://127.0.0.1:5500/'
}

function sair() {
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'http://127.0.0.1:5500/'
}
