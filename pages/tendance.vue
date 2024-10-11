<template>
    <div>
      <Test />
      <p>{{ test }}</p>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  const test = ref("test")
  </script>