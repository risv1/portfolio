<script setup>
const isOpen = ref(false)
</script>

<template>
    <nav class="bg-white w-full dark:bg-black border-b border-neutral-100 dark:border-neutral-800">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <NuxtLink to="/" class="flex items-center">
                        <img src="/images/logo.png" alt="Logo" class="h-12 w-12" />
                    </NuxtLink>
                </div>

                <div class="hidden md:flex items-center space-x-12">
                    <NuxtLink to="/"
                        class="text-lg decoration-none font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-300 relative nav-link">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/projects"
                        class="text-lg decoration-none font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-300 relative nav-link">
                        Projects
                    </NuxtLink>
                    <a href="/Rishi-Viswanathan-Resume.pdf"
                        class="text-lg decoration-none font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-300">
                        Resume
                    </a>
                    <div class="ml-4">
                        <Theme />
                    </div>
                </div>

                <button @click="isOpen = !isOpen" 
                        class="md:hidden p-2.5 rounded-md transition-all duration-300
                               hover:bg-neutral-100 dark:hover:bg-neutral-800
                               focus:outline-none focus:ring-2 focus:ring-red-500/20">
                    <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'"
                          class="h-6 w-6 text-neutral-800 dark:text-white transition-colors duration-300" />
                </button>
            </div>
        </div>

        <div v-if="isOpen"
            class="md:hidden border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-black">
            <div class="px-6 py-4 space-y-4">
                <NuxtLink to="/" 
                    class="block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-500 transition-all duration-300">
                    Home
                </NuxtLink>
                <NuxtLink to="/projects" 
                    class="block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-500 transition-all duration-300">
                    Projects
                </NuxtLink>
                <a href="/Rishi-Viswanathan-Resume.pdf" 
                    class="block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-500 transition-all duration-300">
                    Resume
                </a>
                <div class="py-3">
                    <Theme />
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    padding-bottom: 2px;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #ef4444;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.nav-link:hover::after {
    transform: scaleX(1);
}

.router-link-active {
    color: #ef4444 !important;
}

.router-link-active::after {
    transform: scaleX(1);
}

:deep(.dark) .router-link-active {
    color: #ef4444 !important;
}

/* Mobile menu animation */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.md\:hidden {
    animation: slideDown 0.3s ease-out;
}

.md\:hidden[aria-expanded="true"] {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}
</style>