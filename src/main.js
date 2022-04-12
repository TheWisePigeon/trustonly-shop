import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/Products/ProductsList.vue')
        },
        {
            path: '/login',
            component: () => import('./components/auth/LoginPage.vue')
        },
        {
            path: '/register',
            component: () => import('./components/auth/RegisterPage.vue')
        },
        {
            path: '/checkout',
            component: () => import('./components/auth/LoginPage.vue')
        }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');