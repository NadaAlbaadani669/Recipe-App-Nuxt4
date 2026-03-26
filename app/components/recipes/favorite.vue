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
        
        <div v-if="pending">
            <SharedLoading />
        </div>
        <div v-else>
            <div v-if="error">
                Something went wrong 
                <button @click="refreshFavorites()" class="hero-btn bg-primary text-white mt-4">Refresh</button>
            </div>
            <div v-else="favRecipes" class="fav-recipes mt-2 grid grid-col-1 sm:grid-col-2 md:grid-cols-4 gap-14">
                <RecipesCard v-for="recipe in favRecipes" :key="recipe.id" :recipe="recipe" />
            </div>
        </div>
        

        
    </section>
</template>

<script setup lang="ts">

const { pending , favRecipes, error, refreshFavorites } = await useRecipe();


</script>

<style scoped>

</style>