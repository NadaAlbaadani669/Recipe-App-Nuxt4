import type{Recipe} from '@/types/types';

export const useSingleRecipe = async(id: MaybeRef<string |undefined | string[]>) => {
  const { data, error , pending, refresh } = await useFetch<Recipe>(`https://dummyjson.com/recipes/${unref(id)}`);

  return { data, pending, error ,refresh}
}