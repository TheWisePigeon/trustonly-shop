<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
            },
            cfrmpwd: '',
            errors: {}
        }
    },
    computed: {
        isValid() {
            return (this.user.password == this.cfrmpwd) ? true : false;
        }
    },
}
</script>

<template>
    <div class=" flex justify-center h-screen items-center">
        <form
            class=" bg-green-500 p-4 flex-col space-y-4 text-center shadow-xl mx-3 rounded-lg space-x-1 lg:flex lg:w-96 "
            action="" method="post" @submit.prevent="login">
            <input class=" border-2 rounded-lg text-center focus:outline-none" type="text" name="name"
                v-model="user.name" required id="name" placeholder="Your name">
            <input class=" border-2 rounded-lg text-center focus:outline-none" type="email" name="email"
                v-model="user.email" required id="email" placeholder="Your email">
            <input class=" border-2 rounded-lg text-center focus:outline-none" type="password" name="password"
                v-model="user.password" required id="pwd" placeholder="Your password">
            <input class=" border-2 rounded-lg text-center focus:outline-none" type="password" name="confirmPass"
                v-model="cfrmpwd" required id="CfrmPwd" placeholder="Confirm password">
            <span v-if="!isValid" class=" text-sm text-red-800">Passwords don't match</span>
            <button class=" text-white border-2 rounded-lg px-2" type="submit">Register</button>
            <div>Got an account? <router-link to="/login" class=" text-blue-600">Login</router-link>
            </div>
        </form>
    </div>
</template>