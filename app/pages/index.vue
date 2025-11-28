<script setup>

useHead({
  title: "RV / Home",
  meta: [
    { name: 'description', content: 'Rishi Viswanathan - Software Developer specializing in application development and deep learning.' },
    { name: 'keywords', content: 'Rishi Viswanathan, software developer, application development, deep learning, AI, machine learning' },
    { name: 'author', content: 'Rishi Viswanathan' }
  ]
})

const bio = [
  "Hi, I’m Rishi, a student and developer with a passion for application development and deep learning. I enjoy building thoughtful, user-centric solutions while exploring the potential of intelligent systems to solve real-world challenges.",
  "In the development space, I focus on creating scalable and maintainable applications that deliver seamless user experiences. Alongside this, I explore the world of deep learning, working on projects that apply AI techniques to uncover insights, automate tasks, and enhance functionality across domains.",
  "Outside of coding, I enjoy casual gaming, watching anime, and experimenting with 3D modeling as a creative outlet."
];

const socials = [
  { name: 'GitHub', icon: 'line-md:github', url: 'https://github.com/risv1' },
  { name: 'LinkedIn', icon: 'line-md:linkedin', url: 'https://www.linkedin.com/in/rishiviswanathan16' },
  { name: 'Twitter', icon: 'line-md:twitter-x', url: 'https://x.com/RishiV076' }
];
</script>

<template>
  <main class="font-roboto px-6">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white tracking-tight">Rishi Viswanathan</h1>
        <h2 class="text-xl md:text-3xl font-light mb-12 text-neutral-900 dark:text-neutral-200">Software Developer</h2>
      </div>
      
      <div class="space-y-6 mb-16 text-base md:text-lg leading-relaxed">
        <p v-for="(paragraph, index) in bio" :key="index" class="text-neutral-700 dark:text-neutral-300">
          {{ paragraph }}
        </p>
      </div>
      
      <div class="flex justify-center space-x-6 md:space-x-8">
        <a 
          v-for="social in socials" 
          :key="social.name"
          :href="social.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-3 md:p-4 rounded-2xl bg-white hover:bg-neutral-50 dark:bg-black dark:hover:bg-neutral-950 transition-all duration-300 decoration-none border border-neutral-200 dark:border-neutral-800"
        >
          <Icon :name="social.icon" class="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
          <span class="sr-only">{{ social.name }}</span>
        </a>
      </div>
    </div>
  </main>
</template>