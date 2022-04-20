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
    <div class="flex flex-col max-w-3xl p-1 space-y-4 sm:p-10 ">
        <ul class="flex flex-col divide-y divide-coolGray-700">
            <li class="flex flex-col  sm:flex-row sm:justify-between">
                <div class="flex w-full space-x-2 sm:space-x-4">
                    <img class="flex-shrink-0 object-cover w-20 h-20  rounded outline-none sm:w-32 sm:h-32 "
                        :src="product.image">
                    <div class="flex flex-col justify-between w-full pb-4">
                        <div class="flex justify-between w-full pb-2 space-x-2">
                            <div class="space-y-1">
                                <h3 class="text-lg font-semibold leading-snug sm:pr-8"> {{ product.name }} </h3>
                                <p class="text-sm dark:text-coolGray-400"> {{ product.price }}$ </p>
                            </div>
                            <div class="text-right">
                                <!-- <p class="text-lg font-semibold">unitary price</p>
                                <p class="text-sm  ">total price</p> -->
                            </div>
                        </div>
                        <div class="flex justify-around text-sm divide-x">
                            <button type="button" class="flex items-center" @click="$emit('remove', this.product._id)" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                            <button class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>