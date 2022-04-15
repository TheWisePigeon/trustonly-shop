import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
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
            path: '/profile',
            component: () => import('./components/auth/UserProfile.vue')
        },
        {
            path: '/cart',
            component: () => import('./components/auth/LoginPage.vue')
        },
        {
            path: '/test',
            component: () => import('./components/checkout/CheckOut.vue')
        }
    ]
});

export default router;