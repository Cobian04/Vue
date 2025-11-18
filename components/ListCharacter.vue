<template>
  <section>
    <div class="characters">
        <div class="characters_item">
            <h2>Characters</h2>

        </div>

    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import {useStore} from "vuex";
export default {
  setup() {
    const store = useStore();
    const chaacters = computed(() =>
     store.state.charactersFilter);
     
     onMounted(() => {
       store.dispatch('fetchCharacters');
     });
  }
}
</script>

<style>

</style>