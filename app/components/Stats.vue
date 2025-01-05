<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    stats: {
        github: string;
        languages: string;
    }
}>()

const isGithubLoading = ref(true)
const isLanguagesLoading = ref(true)
</script>

<template>
    <div>
        <h2 class="text-2xl font-bold text-black dark:text-white mb-4 ">Stats</h2>
        <div class="flex md:flex-row flex-col gap-4">
            <div class="md:w-1/2 w-full relative">
                <div v-if="isGithubLoading" 
                     class="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 rounded-lg">
                    <div class="animate-spin rounded-full h-8 w-8 border-2 border-red-500 border-t-transparent"></div>
                </div>
                <img :src="stats.github" 
                     alt="Github Stats" 
                     class="w-full rounded-lg col-span-2 md:col-span-3"
                     @load="isGithubLoading = false"
                     :class="{ 'opacity-0': isGithubLoading }" />
            </div>

            <div class="md:w-1/2 w-full relative">
                <div v-if="isLanguagesLoading"
                     class="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 rounded-lg">
                    <div class="animate-spin rounded-full h-8 w-8 border-2 border-red-500 border-t-transparent"></div>
                </div>
                <img :src="stats.languages" 
                     alt="Most Used Languages" 
                     class="w-full rounded-lg"
                     @load="isLanguagesLoading = false"
                     :class="{ 'opacity-0': isLanguagesLoading }" />
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    transition: opacity 0.3s ease-in-out;
}

img:not(.opacity-0) {
    opacity: 1;
}
</style>