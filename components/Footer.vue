<template>
    <footer class="bg-[#373737] py-12 px-6 w-full col-span-full text-white">
        <div class="wrapper mx-auto flex max-lg:flex-col lg:justify-between gap-8">
            <!-- Описание -->
            <p class="text-gray-400 text-base leading-relaxed max-w-xl">
                Профессиональное изготовление, ремонт и восстановление деталей с 2025 года. Мы гарантируем качество и
                надёжность.
            </p>

            <!-- Контакты -->
            <div class="flex flex-col gap-4">
                <p class="text-lg font-semibold text-gray-200">Контакты</p>
                <div class="flex items-center gap-3">
                    <Icon class="text-xl text-gray-300 shrink-0" name="material-symbols:globe-location-pin" />
                    <p class="text-gray-400 text-base">г. Челябинск, ул. Промышленная 1В</p>
                </div>
                <div class="flex gap-3">
                    <Icon class="text-xl text-gray-300 shrink-0 mt-1" name="material-symbols:call" />
                    <div class="flex flex-col gap-2">
                        <NuxtLink to="tel:+79507208655" class="text-gray-400 text-base hover:text-blue-500 transition-all duration-500">+7 (950) 720-86-55</NuxtLink>
                        <NuxtLink to="tel:+73512489005" class="text-gray-400 text-base hover:text-blue-500 transition-all duration-500">+7 (351) 248-90-05</NuxtLink>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <Icon class="text-xl text-gray-300 shrink-0" name="material-symbols:alternate-email" />
                    <NuxtLink to="mailto:info@tsv74.ru" class="text-gray-400 text-base hover:text-blue-500 transition-all duration-500">info@tsv74.ru</NuxtLink>
                </div>
            </div>

            <!-- Навигация и соцсети -->
            <div class="flex flex-col gap-4">
                <p class="text-lg font-semibold text-gray-200">Навигация</p>
                <div class="flex flex-col gap-2">
                    <NuxtLink to="/services" class="text-gray-400 text-base hover:text-blue-500 transition-all duration-500">Главная
                    </NuxtLink>
                    <NuxtLink to="/catalog" class="text-gray-400 text-base hover:text-blue-500 transition-all duration-500">Каталог продукции</NuxtLink>
                    <NuxtLink to="/about" class="text-gray-400 text-base hover:text-blue-500 transition-all duration-500">О компании</NuxtLink>
                </div>
            </div>
        </div>

        <!-- Копирайт -->
        <div
            class="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-600 flex flex-col sm:flex-row sm:justify-between gap-4 text-gray-400 text-sm">
            <p>ООО "Центр восстановления" 2025</p>
            <p>© Все права защищены</p>
        </div>
    </footer>
</template>

<script setup>

</script>