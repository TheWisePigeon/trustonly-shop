<script>
export default {

}
</script>

<template>
    <header class="sticky top-0 z-30 w-full px-2 py-4 bg-emerald-400 sm:px-4 shadow-xl">
        <div class="flex items-center justify-between mx-auto max-w-7xl">
            <NuxtLink to="/">
                <span class="text-2xl font-extrabold">TrustOnly</span>
            </NuxtLink>
            <div class="flex items-center space-x-1">
                <ul class="hidden space-x-2 md:inline-flex">
                    <li>
                        <ItemsCart/>
                    </li>
                    <li>
                        <Profile/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

