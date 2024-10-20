<template>
<h1 class="text-green-500 text-center lg:text-4xl text-3xl font-bold">{{ title }}</h1>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
    .title {
    font-size: 2em;
    color: #2c3e50;
    text-align: center;
    margin: 20px 0;
    }
</style>
