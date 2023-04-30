import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import EdsList from "./components/eds/EdsList.vue"
import TheInvent from "@/components/invent/TheInvent";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {faChevronRight, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import store from "@/store";

/* add icons to the library */
library.add(faUserSecret, faChevronDown, faChevronRight);


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
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount('#app');
