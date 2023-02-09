import axios from 'axios'

const URLBase = "https://pokeapi.co/api/v2/"

function getPokeapi(pokemon) {
  return axios({
    method: 'get',
    url: `${URLBase}pokemon/${pokemon}`
  })
}

function getPokemonEvolucao(id) {
  return axios({
    method: 'get',
    url: `${URLBase}evolution-chain/${id}`
  })
}

export { getPokeapi, getPokemonEvolucao}