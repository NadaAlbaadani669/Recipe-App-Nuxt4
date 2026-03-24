<template>
    <div class="sticky top-0 z-50 shadow flex justify-between items-center p-4 bg-neutral-100">
        <!-- logo and burger menu -->
        <div class="gap-2 items-center relative flex">
            <div class="flex sm:hidden">
                <!-- TODO: fix the outside click when click on burger button -->
                <button @click.stop="toggleMenu" ref="burger">
                    <Icon name="material-symbols:menu-rounded" />
                </button>
                <BaseDropdownMenu v-model="showMenu" :ignore-el="burger">
                    <ul class="p-2 space-y-4">
                        <li v-for="page in pages" :key="page.name">
                            <NuxtLink 
                                @click="showMenu = false" 
                                :to="page.link"
                                class="px-6 hover:bg-gray-50 text-center"
                            >
                                {{ page.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </BaseDropdownMenu>
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
const burger = ref(null);

const pages = [
    { name: 'home', link :'/'},
    { name: 'recipes', link :'/recipes'},
    { name: 'about', link :'/about'},
] 

const toggleMenu = ()=>{
    showMenu.value = !showMenu.value
}
</script>