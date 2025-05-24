<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);

const mode = useColorMode()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' }
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <nav class="py-4 px-4 md:px-8 flex justify-between items-center font-roboto border-b border-neutral-200 dark:border-neutral-950 bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
    
    <NuxtLink to="/" class="text-xl md:text-2xl font-bold text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors decoration-none">
      <img 
        :src="mode === 'dark' ? '/images/logo-light.svg' : '/images/logo-dark.svg'" 
        alt="Logo" 
        class="h-12 w-12 inline-block mr-2" 
      />
    </NuxtLink>
    
    <div class="hidden md:flex items-center gap-6">
      <NuxtLink 
        v-for="item in navItems" 
        :key="item.name" 
        :to="item.path"
        class="relative px-3 py-2 rounded-lg hover:text-black dark:hover:text-white transition-all duration-300 decoration-none font-medium text-sm"
        :class="{ 
          'text-black dark:text-white': route.path === item.path,
          'text-neutral-400 dark:text-neutral-400': route.path !== item.path
        }"
      >
        {{ item.name }}
      </NuxtLink>
      
      <Theme />
    </div>

    <div class="md:hidden flex items-center gap-2">
      <Theme />
      <button @click="toggleMenu" class="p-2 border-none rounded-lg bg-inherit hover:bg-neutral-100 dark:hover:bg-neutral-950 transition-colors">
        <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl text-black dark:text-white" />
      </button>
    </div>

    <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-950 md:hidden">
      <div class="flex flex-col p-4 space-y-2">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.name" 
          :to="item.path"
          @click="closeMenu"
          class="px-3 py-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-300 decoration-none font-medium"
          :class="{ 
            'text-black dark:text-white bg-neutral-200 dark:bg-neutral-950': route.path === item.path,
            'hover:bg-neutral-50 dark:hover:bg-neutral-950': route.path !== item.path
          }"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>