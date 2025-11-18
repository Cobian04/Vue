import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js' // ⬅️ 1. Importamos el archivo Vuex store

const app = createApp(App)

app.use(store) // ⬅️ 2. Le decimos a la aplicación que use el store
app.mount('#app')