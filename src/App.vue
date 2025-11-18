<script setup>
import ListCharacter from '../components/ListCharacter.vue' // ⬅️ 1. Importa el componente
</script>

<template>
  <div id="app">
    <h1>Listado de Personajes de Rick and Morty</h1>
    <ListCharacter /> </div>
</template>

<style scoped>
#app {
  text-align: center;
}
</style>