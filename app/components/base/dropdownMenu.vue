<template>
    <div 
        v-show="show" 
        ref="target" 
        class="shadow-lg font-primary border border-gray-100 rounded flex flex-col gap-2 absolute top-6 left-4 bg-white z-50"
    >
        <slot /> 
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    ignoreEl?: any,
}>();

const target = ref(null);
const show = defineModel<boolean>();

onClickOutside(target, ()=>{
    show.value = false;
}, {
    ignore: [props.ignoreEl],
})
</script>