<template>
    <FormKit @submit="regUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center grow">
        <p class="mainHeading">Вход</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.login" validation="required" messages-class="text-[#E9556D] font-mono" type="text" placeholder="Логин" name="Логин" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
            <FormKit v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-mono" type="password" placeholder="······" name="Пароль" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-white rounded-xl border border-transparent w-full transition-all duration-500 focus:border-blue-500 shadow-md"/>
        </div>
        <button type="submit" class="px-4 py-2 border border-blue-500 bg-blue-500 text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-blue-500 hover:bg-transparent">Вход</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-blue-500"></div>  
            <p class="font-semibold font-mono tracking-widest text-blue-500">или</p>
            <div class="w-1/3 h-px bg-blue-500"></div>  
        </div>
        <NuxtLink to="/reg" class="mx-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-full w-[160px] text-center transition-all duration-500 hover:text-white hover:bg-blue-500">Регистрация</NuxtLink>
    </FormKit>
</template>

<script setup>
/* название и язык страницы */
useSeoMeta({
    title: 'Вход',
    lang: 'ru'
})


/* создание пользователя */
const user = ref({
    login: "",
    password: ""
})
</script>