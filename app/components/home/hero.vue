<template>
    <section class="bg-primary-100 sm:p-2 ">
        <!-- big devices -->
        <div class="hidden sm:flex px-12 lg:px-32 py-14 justify-between items-center max-w-7xl mx-auto ">
            <div class="space-y-10 w-1/2 flex flex-col items-start ">
                <h2 class="text-5xl italic font-header">
                    Discover your 
                    <br><span class="text-primary">next favorite</span>
                    <br>meal
                </h2>
                <p class="text-neutral font-primary">Curated recipes from the world's most 
                    <br>passionate chefs, delivered with editorial
                    <br>precision and home-cooked heart.
                </p>
                <div class="flex justify-between gap-8 font-primary">
                   <NuxtLink to="/recipes" class="hero-btn bg-primary text-white">browse all recipes</NuxtLink>
                    <button class="hero-btn bg-neutral-100 text-neutral">today's special</button>
                </div>

            </div>
            <div class="w-1/2 flex justify-start">
                <nuxtImg src="/images/hero.png" format="webp" sizes="654px" densities="x1" />
            </div>
        </div>
        <!-- small screen -->
        <div class="flex sm:hidden justify-center items-center">
            <div 
                class="relative h-90 bg-center w-full bg-cover bg-no-repeat overflow-hidden" 
                :style="{ backgroundImage: 'url(/images/hero2.png)' }"
            >
               <div class="absolute top-6 space-y-6 left-6">
                 <h2 class="text-3xl italic font-header text-white">Discover your next <br>favorite meal</h2>
                 <NuxtLink to="/recipes" class="hero-btn bg-primary text-white">browse all recipes</NuxtLink>
               </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

</script>