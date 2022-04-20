<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    nethods: {
        test() {
            console.log("test");
        },
    },
    computed: {
        isInCart() {
            return this.$store.state.cart.includes(this.product._id);
        },
        isLiked() {
            return "none";
        },
    },
}
</script>

<template>
    <div @click="$emit('view-item')"
        class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
        <div>
            <img :src="product.image" alt="" class="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-coolGray-500">
            <h2 class="mb-1 text-xl font-bold"> {{ product.price }}$ </h2>
            <div class="flex justify-between">
                <p class=" font-semibold"> {{ product.name }} </p>
                <button>
                    <svg v-if="!isInCart" xmlns="http://www.w3.org/2000/svg"
                        @click.stop="$emit('add-item', this.product)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button v-if="isInCart">
                    <svg xmlns="http://www.w3.org/2000/svg" @click.stop="$emit('remove-item', this.product)"
                        class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

            </div>
        </div>
        <div class="flex flex-wrap justify-between">

            <button aria-label="Share this item" @click.stop="$emit('share-item')" type="button"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            </button>
            <button type="button" aria-label="Like this item" @click.stop="$emit('like-item')"
                class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :fill="isLiked" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span> {{ product.likes }} </span>
            </button>
        </div>
    </div>

</template>