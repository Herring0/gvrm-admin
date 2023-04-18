import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import EdsList from "./components/eds/EdsList.vue"
import TheInvent from "@/components/invent/TheInvent";


const router = createRouter({
    routes: [
        /* {
            path: '/',
            component: HomeView
        } */
        {
            path: '/eds',
            name: 'eds',
            component: EdsList
        },
        {
            path: '/invent',
            name: 'invent',
            component: TheInvent
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router);
app.mount('#app')
