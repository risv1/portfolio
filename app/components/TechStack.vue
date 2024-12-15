<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const techStack = [
    {
        name: 'Languages',
        technologies: [
            { name: 'JavaScript', icon: 'mdi:language-javascript' },
            { name: 'TypeScript', icon: 'mdi:language-typescript' },
            { name: 'Python', icon: 'mdi:language-python' },
            { name: 'Rust', icon: 'mdi:language-rust' }
        ]
    },
    {
        name: 'Frontend',
        technologies: [
            { name: 'React', icon: 'mdi:react' },
            { name: 'Vue', icon: 'mdi:vuejs' },
            { name: 'Nuxt', icon: 'mdi:nuxt' },
            { name: 'Next', icon: 'cib:next-js' }
        ]
    },
    {
        name: 'Backend',
        technologies: [
            { name: 'Node.js', icon: 'mdi:nodejs' },
            { name: 'Express', icon: 'simple-icons:express' },
            { name: 'FastAPI', icon: 'devicon-plain:fastapi' },
            { name: 'Actix Web', icon: 'simple-icons:actix' }
        ]
    },
    {
        name: 'AI/ML',
        technologies: [
            { name: 'PyTorch', icon: 'simple-icons:pytorch' },
            { name: 'Scikit-Learn', icon: 'simple-icons:scikitlearn' },
        ]
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
    <section ref="sectionRef" id="tech-stack" class="py-20 bg-inherit">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-600 to-pink-600 
          transform transition-all duration-500 
          opacity-0 translate-y-10" :class="{ 'animate-fadeInUp': isVisible }">
                Tech Stack
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(category, index) in techStack" :key="category.name" class="group bg-neutral-100 dark:bg-neutral-800 bg-opacity-40 p-8 rounded-2xl shadow-lg 
              transform transition-all duration-500 
              opacity-0 translate-y-10
              hover:scale-105 hover:shadow-2xl"
                    :class="{ [`animate-fadeInUp delay-${index * 100}`]: isVisible }">
                    <h3 class="text-2xl font-semibold mb-6 text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-600 to-pink-600 
              transition-transform group-hover:-translate-y-2">
                        {{ category.name }}
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="tech in category.technologies" :key="tech" class="px-4 py-2 bg-white dark:bg-neutral-800 
                rounded-full text-xl font-medium 
                transform transition-all duration-300 
                hover:scale-110 hover:shadow-md 
                bg-gradient-to-r from-purple-500 to-pink-500 
                text-white hover:from-purple-600 hover:to-pink-600 flex flex-row items-center">
                            <Icon :name="tech.icon" class="mr-2" />
                            {{ tech.name }}
                        </span>
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