<script>

export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', this.user)
        },
        test() {
            this.$router.replace('/')
        }
    },
}
</script>

<template>
    <div class=" flex justify-center h-screen items-center">
        <button @click="test">Bruh</button>
        <form
            class=" bg-green-500 p-4 space-y-4 flex-col text-center shadow-xl mx-3 rounded-lg space-x-1 lg:flex  lg:w-96"
            action="" method="post">
            <input class=" border-2 rounded-lg text-center focus:outline-none" type="email" v-model="user.email"
                name="name" id="name" placeholder="You@domain.com">
            <span class=" text-red-700 hidden">email not found</span>
            <input class=" border-2 rounded-lg text-center focus:outline-none" type="password" v-model="user.password"
                name="password" id="pwd" placeholder="Your password">
            <span class=" text-red-700 hidden">wrong password</span><br>
            <button class=" text-white border-2 rounded-lg px-2" type="submit">Login</button>
            <div>
                No account? <router-link to="/register" class=" text-blue-600">Register</router-link>
            </div>
        </form>

    </div>
</template>