<script setup>
const sectionRef = ref(null)
const isVisible = ref(false)

const projects = [
    {
        title: "StudyBuddy",
        description: "AI-powered study material discovery platform enabling collaborative learning through intelligent agent recommendations.",
        projectLink: "https://github.com/risv1/StudyBuddy"
    },
    {
        title: "RATE PyTorch",
        description: "My PyTorch implementation of the RATE model from Egor Cherepanov's research paper.",
        projectLink: "https://github.com/risv1/RATE-pytorch",
    },
    {
        title: "Daily",
        description: "Streamlined personal scheduling application leveraging Nuxt.js for intuitive task and time management.",
        projectLink: "https://github.com/risv1/Daily"
    },
    {
        title: "Vaidya",
        description: "Making weather based predictions for Crop yield, potential pests and diseases in the current climate, along with prediction of solar and wind power generation and AQI index.",
        projectLink: "https://github.com/risv1/vaidya"
    },
    {
        title: "Codebin",
        description: "Developer-focused code sharing and management platform with seamless file upload.",
        projectLink: "https://github.com/risv1/Codebin"
    },
    {
        title: "SnapSave",
        description: "Event ticket ecosystem featuring sophisticated purchasing and management capabilities.",
        projectLink: "https://github.com/risv1/SnapSave"
    },
]

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting
        },
        { threshold: 0.1 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }

    return () => {
        if (sectionRef.value) {
            observer.unobserve(sectionRef.value)
        }
    }
})
</script>

<template>
    <section ref="sectionRef" id="projects" class="py-20 bg-inherit">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-600 to-pink-600 
          transform transition-all duration-500 
          opacity-0 translate-y-10" :class="{ 'animate-fadeInUp': isVisible }">
                Projects
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="project.title" class="group relative overflow-hidden bg-white dark:bg-neutral-800 
              rounded-2xl shadow-lg transform transition-all duration-500 
              opacity-0 translate-y-10 
              hover:scale-105 hover:shadow-2xl 
              flex flex-col" :class="{ [`animate-fadeInUp delay-${index * 100}`]: isVisible }">
                    <div class="p-8 flex-grow flex flex-col">
                        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r 
                from-purple-500 to-pink-500 transition-all duration-500 
                group-hover:h-full group-hover:opacity-50 z-0"></div>

                        <h3 class="text-2xl font-bold mb-4 text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-600 to-pink-600 
                relative z-10 transition-transform group-hover:-translate-y-2">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-700 dark:text-neutral-300 mb-6 relative z-10 flex-grow">
                            {{ project.description }}
                        </p>
                        <div class="mt-auto">
                            <a :href="project.projectLink" target="_blank" class="decoration-none inline-flex items-center px-6 py-3 
                bg-gradient-to-r from-purple-600 to-pink-600 
                text-white rounded-full 
                transform transition-all duration-300 
                hover:scale-110 hover:shadow-lg group/link">
                                <Icon name="mdi:github" class="mr-2 group-hover/link:animate-spin" />
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
}

.delay-0 {
    animation-delay: 0s;
}

.delay-100 {
    animation-delay: 0.1s;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-300 {
    animation-delay: 0.3s;
}
</style>