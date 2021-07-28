import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from "axios"
window.axios = axios;

window.$ = window.jQuery = require('jquery');

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


createApp(App).use(store).use(router).mount('#app')
