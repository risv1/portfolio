<script setup>
const sectionRef = ref(null)
const isVisible = ref(false)

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
    <section id="about" ref="sectionRef" class="py-20 min-h-screen w-full bg-inherit">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col justify-center items-center">
            <h2 class="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-600 to-pink-600 
                transform transition-all duration-700 
                opacity-0 translate-y-10" :class="{ 'animate-title-reveal': isVisible }">
                About Me
            </h2>

            <div class="grid gap-8 md:grid-cols-2 relative z-10 w-full">
                <div class="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl
                    transform transition-all duration-500 opacity-0 translate-y-10 hover:scale-105
                    border border-purple-100 dark:border-purple-900" :class="{ 'animate-card-reveal-1': isVisible }">
                    <p class="text-lg text-gray-800 dark:text-neutral-300 leading-relaxed">
                        I'm a Computer Science undergraduate at SRM Institute of Science and Technology with a passion
                        for combining web development and artificial intelligence. I enjoy building smart, user-friendly
                        digital solutions that make solving problems simpler and more efficient.
                    </p>
                </div>

                <div class="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl
                    transform transition-all duration-500 opacity-0 translate-y-10 hover:scale-105
                    border border-pink-100 dark:border-pink-900" :class="{ 'animate-card-reveal-2': isVisible }">
                    <p class="text-lg text-gray-800 dark:text-neutral-300 leading-relaxed">
                        I have experience developing web applications using Nuxt.js, where I integrate AWS services like
                        SES for email notifications and S3 for efficient file storage and management. On the AI side, I work
                        with PyTorch, creating neural networks for tasks like regression prediction, and attempting
                        implementation of models from research papers.
                    </p>
                </div>

                <div class="md:col-span-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20
                    backdrop-blur-lg rounded-2xl p-8 shadow-xl
                    transform transition-all duration-500 opacity-0 translate-y-10 hover:scale-102
                    border border-transparent" :class="{ 'animate-card-reveal-3': isVisible }">
                    <p class="text-lg text-gray-800 dark:text-neutral-300 leading-relaxed text-center">
                        My goal is to keep building innovative applications that bring together the power of web
                        technologies and AI to solve real-world challenges.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes titleReveal {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardReveal {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(-20px) translateX(15px);
    }
}

.animate-title-reveal {
    animation: titleReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-card-reveal-1 {
    animation: cardReveal 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
}

.animate-card-reveal-2 {
    animation: cardReveal 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
}

.animate-card-reveal-3 {
    animation: cardReveal 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.hover\:scale-102:hover {
    transform: scale(1.02);
}
</style>