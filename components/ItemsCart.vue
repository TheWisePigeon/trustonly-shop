<script>
export default {
    data() {
        return {
            itemCount: 0
        }
    }
}
</script>

<template>
    <div class=" px-4">
        <NuxtLink to="/">
            <div class="flex">
                <div class=" bg-red-500 rounded text-base text-white  px-1">{{ itemCount }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
        </NuxtLink>
    </div>


</template>