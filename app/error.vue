<script setup lang="ts">
interface ErrorProps {
  error: {
    statusCode: number
    statusMessage: string
    message: string
  }
}

const props = defineProps<ErrorProps>()

const is404 = computed(() => props.error.statusCode === 404)
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black px-6">
    <div class="text-center max-w-md mx-auto">
      <div class="mb-8">
        <h1 class="text-8xl md:text-9xl font-bold text-black dark:text-white opacity-20">
          {{ error.statusCode }}
        </h1>
      </div>
      
      <div class="space-y-4 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-black dark:text-white">
          {{ is404 ? 'Page Not Found' : 'Something went wrong' }}
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
          {{ is404 
            ? "The page you're looking for doesn't exist or has been moved." 
            : error.statusMessage || 'An unexpected error occurred.'
          }}
        </p>
      </div>

        <NuxtLink 
          to="/" 
          class="inline-flex decoration-none items-center justify-center px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
        >
          <Icon name="mdi:home" class="mr-2" />
          Go Home
        </NuxtLink>
    </div>
  </div>
</template>