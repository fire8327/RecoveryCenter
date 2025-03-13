<template>
    <footer class="bg-[#373737] py-10 px-6 w-full col-span-full">
        <div class="wrapper mx-auto flex flex-col gap-2 md:items-end">
            <div class="flex items-center gap-2">
                <Icon class="text-2xl shrink-0 text-white" name="material-symbols:globe-location-pin" />
                <p class="text-gray-400 text-lg">г. Челябинск, ул. Промышленная 1В</p>
            </div>
            <div class="flex gap-2">
                <Icon class="text-2xl shrink-0 text-white mt-[2px]" name="material-symbols:call" />
                <div class="flex flex-col gap-2">
                    <a href="tel:+79507208655" class="text-gray-400 text-lg hover:text-blue-500 transition-all duration-500">+7 (950) 720-86-55</a>
                    <a href="tel:+73512489005" class="text-gray-400 text-lg hover:text-blue-500 transition-all duration-500">+7 (351) 248-90-05</a>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <Icon class="text-2xl shrink-0 text-white" name="material-symbols:alternate-email" />
                <a href="mailto:info@tsv74.ru"
                    class="text-gray-400 text-lg hover:text-blue-500 transition-all duration-500">info@tsv74.ru</a>
            </div>
        </div>

        <div
            class="wrapper mx-auto mt-8 pt-6 border-t border-gray-600 flex max-sm:flex-col sm:justify-between gap-4 text-gray-400 text-sm">
            <p>ООО "Центр восстановления" 2025</p>
            <p>© Все права защищены</p>
        </div>
    </footer>
</template>

<script setup>

</script>