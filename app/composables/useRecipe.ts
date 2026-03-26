import type { RecipesResponse } from "~/types/types";
import { useRecipeStore } from "@/stores/recipe";


export const useRecipe = async() => {
  const recipeStore = useRecipeStore();
  const { data, pending , error, refresh } =  await useFetch<RecipesResponse>('https://dummyjson.com/recipes');

  watchEffect(() => {
    if (data.value?.recipes?.length) {
      recipeStore.setRecipes(data.value.recipes);
    }
  });


  return {
    recipes: computed(() => recipeStore.allRecipes),
    favRecipes: computed(() => recipeStore.favRecipes),
    pending,
    error,
    refresh,
    refreshFavorites: recipeStore.refreshFavorites,
  }
}
