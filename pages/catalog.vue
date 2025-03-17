<template>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Каталог продукции</p>
        <p>Мы работаем как с небольшими компаниями, так и с крупными заводами, предоставляя только качественные запчасти
            с гарантией. Наши специалисты имеют большой опыт работы и готовы предложить решения под индивидуальные
            запросы.</p>
        <div class="flex max-md:flex-col w-full md:items-end md:justify-between gap-4">
            <div class="flex max-md:flex-col md:items-center gap-4">
                <FormKit v-model="sortMethod" validation="required" messages-class="text-[#E9556D] font-mono" type="select"
                    :options="['По умолчанию', 'Цена: по возрастанию', 'Цена: по убыванию', 'Наименование: А-Я', 'Наименование: Я-А']" label="Сортировка" name="filter"
                    outer-class="w-full md:w-fit"
                    input-class="focus:outline-none px-4 py-1.5 bg-white rounded-full border w-full transition-all duration-500 border-blue-500"/>
                <FormKit v-model="selectedType" validation="required" messages-class="text-[#E9556D] font-mono" type="select"
                    :options="['Все', 'Грузоподъёмное', 'Промышленное']" label="Тип" name="type" outer-class="w-full md:w-fit"
                    input-class="focus:outline-none px-4 py-1.5 bg-white rounded-full border w-full transition-all duration-500 border-blue-500"/>
            </div>
            <button @click="resetFilters" class="w-fit px-4 py-1.5 rounded-full bg-red-500 text-white transition-all duration-500 hover:opacity-50">Отменить</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="flex flex-col bg-white rounded-xl overflow-hidden shadow-md" v-for="product in sortedProducts">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" alt="Изображение товара" class="w-full aspect-video object-cover">
                <div class="p-4 flex flex-col gap-3 grow">
                    <p class="text-lg font-semibold text-gray-800">
                        {{product.name}}
                    </p>
                    <p class="text-sm">
                        {{product.description}}
                    </p>
                    <div class="flex flex-col gap-2 mt-auto" v-if="product.type === 'prePriced'">
                        <p class="text-lg font-semibold text-blue-500">
                            {{ product.price.toLocaleString() }} ₽
                        </p>
                        <button
                            class="bg-blue-500 border border-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-transparent hover:text-blue-500 transition-all duration-500">
                            Купить
                        </button>
                    </div>
                    <div class="flex flex-col gap-2 mt-auto" v-if="product.type === 'custom'">
                        <p class="text-lg font-semibold text-blue-500" v-if="product.type === 'custom'">Под заказ</p>
                        <button @click="isFormShow = true"
                            class="bg-blue-500 border border-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-transparent hover:text-blue-500 transition-all duration-500">
                            Оформить заявку
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div @click="isFormShow = false" class="fixed z-[4] inset-0 bg-black/30" :class="{'hidden' : !isFormShow}"></div>
        <div :class="isFormShow ? 'top-1/2 -translate-y-1/2' : 'top-0 -translate-y-[2000px]'" class="flex flex-col gap-6 py-10 px-4 z-[5] bg-white wrapper w-[calc(100%-30px)] sm:w-[calc(100%-40px)] md:w-1/2 xl:w-1/4 left-1/2 -translate-x-1/2 fixed rounded-xl transition-all duration-500">
            <p class="text-2xl font-mono font-semibold text-center">Оформление заявки</p>
            <div class="flex items-center gap-2 w-full max-md:flex-col">
                <button @click="" type="button" class="px-4 py-1.5 border border-blue-500 bg-blue-500 text-white rounded-full w-full md:w-1/2 text-center transition-all duration-500 hover:text-blue-500 hover:bg-transparent">Отправить</button>
                <button @click="isFormShow = false" type="button" class="px-4 py-1.5 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-full w-full md:w-1/2 text-center transition-all duration-500 text-blue-500 bg-transparent">Отменить</button>
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


/* показ формы */
const isFormShow = ref(false)


/* подключение БД */
const supabase = useSupabaseClient()

const { data:products, error } = await supabase
.from('products')
.select('*')   
.order('id', { ascending: true })


/* реактивные переменные для фильтрации и сортировки */
const selectedType = ref('Все') // для фильтра по типу товара
const sortMethod = ref('По умолчанию') // для метода сортировки


/* фильтрация товаров по типу */
const filteredProducts = computed(() => {
  if (selectedType.value === 'Все') {
    return products
  }
  return products.filter(product => product.category === selectedType.value)
})


/* сортировка отфильтрованных товаров */
const sortedProducts = computed(() => {
  const filtered = filteredProducts.value
  if (sortMethod.value === 'По умолчанию') {
    return filtered
  }
  return [...filtered].sort((a, b) => {
    if (sortMethod.value === 'Цена: по возрастанию') {
      return a.price - b.price
    } else if (sortMethod.value === 'Цена: по убыванию') {
      return b.price - a.price
    } else if (sortMethod.value === 'Наименование: А-Я') {
      return a.name.localeCompare(b.name)
    } else if (sortMethod.value === 'Наименование: Я-А') {
      return b.name.localeCompare(a.name)
    }
  })
})


/* отмена фильтрации и сортировки */
const resetFilters = () => {
  selectedType.value = 'Все'
  sortMethod.value = 'По умолчанию'
}
</script>