// main.js
import App from './App.vue'
import {
    createApp
} from 'vue'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap funcionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(store).use(router).use(BootstrapVue3).mount('#app')