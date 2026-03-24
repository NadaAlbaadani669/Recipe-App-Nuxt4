<template>
    <section class="flex flex-col sm:flex-row space-y-3 justify-between font-primary bg-primary-100 px-6 py-14 border-t border-t-neutral-50">
        <div class="space-y-2">
            <h3 class="font-header">Editorial Gastronomy</h3>
            <p class="text-neutral text-sm">Celebrating the intersection of art, culture, and the <br /> culinary arts. A curated space
                for the modern cook.
            </p>
        </div>
        <div class="space-y-3">
            <h4 class="text-primary font-header">Explore</h4>
            <ul class="space-y-2">
                <li v-for="page in explorePages" :key="page.name" class="text-sm hover:text-primary">
                    <NuxtLink :to="page.link">{{ page.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="space-y-3">
            <div>
                <h4 class="text-primary font-header">Follow us</h4>
                <SharedSocial />
            </div>
            <div class="mt-6 text-xs">
                © 2026 Editorial Gastronomy. All rights reserved.
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const explorePages = [
    { name : 'Privacy & Policy' , link: '/'},
    { name : 'Terms of Services' , link: '/'},
    { name : 'Newsletter' , link: '/'},
    { name : 'contact' , link: '/'},
]

</script>