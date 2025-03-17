<template>
    <!-- Форма изменения личных данных -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Личные данные</p>
        <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col w-full md:w-2/3 lg:w-1/2">
                <FormKit v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Фамилия" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
                <FormKit v-model="user.name" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Имя" name="Имя" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
                <FormKit v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Отчество" name="Отчество" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
            </div>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col w-full md:w-2/3 lg:w-1/2">
                <FormKit v-model="user.login" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Логин" name="Логин" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
                <FormKit v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-mono" type="password" placeholder="······" name="Пароль" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
            </div>
            <FormKit v-model="user.phone" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
            <FormKit v-model="user.email" validation="required|email" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Email" name="Email" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
            <button type="submit" class="px-4 py-1.5 border border-blue-500 bg-blue-500 text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-blue-500 hover:bg-transparent">Обновить</button>
        </FormKit>
    </div>

    <div class="flex flex-col gap-6">
        <p class="mainHeading">Заявки</p>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" v-if="bids">
            <div class="flex flex-col bg-white rounded-xl overflow-hidden shadow-md p-4 transition-all duration-500 hover:-translate-y-4" v-for="bid in bids">
                <p class="text-xl"><span class="font-semibold font-mono">Дата заказа:</span> {{ new Date(bid.created_at).toLocaleString() }}</p>
                <p class="text-base"><span class="font-semibold font-mono">ФИО:</span> {{ bid.users.surname }} {{ bid.users.name }} {{ bid.users.patronymic }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Номер </span>телефона: {{ bid.users.phone }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Email:</span> {{ bid.users.email }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Продукт:</span> {{ bid.products.name }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Количество:</span> {{ bid.count }}</p>                
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-6">
        <p class="mainHeading">Заказы</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" v-if="carts">
            <div class="flex flex-col bg-white rounded-xl overflow-hidden shadow-md p-4 transition-all duration-500 hover:-translate-y-4" v-for="cart in carts">
                <p class="text-xl"><span class="font-semibold font-mono">Id заказа:</span> {{ cart.id }}</p>
                <p class="text-base"><span class="font-semibold font-mono">ФИО:</span> {{ cart.users.surname }} {{ cart.users.name }} {{ cart.users.patronymic }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Номер </span>телефона: {{ cart.users.phone }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Продукт:</span> {{ cart.products.name }}</p>
                <p class="text-base"><span class="font-semibold font-mono">Количество:</span> {{ cart.count }}</p>                
            </div>
        </div>
    </div>

    <!-- Выход из аккаунта -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Выход из аккаунта</p>
        <button @click="logout" class="px-4 py-1.5 border border-blue-500 bg-blue-500 text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-blue-500 hover:bg-transparent">Выход</button>   
    </div>
</template>

<script setup>
/* название и язык страницы */
useSeoMeta({
    title: 'Профиль',
    lang: 'ru'
})


/* подключение БД и проверка пользователя */
const supabase = useSupabaseClient() 
const { authenticated, id } = storeToRefs(useUserStore())

const { data:users, error:usersError } = await supabase
.from('users')
.select('*')   
.eq('id', id.value)  


/* создание сообщений и роутера */
const { showMessage } = useMessagesStore()
const router = useRouter()


/* создание формы пользователя */
const user = ref({
    name: users[0].name,
    surname: users[0].surname,
    patronymic: users[0].patronymic,
    login: users[0].login,
    email: users[0].email,
    phone: users[0].phone,
    password: users[0].password
}) 


/* обновление данных */
const updateUser = async () => {        
    const { data, error } = await supabase
    .from('users')
    .update(user.value)
    .eq('id', id.value)
        
    if(error) {
        console.log(error)
        showMessage("Произошла ошибка!", false)   
    } else {            
        showMessage("Данные обновлены!", true)   
    }
}


/* заявки */
const { data:bids, error:bidsError } = await supabase
.from('bids')
.select('*, users(*), products(*)')   
.eq('userId', id.value)  


/* заказы */
const { data:carts, error:cartsError } = await supabase
.from('cart')
.select('*, products(*), users(*)')   
.eq('userId', id.value)  
.eq('status', 'Оформлен')  


/* выход из аккаунта */
const { logout } = useUserStore()
</script>