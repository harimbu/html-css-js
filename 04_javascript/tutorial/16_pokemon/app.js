const pokedex = document.getElementById('pokedex')

const paintPokemon = pokemons => {
  console.log(pokemons)

  // const type = pokemons.

  const htmlList = pokemons
    .map(
      pokemon =>
        `
      <li>
        <img src='${pokemon.url}' />
        <h2>${pokemon.name}</h2>
        <p>type</p>
      </li>
    `
    )
    .join(', ')

  pokedex.innerHTML = htmlList
}

const getPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=10`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)

  paintPokemon(data.results)
}

getPokemon()
