<template>
   <ul class="space-y-2 text-neutral flex mt-3 gap-4">
        <li v-for="social in socialMedia" :key="social.icon" external class="text-lg hover:text-primary">
            <NuxtLink :to="social.link">
                <Icon :name="social.icon" />
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">

const socialMedia = [
    {icon: 'ic:round-facebook' , link: 'https://www.facebook.com'},
    {icon: 'line-md:instagram' , link: 'https://www.instgram.com'},
    {icon: 'ri:bluesky-fill' , link: 'https://bsky.app/'},
    {icon: 'mdi:linkedin' , link: 'https://www.linkedin.com'},
    {icon: 'mdi:pinterest' , link: 'https://www.pinterest.com/'},
]
</script>