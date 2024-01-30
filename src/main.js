import './assets/temple.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vue.use(animated)

const app = createApp(App)

app.use(router)

app.mount('#app')
