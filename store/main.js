import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js' // ⬅️ 1. Importa el store

const app = createApp(App)

app.use(store) // ⬅️ 2. Conecta el store a la aplicación
app.mount('#app')