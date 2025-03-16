<template>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Каталог продукции</p>
        <p>Мы работаем как с небольшими компаниями, так и с крупными заводами, предоставляя только качественные запчасти
            с гарантией. Наши специалисты имеют большой опыт работы и готовы предложить решения под индивидуальные
            запросы.</p>
        <div class="flex w-full items-end justify-between">
            <div class="flex items-center gap-4">
                <FormKit validation="required" messages-class="text-[#E9556D] font-mono" type="select"
                    :options="['Умолчанию', 'Цене', 'Наименованию']" label="Упорядочить по" name="filter"
                    outer-class="w-fit"
                    input-class="focus:outline-none px-4 py-1.5 bg-white rounded-full border w-full transition-all duration-500 border-blue-500" />
                <FormKit validation="required" messages-class="text-[#E9556D] font-mono" type="select"
                    :options="['Все', 'Грузоподъёмное', 'Промышленное']" label="Тип" name="type" outer-class="w-fit"
                    input-class="focus:outline-none px-4 py-1.5 bg-white rounded-full border w-full transition-all duration-500 border-blue-500" />
            </div>
            <div class="flex items-center gap-2">
                <button class="w-fit px-4 py-1.5 rounded-full bg-emerald-500 text-white transition-all duration-500 hover:opacity-50">Применить</button>
                <button class="w-fit px-4 py-1.5 rounded-full bg-red-500 text-white transition-all duration-500 hover:opacity-50">Отменить</button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex flex-col bg-white rounded-xl overflow-hidden shadow-md" v-for="n in 8">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" alt="Изображение товара" class="w-full aspect-video object-cover">
                <div class="p-4 flex flex-col gap-3">
                    <p class="text-lg font-semibold text-gray-800">
                        Название товара
                    </p>
                    <p class="text-sm">
                        Краткое описание товара. Оно может быть в несколько строк.
                    </p>
                    <p class="text-lg font-semibold text-blue-500">
                        9 999 ₽
                    </p>
                    <button
                        class="bg-blue-500 border border-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-transparent hover:text-blue-500 transition-all duration-500">
                        Купить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* название и язык страницы */
useSeoMeta({
    title: 'Каталог',
    lang: 'ru'
})
</script>