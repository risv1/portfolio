<script setup>
useHead({
    title: 'Rishi | Projects',
    meta: [
        {
            name: 'description',
            content: 'A simple portfolio website built with Vue 3 and Vite'
        }
    ]
})

const projects = [
    {
        title: "Vaidya",
        description: "Making weather based predictions for Crop yield, potential pests and diseases in the current climate, along with prediction of solar and wind power generation and AQI index.",
        projectLink: "https://github.com/risv1/vaidya",
        tag: "ML / Full Stack"
    },
    {
        title: "RATE PyTorch",
        description: "My PyTorch implementation of the RATE model from Egor Cherepanov's research paper.",
        projectLink: "https://github.com/risv1/RATE-pytorch",
        tag: "Machine Learning"
    },
    {
        title: "StudyBuddy",
        description: "AI-powered study material discovery platform enabling collaborative learning through intelligent agent recommendations.",
        projectLink: "https://github.com/risv1/StudyBuddy",
        tag: "AI / Full Stack"
    },
    {
        title: "Daily",
        description: "Streamlined personal scheduling application leveraging Nuxt.js for intuitive task and time management.",
        projectLink: "https://github.com/risv1/Daily",
        tag: "Full Stack"
    },
    {
        title: "Codebin",
        description: "Developer-focused code sharing and management platform with seamless file upload.",
        projectLink: "https://github.com/risv1/Codebin",
        tag: "Full Stack"
    },
    {
        title: "Dhwani",
        description: "Application designed to streamline interactions between supervisors of hospitals, therapists and patients, with auto speech assesment tests",
        projectLink: "https://github.com/risv1",
        tag: "Full Stack"
    },
]
</script>

<template>
    <main v-cloak class="min-h-screen py-16 bg-white dark:bg-black">
        <div class="max-w-4xl mx-auto px-6">
            <h1 class="text-4xl font-bold text-black dark:text-white mb-4 animate-fade-in">
                Projects<span class="text-red-500">.</span>
            </h1>
            <p class="text-neutral-600 text-lg dark:text-neutral-300 mb-16 animate-fade-in">
                Some things I've built<span class="text-red-500">...</span>
            </p>

            <div class="space-y-16">
                <TransitionGroup name="project" tag="div" class="space-y-16">
                    <div v-for="(project, index) in projects" :key="project.title"
                        :style="`animation-delay: ${index * 0.1}s`" class="project-card animate-fade-in">

                        <a :href="project.projectLink" target="_blank"
                            class="block group decoration-none relative p-6 -mx-6 md:mr-0 mr-3 rounded-lg transition-all duration-300">

                            <div class="flex items-start justify-between mb-4">
                                <div>
                                    <h3
                                        class="text-2xl font-semibold text-black dark:text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                                        {{ project.title }}
                                    </h3>
                                    <span class="text-sm text-red-500 font-medium">
                                        {{ project.tag }}
                                    </span>
                                </div>
                                <div
                                    class="text-neutral-600 dark:text-neutral-400 group-hover:text-red-500 transition-all duration-300 transform group-hover:scale-110">
                                    <Icon name="mdi:github" class="h-6 w-6" />
                                </div>
                            </div>

                            <p class="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                                {{ project.description }}
                            </p>

                            <div
                                class="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </a>
                    </div>
                </TransitionGroup>
                <p class="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed animate-fade-in">
                    View more on my <a href="https://github.com/risv1?tab=repositories" target="_blank"
                        class="text-red-500 dark:text-red-500 hover:underline">GitHub</a>.
                </p>
            </div>
        </div>
    </main>
</template>

<style scoped>
.project-item {
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-item {
    position: relative;
    transition: transform 0.3s ease;
}

.project-item:hover {
    transform: translateX(8px);
}

.project-item::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(239, 68, 68, 0.1), transparent);
    bottom: -40px;
}

.project-item:last-child::after {
    display: none;
}

.project-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent, rgba(239, 68, 68, 0.02), transparent);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.project-item:hover::before {
    transform: translateX(0);
}
</style>