<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div
        class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
        <div>
            <img :src="product.image" alt=""
                class="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-coolGray-500">
            <h2 class="mb-1 text-xl font-bold"> {{product.price}}$ </h2>
            <p class=" font-semibold"> {{product.name}} </p>
        </div>
        <div class="flex flex-wrap justify-between">
            <div class="space-x-2">
                <button aria-label="Share this post" type="button" class="p-2 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </div>
            <div class="flex space-x-2 text-sm dark:text-coolGray-400">
                <button type="button" class="flex items-center p-1 space-x-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span> {{product.comments.length}} </span>
                </button>
                <button type="button" class="flex items-center p-1 space-x-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span> {{product.likes.length}} </span>
                </button>
            </div>
        </div>
    </div>
</template>