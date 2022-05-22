<template>
    <div class="sticky top-0 z-30 w-full px-2 py-4 bg-emerald-400 sm:px-4 shadow-xl">
        <div class="flex items-center justify-between mx-auto max-w-7xl">
            <NuxtLink to="/">
                <span class="text-2xl font-extrabold">TrustShop</span>
            </NuxtLink>
            <div class="flex items-center space-x-1">
                <ItemsCart />
                <Profile />
            </div>
        </div>
    </div>
</template>

