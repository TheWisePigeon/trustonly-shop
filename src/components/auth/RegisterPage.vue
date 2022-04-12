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
            <input class=" border-2 rounded-lg text-center" type="text" name="name" id="name" placeholder="Your name">
            <input class=" border-2 rounded-lg text-center" type="email" name="email" id="email" placeholder="You@domain.com">
            <input class=" border-2 rounded-lg text-center" type="password" name="password" id="pwd" placeholder="Your password"><br>
            <input class=" border-2 rounded-lg text-center" type="password" name="confirmPass" id="CfrmPwd" placeholder="Confirm password"><br>
            <button class=" text-white border-2 rounded-lg px-2" type="submit">Register</button><br>
            Got an account?<router-link to="/login" class=" text-blue-600">Login</router-link>
        </form>
        
    </div>
</template>