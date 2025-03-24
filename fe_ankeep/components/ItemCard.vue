<script setup>
const item = defineProps({
    title: String,
    link: String
})
</script>
<template>
    <div class=""> {{ item.title }}</div>
    <div> {{ item.link }}</div>
</template>