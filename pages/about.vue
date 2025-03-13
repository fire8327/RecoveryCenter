<template>
    <iframe class="border border-white rounded-xl shadow-xl w-full h-[400px]" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeedcf607e9c49629a9c58a035b2d9726442706a6404485c4d2f3e776c5220514&amp;source=constructor" frameborder="0"></iframe>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">О компании</p>
        <p>ООО "Центр восстановления" оказывает широкий спектр услуг для бизнеса. Мы работаем как с небольшими
            компаниями, так и с крупными заводами.</p>
        <p>Мы готовы предоставить вам полный спектр услуг по изготовлению интересующей вас продукции, её ремонту и
            восстановлению, проверке качества и гарантийному обслуживанию.</p>
        <p>В нашей компании работают квалифицированные специалисты с большим опытом работы. Вся продукция имеет паспорта
            и сертификаты качества.</p>
        <p>Связаться с нами вы можете по телефонам, указанным на сайте.</p>
        <p>Мы всегда рады клиентам и готовы работать на взаимовыгодных условиях. Рассматриваем предложения по
            индивидуальным проектам и чертежам заказчиков.</p>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Контактная информация</p>
        <p>Вы можете связаться позвонив или написав нам, или оставить заявку и наши менеджеры свяжутся с Вами:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex flex-col gap-1">
                <p class="text-lg text-blue-500">Адрес для корреспонденции</p>
                <p>454038, г.Челябинск, а/я 4458</p>
            </div>
            <div class="flex flex-col gap-1">
                <p class="text-lg text-blue-500">Производственный цех</p>
                <p>г.Челябинск, ул.Промышленная, д.1В</p>
            </div>
            <div class="flex flex-col gap-1">
                <p class="text-lg text-blue-500">Телефоны</p>
                <NuxtLink to="tel:+79507208655" class="hover:text-blue-500 transition-all duration-500">+7 (950) 720-86-55</NuxtLink>
                <NuxtLink to="tel:+73512489005" class="hover:text-blue-500 transition-all duration-500">+7 (351) 248-90-05</NuxtLink>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <p class="text-lg text-blue-500">Общая почта</p>
                    <NuxtLink to="mailto:info@tsv74.ru" class="hover:text-blue-500 transition-all duration-500">info@tsv74.ru</NuxtLink>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-lg text-blue-500">Технический отдел</p>
                    <NuxtLink to="mailto:tehnolog@tsv74.ru" class="hover:text-blue-500 transition-all duration-500">tehnolog@tsv74.ru</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>