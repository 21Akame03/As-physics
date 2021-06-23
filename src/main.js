import { createApp } from 'vue'
import App from './App.vue'
import Matter from 'matter-js'
import VueRouter from 'vue-router'


//tailwind
import './tailwind.css'

var app = createApp(App)
app.use(Matter);
app.mount('#app')
