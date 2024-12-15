<template>
    <section id="home" class="min-h-screen w-full flex items-center justify-center bg-inherit">
        <div class="text-center lg:pr-0 pr-7">
            <h1 class="text-5xl font-bold mb-4 text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-600 to-pink-600 
                transform transition-all duration-500">
                Rishi Viswanathan
            </h1>
            <p class="text-2xl text-gray-700 dark:text-neutral-300 mb-8 
                opacity-0 translate-y-10 transition-all duration-500 animate-fadeInUp">
                Web & AI Developer
            </p>
            <div class="flex justify-center space-x-4 
                opacity-0 translate-y-10 transition-all duration-500 animate-fadeInUp delay-100">
                <a href="#contact" class="decoration-none px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                    text-white rounded-lg 
                    hover:from-purple-700 hover:to-pink-700 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-lg">
                    Get in Touch
                </a>
                <a href="#projects" class="px-6 py-3 
                    bg-neutral-200 decoration-none dark:bg-neutral-900 
                    text-black dark:text-white 
                    rounded-lg 
                    hover:bg-gradient-to-br from-white/50 to-neutral-100/50 
                    dark:hover:from-neutral-800/50 dark:hover:to-neutral-700/50
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-lg">
                    View Projects
                </a>
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

.delay-100 {
    animation-delay: 0.1s;
}
</style>