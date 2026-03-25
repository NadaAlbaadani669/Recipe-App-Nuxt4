<template>
    <section class="bg-primary-100 py-5 sm:py-18 flex flex-col justify-center items-center text-center">
      <p class="font-primary text-[12px] text-secondary capitalize">the weekly letter</p>
      <div class="space-y-6 mt-3">
        <h2 class="text-2xl font-header">
          A weekly digest of culinary inspiration.
        </h2>
        <p class="font-primary text-xs">
          Sign up for our weekly editorial newsletter curated recipes ,<br> kitchen secrets, and seasonal inspiration delivered to your<br> inbox .
        </p>
        <div class="flex flex-col sm:flex-row p-4 gap-2 font-primary justify-center">
          <input type="text" class="input w-64 shadow" placeholder="Email">
          <button class="hero-btn bg-primary text-white capitalize">subscribe</button>
        </div>
      </div>
      <SharedSocial />
    </section>
</template>

<script lang="ts" setup>

</script>