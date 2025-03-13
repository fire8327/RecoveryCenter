<template>
    <header class="grid-container w-full py-4">
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="transition-all duration-500 hover:opacity-70">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <div class="flex items-center gap-6">
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#442fe0] after:transition-all after:duration-500 hover:after:w-full">Главная</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#442fe0] after:transition-all after:duration-500 hover:after:w-full">Каталог продукции</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#442fe0] after:transition-all after:duration-500 hover:after:w-full">О компании</NuxtLink>
                <div class="flex items-center gap-2">
                    <NuxtLink to="/" class="transition-all duration-500 hover:opacity-70">
                        <Icon class="text-3xl text-[#442fe0]" name="material-symbols:shopping-cart-rounded"/>
                    </NuxtLink>
                    <NuxtLink to="/" class="transition-all duration-500 hover:opacity-70">
                        <Icon class="text-3xl text-[#442fe0]" name="material-symbols:person"/>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>