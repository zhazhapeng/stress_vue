import './assets/temple.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'

import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'

// Vue.use(animated)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const app = createApp(App)
app.use(ElementPlus, {locale: zhCn,})
app.config.globalProperties.$axios = axios;

app.use(router)
app.use(ElementPlus)

app.mount('#app')
