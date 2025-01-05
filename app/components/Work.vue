<script setup lang="ts">
defineProps<{
    experiences: {
        title: string;
        duration: string;
        description: string;
    }[]
}>()
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold text-black dark:text-white mb-6">Work</h2>
        <div class="space-y-6">
            <div v-for="job in experiences" :key="job.title" 
                 class="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-950/20
                        border border-neutral-200 dark:border-neutral-800
                        transition-all duration-300 ease-in-out
                        hover:shadow-lg hover:scale-[1.02]
                        group relative">
                <div class="space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 class="text-2xl font-semibold text-black dark:text-white
                                 group-hover:text-red-500
                                 transition-colors duration-300">
                            {{ job.title }}
                        </h3>
                        <span class="inline-block px-3 py-1 rounded-full 
                                   bg-neutral-200 dark:bg-neutral-900
                                   text-neutral-700 dark:text-neutral-300
                                   text-sm font-medium">
                            {{ job.duration }}
                        </span>
                    </div>
                    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {{ job.description }}
                    </p>
                </div>

                <!-- Optional: Decorative element -->
                <div class="absolute bottom-0 left-0 h-1 bg-red-500 
                           transform scale-x-0 group-hover:scale-x-100
                           transition-transform duration-300 ease-in-out"></div>
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

.group:hover {
    background-image: linear-gradient(
        to bottom right,
        var(--tw-gradient-from, rgb(243 244 246 / 0.1)),
        var(--tw-gradient-to, rgb(243 244 246 / 0))
    );
}

.dark .group:hover {
    background-image: linear-gradient(
        to bottom right,
        var(--tw-gradient-from, rgb(17 24 39 / 0.1)),
        var(--tw-gradient-to, rgb(17 24 39 / 0))
    );
}
</style>