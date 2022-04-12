<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
            },
            errors: {}
        }
    },
}
</script>

<template>
    <div class=" flex justify-center h-screen items-center">
        <form class=" bg-green-500 p-4 space-y-4 text-center shadow-xl mx-3 rounded-lg space-x-1" action="" method="post">
            <input class=" border-2 rounded-lg text-center" type="email" name="name" id="name" placeholder="You@domain.com">
            <input class=" border-2 rounded-lg text-center" type="password" name="password" id="pwd" placeholder="Your password"><br>
            <button class=" text-white border-2 rounded-lg px-2" type="submit">Login</button><br>
            No account?<router-link to="/register" class=" text-blue-600">Register</router-link>
        </form>
        
    </div>
</template>