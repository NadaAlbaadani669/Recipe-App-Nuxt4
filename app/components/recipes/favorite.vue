<template>
    <section class="p-6 bg-neutral-100">
        <h3 class="text-xl font-header text-shadow-2xs">
            Most Favorite Recipes
        </h3>
        <div class="flex justify-between text-sm font-primary">
            <p class=" text-secondary">The collection</p>
            <NuxtLink to="/recipes" class="border-b py-1 border-b-primary flex items-center gap-1">
                View All Recipes
                <Icon name="maki:arrow" />
            </NuxtLink>
        </div>
        <!-- recipes list -->
        <div class="fav-recipes mt-2 grid grid-col-1 sm:grid-col-2 md:grid-cols-3 gap-14">
           <div v-for="recipe in data?.recipes" :key="recipe.id">
            <RecipesCard :recipe="recipe" />
           </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { type RecipesResponse } from '@/types/types';
const { data ,error } = await useFetch<RecipesResponse>('https://dummyjson.com/recipes?limit=6');


</script>

<style scoped>

</style>