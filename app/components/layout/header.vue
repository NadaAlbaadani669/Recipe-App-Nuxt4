<template>
    <div class="flex justify-between items-center p-4 bg-gray-100">
        <!-- logo and burger menu -->
        <div class="gap-2 items-center relative flex">
            <div class="flex sm:hidden">
                 <button @click="toggleMenu" class="" >
                    <Icon name="material-symbols:menu-rounded" />
                </button>
                
            </div>
            <NuxtLink to="/">
                <h2 class="sm:text-xl font-header italic">Editorial Gastronomy</h2>
            </NuxtLink>
        </div>

        <!-- page's links -->
        <div class="hidden sm:flex font-primary">
            <ul class="flex gap-6">
                <li v-for="page in pages" :key="page.name">
                    <NuxtLink 
                        :to="page.link" 
                        class="py-1 "
                        :class="{'text-primary border-b-2 border-b-primary' : route.path === page.link}"
                    >
                        {{ page.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- actions -->
        <div class="flex gap-2 sm:gap-4 items-center text-primary font-semibold sm:text-xl">
            <button class="hover:cursor-pointer">
                <Icon name="material-symbols:search-rounded"/>
            </button>
            <button class="hover:cursor-pointer">
                <Icon name="gg:profile" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const showMenu = ref(false);

const pages = [
    { name: 'home', link :'/'},
    { name: 'recipes', link :'/recipes'},
    { name: 'about', link :'/about'},
] 

const toggleMenu : ()=>void = ()=>{
    showMenu.value = !showMenu.value
}
</script>