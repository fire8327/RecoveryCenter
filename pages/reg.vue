<template>
    <FormKit @submit="regUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center grow">
        <p class="mainHeading">Регистрация</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Фамилия" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
            <FormKit v-model="user.name" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Имя" name="Имя" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
            <FormKit v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Отчество" name="Отчество" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.login" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Логин" name="Логин" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
            <FormKit v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-mono" type="password" placeholder="······" name="Пароль" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
        </div>
        <FormKit v-model="user.phone" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
        <FormKit v-model="user.email" validation="required|email" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Email" name="Email" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500"/>
        <button type="submit" class="px-4 py-2 border border-blue-500 bg-blue-500 text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-blue-500 hover:bg-transparent">Регистрация</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-blue-500"></div>  
            <p class="font-semibold font-mono tracking-widest text-blue-500">или</p>
            <div class="w-1/3 h-px bg-blue-500"></div>  
        </div>
        <NuxtLink to="/auth" class="mx-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-full w-[160px] text-center transition-all duration-500 hover:text-white hover:bg-blue-500">Вход</NuxtLink>
    </FormKit>
</template>

<script setup>
/* создание пользователя */
const user = ref({
    surname: "",
    name: "",
    patronymic: "",
    login: "",
    password: "",
    phone: "",
    email: ""
})
</script>