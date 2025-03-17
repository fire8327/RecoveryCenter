<template>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Мы оказываем следующие виды услуг:</p>
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
                <span class="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full shrink-0">1</span>
                <p class="text-gray-700 text-lg">Изготовление деталей по чертежам и индивидуальным проектам</p>
            </div>
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
                <span class="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full shrink-0">2</span>
                <p class="text-gray-700 text-lg">Проведение ремонтных и восстановительных работ металлических изделий
                </p>
            </div>
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
                <span class="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full shrink-0">3</span>
                <p class="text-gray-700 text-lg">Проверка деталей на соответствие стандартам качества</p>
            </div>
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
                <span class="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full shrink-0">4</span>
                <p class="text-gray-700 text-lg">Проведение обслуживания по гарантии деталей, изготовленных в нашей
                    компании</p>
            </div>
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
                <span class="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full shrink-0">5</span>
                <p class="text-gray-700 text-lg">Проектирование изделий</p>
            </div>
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
                <span class="flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full shrink-0">6</span>
                <p class="text-gray-700 text-lg">Выполнение конструкторской документации по техническому заданию или
                    образцам деталей</p>
            </div>
        </div>
        <p>Мы предлагаем услуги металлообработки на заказ, в том числе ремонт вышедших из строя изделий. Возможность
            ремонта оценивается нашими специалистами, если проведение его невозможно или нерационально, то вам предложат
            изготовление аналогичной новой. Она будет не менее надежна и безопасна. Изготовление деталей (в том числе
            токарных и цилиндрических) возможно провести в кратчайшие сроки. Благодаря этому время простоя оборудования
            значительно сократиться, а в отдельных случаях его можно будет и вовсе избежать.</p>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Наши услуги</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
                <img src="/images/services/1.jpg" class="w-full object-cover aspect-video">
                <div class="p-4">
                    <p class="text-xl font-mono font-semibold mb-2">Восстановление деталей</p>
                    <p class="text-sm line-clamp-3">
                        Восстанавливаем изношенные и повреждённые детали с использованием современных технологий.
                        Повышаем срок службы деталей, минимизируя затраты на замену.
                    </p>
                </div>
            </div>

            <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
                <img src="/images/services/2.jpg" class="w-full object-cover aspect-video">
                <div class="p-4">
                    <p class="text-xl font-mono font-semibold mb-2">Восстановление крановых колёс</p>
                    <p class="text-sm line-clamp-3">
                        Восстанавливаем крановые колёса с восстановлением геометрии и поверхностей качения. Устраняем
                        трещины и износ, продлевая срок службы оборудования.
                    </p>
                </div>
            </div>

            <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
                <img src="/images/services/3.jpg" class="w-full object-cover aspect-video">
                <div class="p-4">
                    <p class="text-xl font-mono font-semibold mb-2">Восстановление валов</p>
                    <p class="text-sm line-clamp-3">
                        Проводим восстановление валов с восстановлением посадочных мест и поверхностей. Повышаем
                        устойчивость к нагрузкам и износу.
                    </p>
                </div>
            </div>

            <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
                <img src="/images/services/4.jpg" class="w-full object-cover aspect-video">
                <div class="p-4">
                    <p class="text-xl font-mono font-semibold mb-2">Восстановление катков, роликов</p>
                    <p class="text-sm line-clamp-3">
                        Восстанавливаем катки и ролики с заменой изношенных элементов. Восстанавливаем геометрию и
                        обеспечиваем плавный ход механизма.
                    </p>
                </div>
            </div>

            <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
                <img src="/images/services/5.jpg" class="w-full object-cover aspect-video">
                <div class="p-4">
                    <p class="text-xl font-mono font-semibold mb-2">Механическая обработка</p>
                    <p class="text-sm line-clamp-3">
                        Выполняем токарную, фрезерную и шлифовальную обработку металлов. Обеспечиваем точность и
                        соответствие требованиям чертежей.
                    </p>
                </div>
            </div>

            <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
                <img src="/images/services/6.jpg" class="w-full object-cover aspect-video">
                <div class="p-4">
                    <p class="text-xl font-mono font-semibold mb-2">Изготовление деталей по чертежам</p>
                    <p class="text-sm line-clamp-3">
                        Изготавливаем детали по индивидуальным чертежам с соблюдением всех параметров. Гарантируем
                        высокое качество и точность готовых изделий.
                    </p>
                </div>
            </div>

        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Почему выбирают "Центр восстановления"?</p>
        <p>Услуги по металлообработке деталей выполняют специалисты, имеющие высокую квалификацию и большой опыт работы
            в этой сфере. Наши мастера внимательно следят за новинками в сфере металлообработки. Они осваивают новые
            технологии в этой отрасли, регулярно повышая квалификацию. Изготовление, производство деталей осуществляется
            на современном оборудовании. За всеми технологическими стадиями ведется строгий контроль качества, начиная с
            проверки сырья и материалов. Особенно строго проверяются готовые детали на соответствие ГОСТам, ТУ и другим
            регламентам. Изготовление деталей ведется по ТЗ от заказчика, индивидуальным или типовым проектам. В
            результате качество изделий соответствует отечественным и международным стандартам.</p>
        <p>Основное наше преимущество – индивидуальный подход. При обращении в компанию, к каждому клиенту прикрепляется
            специалист, который будет вести проект. У него вы в любой момент узнаете, на какой стадии находится заказ,
            проконсультируетесь по всем возникшим вопросам.</p>
    </div>
</template>

<script setup>
/* название и язык страницы */
useSeoMeta({
    title: 'Главная',
    lang: 'ru'
})
</script>