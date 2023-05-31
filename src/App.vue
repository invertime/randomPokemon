<script setup lang="ts">
import Card from './components/Card.vue'
import { fetchPokemon, fetchCount } from './utils/fetchPokemon.ts'

let { count, errCount } = fetchCount();

console.log(count.value);



let randomPokemon = Math.random() * (parseInt(count) - 1) + 1;

let url: string = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`



let { data, error } = fetchPokemon(url);

</script>

<template>
  <div v-if="errCount">Oops! Error encountered: {{ errCount.message }}</div>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <Card :title="data" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
