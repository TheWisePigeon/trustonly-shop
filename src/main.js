import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './routes.js'

const store = createStore({
    state(){
        return{
            isLoggedIn: false,
            user:{},
            products:[],
            cart: [],
            
        }
    },
    mutations:{
        login(state, user){
            state.user = user
        },
        logout(state){
            state.user = {}
        }
    },
    getters:{
        fetchProducts(_){
            return 
        }
    },
    actions:{
        login(context, user){
            context.commit('login', user)
        },
        logout(context){
            context.commit('logout')
        }
    },
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');