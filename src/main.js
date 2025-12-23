import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import reveal from './directives/reveal.js'

const app = createApp(App)

app.directive('reveal', reveal)
app.use(router).mount('#app')
