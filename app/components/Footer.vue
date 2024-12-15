<script setup>
const socialLinks = [
  { 
    name: 'GitHub', 
    icon: 'mdi:github', 
    link: 'https://github.com/risv1' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'mdi:linkedin', 
    link: 'https://linkedin.com/in/rishi-viswanathan' 
  },
  { 
    name: 'Twitter', 
    icon: 'mdi:twitter', 
    link: 'https://twitter.com/rishi_dev' 
  }
]
</script>

<template>
    <footer class="bg-inherit py-10">
        <div class="container mx-auto px-4 text-center">
            <div class="flex justify-center space-x-6 mb-6">
                <a v-for="social in socialLinks" :key="social.name" :href="social.link" target="_blank"
                    class="text-black dark:text-white hover:text-gray-600 dark:hover:text-neutral-300">
                    <Icon :name="social.icon" class="text-2xl" />
                </a>
            </div>
            <p class="text-gray-700 dark:text-neutral-300">
                © {{ new Date().getFullYear() }} Rishi Viswanathan. All rights reserved.
            </p>
        </div>
    </footer>
</template>