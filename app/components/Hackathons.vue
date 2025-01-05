<script setup lang="ts">
defineProps<{
    hackathons: {
        name: string;
        description: string;
        github?: string;
        devfolio?: string;
    }[]
}>()
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold text-black dark:text-white mb-6">Hackathons</h2>
        <div class="space-y-6">
            <div v-for="hackathon in hackathons" :key="hackathon.name" class="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-950/20
                       border border-neutral-200 dark:border-neutral-800
                       transition-all duration-300 ease-in-out
                      group hover:shadow-lg hover:scale-[1.02]">
                <h3 class="text-2xl font-semibold text-black dark:text-white
                                 group-hover:text-red-500
                                 transition-colors duration-300">
                    {{ hackathon.name }}
                </h3>
                <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                    {{ hackathon.description }}
                </p>
                <div class="flex space-x-4 mt-2">
                    <a v-if="hackathon.github" :href="hackathon.github" target="_blank" class="no-underline flex items-center space-x-2 px-4 py-2 rounded-lg 
                              bg-neutral-200 dark:bg-neutral-900
                              text-neutral-800 dark:text-neutral-200
                              hover:bg-red-500 hover:text-white
                              transition-all duration-300 ease-in-out">
                        <Icon name="mdi:github" class="h-5 w-5" />
                        <span>GitHub</span>
                    </a>
                    <a v-if="hackathon.devfolio" :href="hackathon.devfolio" target="_blank" class="no-underline flex items-center space-x-2 px-4 py-2 rounded-lg 
                              bg-neutral-200 dark:bg-neutral-900
                              text-neutral-800 dark:text-neutral-200
                              hover:bg-red-500 hover:text-white
                              transition-all duration-300 ease-in-out">
                        <Icon name="simple-icons:devpost" class="h-5 w-5" />
                        <span>Devfolio</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@media (prefers-color-scheme: dark) {
    .hover\:shadow-lg:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3),
            0 4px 6px -2px rgba(0, 0, 0, 0.2);
    }
}
</style>