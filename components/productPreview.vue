<script>
export default {
    props: {
        id: Number,
        name: String,
        image: String,
        description: String,
        category: String,
        price: Number
    },
}
    
</script>

<template>
    <div class=" flex flex-col max-w-lg p-6 space-y-6  rounded-lg shadow-md ">
        <div>
            <img :src="this.image" alt="" srcset="">
        </div>
        <div class="flex justify-between ">
            <p>{{ this.name }}</p>
            <span>{{ this.description }}</span>
            <p>{{ this.price }} frcs</p>
        </div>
        <div class="flex justify-center ">
            <button v-if="1" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <button v-else>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    </div>
</template>