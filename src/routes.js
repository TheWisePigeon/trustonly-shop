import { createRouter, createWebHistory } from 'vue-router'

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

export default router;