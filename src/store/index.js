import { createStore } from "vuex";

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
    actions:{
        register(context, user){
            fetch('http://localhost:3000/v1/new/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(user => {
                context.commit('login', user)
            })
        },
        login(context, user){

            context.commit('login', user)
        },
        logout(context){
            context.commit('logout')
        }
    },
})

export default store;