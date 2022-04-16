import {
    createStore
} from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "../routes";

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            user: {},
            cart: [],
        }
    },
    mutations: {
        login(state, user) {
            state.user = user
            state.isLoggedIn = true
        },
        logout(state) {
            state.user = {},
                state.isLoggedIn = false
        },
        addToCart(state, product){
            state.cart.push(product)
        },
        removeFromCart(state, product){
            state.cart.splice(state.cart.indexOf(product), 1)
        }

    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        isInCart(state, product) {
                return state.cart.includes(product)
        },
        cartCount(state) {
            return state.cart.length
        },
    },
    actions: {
        register(context, user) {
            fetch('http://localhost:5000/v1/new/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(user => {
                    context.commit('login', user)
                    router.replace('/')
                })
        },
        login(context, user) {
            fetch('http://localhost:5000/v1/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        context.commit('login', res.user)
                        router.replace('/')
                    } else {
                        alert(res.message)
                    }
                })
        },
        logout(context) {
            context.commit('logout')
        },
        addToCart(context, product) {
            context.commit('addToCart', product)
        },
        removeFromCart(context, product) {
            context.commit('removeFromCart', product)
        }
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})

export default store;