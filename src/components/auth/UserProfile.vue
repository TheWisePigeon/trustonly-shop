<script>
import store from "../../store/rootStore"
export default {
    data(){
        return{
            user: store.state.user,
        }
        
    }
}
</script>

<template>
    <div>
        <p>Name: {{this.user.name}} </p>
        <p>Email: {{this.user.email}} </p>
    </div>
</template>