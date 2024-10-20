<template>
  <div>
    <Nav></Nav>
    <div class="py-8 px-6 lg:py-32 lg:px-32">
      <Title title="Ziboueltte"></Title>
      <h2 class="text-lg leading-loose mt-6 max-w-xl mx-auto text-center">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</h2>
      <div class="flex items-center justify-center mt-10 gap-x-6">
        <a href="#" class="font-bold text-sm py-2 rounded-md bg-slate-400 text-white px-3">Get started</a>
        <a href="#" class="font-bold text-sm py-2 px-3">Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <div class="py-8 px-6 lg:py-4 lg:px-32">
      <div class="flex flex-col full">
        <div class="full flex flex-row">
          <div class="w-1/2">
            test
          </div>
          <div class="w-1/2">
            
          </div>
        </div>
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