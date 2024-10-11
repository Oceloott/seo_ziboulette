<template>
  <div>
    <Nav></Nav>
    <div class="grid">
      <div class="col-12">
        <Title title="Ziboueltte"></Title>
      </div>

    </div>
  </div>
</template>
<script setup>
import Nav from '@/components/Nav.vue'
import Title from '@/components/Title.vue'
import { ref } from 'vue'
const test = ref("test")
</script>