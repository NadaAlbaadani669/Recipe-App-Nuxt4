import { defineStore } from "pinia";
import type { Recipe } from "@/types/types";

function getRandomRecipes(recipes: Recipe[], count = 6): Recipe[] {
  const shuffled = [...recipes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const useRecipeStore = defineStore("recipe", () => {
  const allRecipes = ref<Recipe[]>([]);
  const favRecipes = ref<Recipe[]>([]);

  function setRecipes(recipes: Recipe[]) {
    allRecipes.value = recipes;
    favRecipes.value = getRandomRecipes(recipes, 8);
  }

  function refreshFavorites() {
    favRecipes.value = getRandomRecipes(allRecipes.value, 6);
  }

  return {
    allRecipes,
    favRecipes,
    setRecipes,
    refreshFavorites,
  };
});