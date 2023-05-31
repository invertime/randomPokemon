import { ref } from 'vue'

export function fetchPokemon(url: string) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}

export function fetchCount() {
  const count = ref(null)
  const error = ref(null)

  let url: string = "https://pokeapi.co/api/v2/pokemon/"

  fetch(url)
      .then((res) => res.json())
      .then((json) => (count.value = json.count))
      .catch((err) => (error.value = err))

  console.log(count.value);
  

  return { count, error }
}