<script setup lang="ts">
defineProps<{
    certificates: {
        name: string;
        icon: string;
        link: string;
        preview: string;
    }[]
}>()
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold text-black dark:text-white mb-6">Certifications</h2>
        <div v-if="certificates.length > 0" 
             class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="cert in certificates" :key="cert.name"
                 class="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-950/20 
                        border border-neutral-200 dark:border-neutral-800
                        transition-all duration-300 ease-in-out
                        hover:shadow-lg hover:scale-[1.02]
                        group flex flex-col">
                <a :href="cert.link" 
                   target="_blank"
                   class="block no-underline flex flex-col h-full">
                    <div class="flex items-center space-x-4 mb-4">
                        <img :src="cert.icon" 
                             alt="Certificate Icon"
                             class="w-20 h-20 object-contain" />
                        <h3 class="text-xl font-semibold text-black dark:text-white
                                 group-hover:text-red-500 transition-colors duration-300">
                            {{ cert.name }}
                        </h3>
                    </div>
                    <img :src="cert.preview"
                         alt="Certificate Preview"
                         class="w-full h-48 object-cover rounded-lg
                                transition-transform duration-300
                                group-hover:scale-[1.05] flex-grow" />
                </a>
            </div>
        </div>
        <div v-else
             class="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-950 
                    border border-neutral-200 dark:border-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400 text-center">
                Certificates coming soon...
            </p>
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