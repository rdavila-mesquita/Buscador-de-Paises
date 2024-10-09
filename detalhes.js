const lerURL = window.location.search
const URL = new URLSearchParams(lerURL)
const paisId = URL.get('id').toLowerCase()

var Nome = document.querySelector("#nome")
var Capital = document.querySelector("#capital")
var PaisBandeira = document.querySelector("#paisbandeira")
var Lingua = document.querySelector("#lingua")
var Moeda = document.querySelector("#moeda")
var Continente = document.querySelector("#continente")
var Populacao = document.querySelector("#populacao")
var Area = document.querySelector("#area")
var Localizacao = document.querySelector("#localizacao")



async function codigoPrincipal() {
    var API = await fetch("https://restcountries.com/v3.1/alpha/" + paisId)
    var dados = await API.json()
    var subdados = dados[0]
    var idiomaapi = Object.values(subdados.languages).join(`, `)
    var moedaapi = Object.values(subdados.currencies)[0].name

   Nome.innerHTML = `<b>Nome Oficial: </b>${subdados.name.official}`
    PaisBandeira.innerHTML = `
     <img
          width="350"
          src="${subdados.flags.png}"
          alt="${subdados.flags.alt}"
      />
    `
    Capital.innerHTML = `<b>Capital: </b>${subdados.capital}`
    Lingua.innerHTML = `<b>Língua(s) Oficial(ais): </b>${idiomaapi}`
    Moeda.innerHTML = `<b>Moeda:</b>${moedaapi}`
    Continente.innerHTML = `<b>Continente: </b>${subdados.continents}`
    Populacao.innerHTML = `<b>População: </b>${subdados.population}`
    Area.innerHTML = `<b>Área Geográfica: </b>${subdados.area} km²`
    Localizacao.innerHTML = `<b>Localização: </b>${subdados.maps.googleMaps}`


    console.log(dados)
    console.log(subdados.altSpellings[1])
  }

  codigoPrincipal()