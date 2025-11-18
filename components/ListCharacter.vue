<template>
  <section>
    <div class="characters">
        <h2>Characters ({{ chaacters.length }})</h2>
        <div class="characters_list">
            <div v-for="character in chaacters" :key="character.id" class="character_item">
                <h3>{{ character.name }}</h3>
                <img :src="character.image" :alt="character.name">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'; // Importación correcta
export default {
  setup() {
    const store = useStore();
    
    // Obtenemos los personajes del estado de Vuex
    const chaacters = computed(() => store.state.charactersFilter);
     
    // Llamamos a la acción para obtener los datos cuando el componente se monta
    onMounted(() => {
      store.dispatch('fetchCharacters');
    });

    // ⬅️ CRUCIAL: Debes retornar las variables para usarlas en la plantilla
    return {
      chaacters
    };
  }
}
</script>

<style scoped>
/* Añade algunos estilos básicos para que la lista se vea bien */
.characters_list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
.character_item {
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    text-align: center;
}
.character_item img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>