import {
    createStore
} from "vuex";
import router from "../routes";

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            user: {},
            products: [],
            cart: [],
        }
    },
    mutations: {
        login(state, user) {
            state.user = user
            state.isLoggedIn = true
        },
        logout(state) {
            state.user = {}
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn
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

            context.commit('login', user)
        },
        logout(context) {
            context.commit('logout')
        }
    },
})

export default store;