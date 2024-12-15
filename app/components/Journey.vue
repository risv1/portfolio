<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const milestones = [
    {
        title: "Development Beginnings",
        description: "Started my development journey in August 2023, laying the foundation for my tech skills."
    },
    {
        title: "Frontend Mastery",
        description: "By November 2023, I had become proficient in frontend frameworks like React and Next.js."
    },

    {
        title: "Backend Exploration",
        description: "Learned backend technologies like Express, FastAPI, and Actix Web by January 2024."
    },
    {
        title: "AI Learning",
        description: "Began diving deep into AI and machine learning in May 2024."
    }
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
    <section ref="sectionRef" id="journey" class="py-20 bg-inherit">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-600 to-pink-600 
          transform transition-all duration-500 
          opacity-0 translate-y-10" :class="{ 'animate-fadeInUp': isVisible }">
                My Developer Journey
            </h2>

            <div class="relative max-w-4xl mx-auto">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-1 
            bg-gradient-to-b from-purple-500 to-pink-500 h-full"></div>

                <div v-for="(milestone, index) in milestones" :key="index" class="mb-12 flex items-center w-full group"
                    :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
                    <div class="w-1/2 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-2xl shadow-lg 
              transform transition-all duration-700 
              opacity-0 translate-y-20 
              hover:scale-105 hover:shadow-2xl" :class="{
                [`animate-${index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}`]: isVisible
            }">
                        <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r 
                from-purple-500 to-pink-500 rounded-full flex items-center 
                justify-center text-white font-bold">
                            {{ index + 1 }}
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-600 to-pink-600">
                            {{ milestone.title }}
                        </h3>
                        <p class="text-gray-700 dark:text-neutral-300">
                            {{ milestone.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateY(50px) translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateY(0) translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateY(50px) translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0) translateX(0);
    }
}

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

.animate-slideInLeft {
    animation: slideInLeft 1s forwards;
}

.animate-slideInRight {
    animation: slideInRight 1s forwards;
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
}
</style>
