<template>
  <section class="bg-neutral-100 p-4">
    <h2 class="text-2xl font-header">Recipes </h2>
    <div class="recipes-list mt-4 font-primary">
      <div v-if="pending">
        <SharedLoading />
      </div>
      <div v-else>
        <div v-if="error">
          Something Went wrong 
          <button @click="refresh()" class="hero-btn mt-4 bg-primary text-white">
            Refresh
          </button>
        </div>
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          <RecipesCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { recipes, pending, error, refresh } = await useRecipe();
</script>

<style>

</style>