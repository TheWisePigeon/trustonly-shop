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
        <p>Orders</p>
        <ul>
            <li v-for="order in this.user.orders" :key="order.id">
                <p>Order: {{order._id}}</p>
                <p>Total: {{order.total}}</p>
                <p>Date: {{order.date}}</p>
                <p>Status: {{order.status}}</p>
                <p>Items</p>
                <ul>
                    <li v-for="item in order.items" :key="item.id">
                        <p>Name: {{item.name}}</p>
                        <p>Price: {{item.price}}</p>
                        <p>Quantity: {{item.quantity}}</p>
                    </li>
                </ul>
            </li>
        </ul>
        <button @click="logout">Logout</button>
    </div>
</template>