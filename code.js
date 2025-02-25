var todosPaises = [];
var todosPaisesDiv = document.querySelector(".todosPaises")
var qtPaises = document.querySelector("#qtPaises")

async function consultarPaises(url) {
  var resposta = await fetch("https://restcountries.com/v3.1/" + url)
  var dados = await resposta.json()

  todosPaises = dados;
  qtPaises.innerHTML = todosPaises.length
  mostrarPaises(todosPaises)
}

function mostrarPaises(paises) {

  todosPaisesDiv.innerHTML = ""
  for (pais of paises) {

    var paisDiv = document.createElement("div")
    paisDiv.classList.add("pais")

    paisDiv.innerHTML = `
      <img
          width="150"
          src="${pais.flags.png}"
          alt="${pais.flags.alt}"
      />
      <p>${pais.translations.por.common}</p>
    `

    paisDiv.id = pais.cca2

    paisDiv.addEventListener("click", abrirPaginaDetalhes)

    todosPaisesDiv.appendChild(paisDiv)
  }
}

function abrirPaginaDetalhes(event){
  var paisId

  if (event.target.className != "pais") {
    paisId = event.target.parentElement.id
  } else {
    paisId = event.target.id
  }

  window.location.href = `./detalhes.html?id=${paisId}`
}

function buscarPaises(value) {
  var paisBuscados = []

  for (pais of todosPaises) {
    var nome = pais.translations.por.common.toLowerCase()
    if (nome.startsWith(value.toLowerCase())) {
      paisBuscados.push(pais)
    }
  }
  todosPaisesDiv.innerHTML = ""
  qtPaises.innerHTML = paisBuscados.length
  mostrarPaises(paisBuscados)
}

function pesquisarPaisPorFiltro(value) {
  var url = ""
  if(value != "all"){
    url = "region/" + value
  }else{
    url = "all"
  }
  consultarPaises(url)
}

consultarPaises("all")