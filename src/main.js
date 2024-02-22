import './assets/temple.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'

// Vue.use(animated)

const app = createApp(App)

app.config.globalProperties.$axios = axios;

app.use(router)
app.use(ElementPlus)

app.mount('#app')
