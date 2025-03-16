<template>
    <div class="flex max-lg:flex-col gap-10">
        <div class="flex flex-col gap-6 lg:w-1/2">
            <div class="flex items-center gap-4">
                <Icon class="text-3xl text-blue-500" name="material-symbols:shopping-cart-rounded"/>
                <p class="mainHeading">Список товаров</p>
            </div>
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4 rounded-xl p-4 border border-gray-200 bg-white">
                    <p class="text-2xl font-mono font-semibold">Наименование товара</p>
                    <div class="text-3xl text-blue-500 font-semibold">цена ₽</div>
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" alt="Изображение товара" class="w-full rounded-xl aspect-video object-cover">
                    <div class="flex items-center gap-2 md:w-1/2">
                        <div class="flex items-center justify-center gap-4 h-full px-4 rounded-xl border border-blue-500 w-1/2">
                            <button class="text-xl">-</button>
                            <p>1</p>
                            <button class="text-xl">+</button>
                        </div>  
                        <button class="w-1/2 text-center py-0.5 px-4 rounded-full bg-blue-500 border border-blue-500 text-white transition-all duration-500 hover:text-blue-500 hover:bg-transparent">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6 lg:w-1/2">
            <div class="flex items-center gap-4">
                <Icon class="text-3xl text-blue-500" name="material-symbols:shopping-cart-rounded"/>
                <p class="mainHeading">Оформление заказа</p>
            </div>
            <FormKit type="form" @submit="makeOrder" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 w-full items-center">
                <div class="flex items-start gap-2 w-full">
                    <FormKit type="text" validation="required|number" messages-class="text-[#E9556D] font-mono" name="Номер карты" outer-class="max-md:w-full md:w-2/4" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md" placeholder="Номер карты"/>
                    <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-mono" name="Срок действия" outer-class="max-md:w-full md:w-1/4" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md" placeholder="YY/YY"/>
                    <FormKit type="text" validation="required|number" messages-class="text-[#E9556D] font-mono" name="CVC" outer-class="max-md:w-full md:w-1/4" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md" placeholder="CVC"/>
                </div>
                <p class="text-2xl w-full font-semibold"><span class="font-mono">Итого: </span> Цена ₽</p>
                <button type="submit" class="px-4 py-1.5 bg-blue-500 text-white rounded-full shrink-0 w-[160px]">Оформить</button>
            </FormKit>
        </div>
    </div>
</template>

<script setup>
/* название и язык страницы */
useSeoMeta({
    title: 'Корзина',
    lang: 'ru'
})
</script>