const pokedex = document.getElementById('pokedex')

// const fetchPokemon = () => {
//   const promises = []

//   for (let i = 1; i <= 150; i++) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//     promises.push(fetch(url).then(res => res.json()))
//   }

//   Promise.all(promises).then(results => {
//     const pokemon = results.map(data => ({
//       name: data.name,
//       id: data.id,
//       image: data.sprites.front_default,
//       type: data.types.map(type => type.type.name).join(', ')
//     }))
//     paintPokemon(pokemon)
//   })
// }

const closeModal = () => {
  const modal = document.querySelector('.modal')
  modal.remove()
}

const showModal = data => {
  console.log(data)
  const type = data.types.map(type => type.type.name).join(', ')
  console.log(type)
  const htmlStr = `
    <div class='modal'>
      <button class='close' onclick='closeModal()'>Close</button>
      <div class='card'>
        <img class='card-img' src='${data.sprites.front_default}' />
        <h2 class='card-title'>${data.name}</h2>
        <p>
          <small>Height: ${data.height}</small>
          <small>Weight: ${data.weight}</small>
          <small>Type: ${type}</small>
        </p>
      </div>
    </div>
  `

  pokedex.innerHTML = htmlStr + pokedex.innerHTML
}

const selectPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  showModal(data)
}

const paintPokemon = pokemon => {
  const html = pokemon
    .map(
      item => `<li class='card' onclick='selectPokemon(${item.id})'>
        <img class='card-img' src='${item.image}' />
        <h2 class='card-title'>${item.id}. ${item.name}</h2>
      </li>`
    )
    .join('')

  pokedex.innerHTML = html
}

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`
  const res = await fetch(url)
  const data = await res.json()
  const pokemon = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`
  }))

  paintPokemon(pokemon)
}

fetchPokemon()
