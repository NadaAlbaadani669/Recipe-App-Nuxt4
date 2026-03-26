<template>
  <section class="recipes-hero space-y-3 bg-primary-100 p-10 flex flex-col items-center justify-center">
    <h2 class="text-xl sm:text-3xl font-semibold font-header capitalize">
      find your next masterpiece
    </h2>
    <div class="shadow rounded-3xl text-sm w-lg max-w-[95vw] py-1 bg-neutral-50 flex justify-between px-2 border border-neutral-100">
      <input type="text" :placeholder="inputPlaceholder" class="px-3 w-9/10 focus:outline-none ml-2 text-neutral-600 placeholder:text-neutral-300">
      <button class="icon-btn">
        <Icon name="mdi:search" />
      </button>
    </div>
    <!-- filters -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
      <button class="hero-btn bg-neutral-100 justify-center">
        Cuisine
        <Icon name="mdi-light:chevron-down" />
      </button>
      <button class="hero-btn bg-neutral-100 justify-center">
        Meal
        <Icon name="mdi-light:chevron-down" />
      </button>
      <button class="hero-btn bg-neutral-100 justify-center">
        Tags
        <Icon name="mdi-light:chevron-down" />
      </button>
      <button class="hero-btn bg-neutral-100 justify-center">
        Order
        <Icon name="mdi-light:chevron-down" />
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>

const inputPlaceholder = ref('Search ingrediant, cuisines, or techniques...');
</script>