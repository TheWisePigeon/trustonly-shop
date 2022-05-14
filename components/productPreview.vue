<script>
export default {
    props: {
        id: Number,
        name: String,
        image: String,
        description: String,
        category: String,
        price: Number
    }
}
</script>

<template>
    <div class=" flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-coolGray-900 dark:text-coolGray-100" >
        <div>
            <img :src="this.image" alt="" srcset="">
        </div>
        <div class="flex-col lg:flex lg:justify-between">
            <p>{{this.name}}</p>
            <p>+</p>
        </div>
    </div>
</template>