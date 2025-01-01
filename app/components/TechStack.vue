<script setup>
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
</script>

<template>
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-black dark:text-white mb-16">
          Tech Stack
          <span class="text-red-500 dark:text-red-500">.</span>
        </h2>

        <div class="space-y-16">
          <div v-for="category in techStack" 
               :key="category.name" 
               class="tech-category group">
            <div class="flex items-baseline mb-8">
              <h3 class="text-xl font-medium text-black dark:text-white">
                {{ category.name }}
              </h3>
              <div class="ml-4 h-[1px] flex-grow bg-neutral-200 dark:bg-neutral-800 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              <div v-for="tech in category.technologies" 
                   :key="tech.name" 
                   class="tech-item group/item">
                <div class="flex items-center space-x-4 p-2 transition-all duration-300 hover:translate-x-2 hover:cursor-pointer">
                  <Icon :name="tech.icon" 
                        class="h-6 w-6 text-neutral-600 dark:text-neutral-400 group-hover/item:text-red-500 dark:group-hover/item:text-red-500 transition-colors" />
                  <span class="text-neutral-600 dark:text-neutral-300 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
