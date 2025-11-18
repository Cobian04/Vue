import { createApp } from 'vue'
import App from './App.vue'
import store from '../store/index.js' // ⬅️ ¡CAMBIAR AQUÍ! Se usa '..' para ir a la carpeta raíz

const app = createApp(App)

app.use(store) 
app.mount('#app')