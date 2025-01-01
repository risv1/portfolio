<script setup lang="ts">
useHead({
  title: 'Rishi | Home',
  meta: [
    {
      name: 'description',
      content: 'A simple portfolio website built with Vue 3 and Vite'
    }
  ]
})

</script>

<template>
  <main class="animate-fade-in">
    <Hero />
    <About />
    <TechStack />
  </main>
</template>