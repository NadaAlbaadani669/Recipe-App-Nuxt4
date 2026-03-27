<template>
 <section class="p-10 bg-neutral-50">
  <div v-if="pending">
    <SharedLoading />
  </div>
  <div v-else>
    <div v-if="recipe">
      <section>
        <h2 class="text-3xl font-header italic">{{ recipe.name }}</h2>
        <div class="flex flex-col md:flex-row mt-3 gap-x-6 gap-y-1 text-primary-600 font-primary text-xs">
          <p class="flex items-center gap-1">
            <Icon name="mdi:star" />
            {{ recipe.rating }} ({{ recipe.reviewCount }} Reviews)
          </p>
          <p class="flex items-center gap-1">
            <Icon name="mdi:clock-outline" />
            {{ recipe.cookTimeMinutes }} MINS PREP / {{ recipe.prepTimeMinutes }} MINS TOTAL
          </p>
          <p class="flex items-center gap-1">
            <Icon name="mdi:fire" />
            {{ recipe.caloriesPerServing }} KCAL
          </p>
          <p class="flex items-center gap-1">
            <Icon name="mdi:silverware-fork-knife" />
            SERVES {{ recipe.servings }}
          </p>
        </div>
        <div class="overflow-hidden rounded-xl mt-3 h-64 md:h-110 w-full">
          <NuxtImg
            :src="recipe.image"
            densities="1x"
            format="webp"
            class="w-full h-full object-cover"
          />

        </div>
      </section>
      <!-- ingredient and prepration -->
      <div class="flex flex-col md:flex-row gap-x-10 mt-10">
        <section class="w-full md:w-1/3 rounded-xl bg-neutral-100 p-5 h-100 overflow-y-scroll no-scrollbar">
          <h4 class="text-lg italic font-header py-1 border-b border-b-neutral-200">Ingredients</h4>
          <ul class="space-y-3 mt-4 font-primary">
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index" class="flex text-sm gap-2">
              <input type="checkbox">
              <label :for="ingredient">{{ ingredient }}</label>
            </li>
          </ul>
        </section>
        <section class="p-4 w-full md:w-2/3">
          <h3 class="italic font-header text-xl">Prepartion</h3>
          <ul class="mt-4 font-primary space-y-3">
            <li v-for="(instruction, index) in recipe.instructions" :key="index" class="flex gap-x-4 items-center">
              <p class="text-primary-300 text-xl">{{ index + 1 }}.</p>
              <p class="text-sm">{{ instruction }}</p>
            </li>
          </ul>
        </section>

      </div>
      
    </div>
    <div v-else class="flex justify-center flex-col items-center gap-4">
      Something wernt wrong
      <button @click="refresh()" class="hero-btn text-white bg-primary">
        Refresh
      </button>
    </div>
    <!-- recipe description  -->
  </div>
 </section>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data:recipe , pending, error, refresh} =await useSingleRecipe(
  computed(()=> route.params.id)
);


</script>

<style>

</style>