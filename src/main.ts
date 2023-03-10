import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from '@/plugins/i18n'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createVuestic())

app.mount('#app')
