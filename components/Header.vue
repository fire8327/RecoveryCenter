<template>
    <header class="grid-container w-full py-4 relative">
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="transition-all duration-500 hover:opacity-80">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <div class="flex items-center gap-6 max-lg:flex-col max-lg:py-6 max-lg:w-full max-lg:bg-white max-lg:left-0 max-lg:absolute max-lg:border-t border-blue-500 z-[4] transition-all duration-500" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">Главная</NuxtLink>
                <NuxtLink to="/catalog" class="flex flex-col after:w-0 after:h-px after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">Каталог продукции</NuxtLink>
                <NuxtLink to="/about" class="flex flex-col after:w-0 after:h-px after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">О компании</NuxtLink>
                <div class="flex items-center gap-2">
                    <NuxtLink to="/" class="transition-all duration-500 hover:opacity-80">
                        <Icon class="text-3xl text-blue-500" name="material-symbols:shopping-cart-rounded"/>
                    </NuxtLink>
                    <NuxtLink to="/auth" class="transition-all duration-500 hover:opacity-80">
                        <Icon class="text-3xl text-blue-500" name="material-symbols:person"/>
                    </NuxtLink>
                </div>
            </div>
            <button class="lg:hidden" @click="isMenuShow = !isMenuShow">
                <Icon class="text-3xl text-blue-500" name="material-symbols-light:menu"/>
            </button>
        </div>
        <div @click="isMenuShow = false" class="lg:hidden fixed z-[3] inset-0 bg-black/30 top-20" :class="{'max-lg:hidden' : !isMenuShow}"></div>
    </header>
</template>

<script setup>
/* открытие мобильного меню */
const isMenuShow = ref(false) 


/* закрытие мобильного меню */
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    isMenuShow.value = false
})
</script>