<template>
  <NuxtLink :to="link" class="space-y-1 cursor-pointer hover:scale-105"> 
    <div class="rounded-lg overflow-hidden">
      <NuxtImg :src="recipe.image" densities="x1" format="webp" sizes="xs:100vw sm:50vw lg:360px" />
    </div>
    <div class="text-[10px] flex justify-between font-primary" :class="(recipe.id + 1) % 2 !== 0 ? 'text-primary' : 'text-secondary'">
      <p>{{ recipe.cuisine }}</p>
      <p>
        {{ recipe.rating }} 
        <Icon name="material-symbols-light:star" />
      </p>
    </div>
    <p class="line-clamp-2 font-header">
      {{ recipe.name }}
    </p>
    <div class="text-[10px] text-primary-700 flex gap-4 font-primary">
      <p class="flex items-center gap-1">
        <Icon name="mdi:clock-outline" />
        {{ recipe.prepTimeMinutes }} MINS
      </p>
      <p class="flex items-center gap-1">
        <Icon name="mdi:silverware-fork-knife" />
        {{ recipe.caloriesPerServing }} KCAL
      </p>
    </div>
    
  </NuxtLink>
</template>

<script lang="ts" setup>
import { type Recipe } from '~/types/types';
const props = defineProps<{
  recipe : Recipe
}>()

const link : string = `/recipes/${props.recipe.id}`;
</script>