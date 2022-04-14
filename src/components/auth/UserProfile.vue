<script>
import store from "../../store/rootStore"
export default {
    data(){
        return{
            user: store.state.user,
        }
        
    },
    methods:{
        logout(){
            store.dispatch("logout")
        }
    }
}
</script>

<template>
    <div>
        <p>Name: {{this.user.name}} </p>
        <p>Email: {{this.user.email}} </p>
        <button @click="logout">Logout</button>
    </div>
</template>