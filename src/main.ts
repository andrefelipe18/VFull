import './assets/main.css'

//Vue instance
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

//Vue router
import router from './router'
app.use(router)

//Unhead
import { createHead } from "@unhead/vue"
const head = createHead()
app.use(head)

//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
