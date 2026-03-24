<template>
    <section class="flex justify-between font-primary bg-primary-50 px-6 py-14 border-t-2 border-gray-100">
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
                <ul class="space-y-2 text-neutral flex mt-3 gap-4">
                    <li v-for="social in socialMedia" :key="social.icon" external class="text-lg hover:text-primary">
                        <NuxtLink :to="social.link">
                            <Icon :name="social.icon" />
                        </NuxtLink>
                    </li>
                </ul>
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

const socialMedia = [
    {icon: 'ic:round-facebook' , link: 'https://www.facebook.com'},
    {icon: 'line-md:instagram' , link: 'https://www.instgram.com'},
    {icon: 'ri:bluesky-fill' , link: 'https://bsky.app/'},
    {icon: 'mdi:linkedin' , link: 'https://www.linkedin.com'},
]
</script>