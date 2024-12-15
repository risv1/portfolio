<script setup lang="ts">
definePageMeta({
  title: 'Rishi Viswanathan',
  description: 'I am a full-stack developer with a passion for building beautiful and functional web applications.',
})

</script>

<template>
  <main
    class="min-h-screen w-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 relative">
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-900/10 dark:to-pink-900/10 
            transform transition-all duration-1000 hover:scale-110"></div>
      <div v-for="n in 3" :key="n"
        class="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" :class="[
          n === 1 ? 'bg-purple-300 dark:bg-purple-700 w-72 h-72 left-0 top-10' : '',
          n === 2 ? 'bg-pink-300 dark:bg-pink-700 w-96 h-96 right-0 bottom-10' : '',
          n === 3 ? 'bg-indigo-300 dark:bg-indigo-700 w-64 h-64 left-1/2 top-1/2' : ''
        ]">
      </div>
    </div>
    <div class="fixed top-5 right-5 z-20">
      <Theme />
    </div>
    <div class="relative z-10 w-full">
      <div class="py-8 lg:pr-0 pr-7">
        <Hero />
        <About />
        <Journey />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-20px) translateX(15px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>