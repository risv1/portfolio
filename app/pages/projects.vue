<script setup lang="ts">

useHead({
  title: "RV / Projects",
  meta: [
    {
      name: "description",
      content: "Explore my projects showcasing my skills in web development, AI, and more. Discover innovative solutions and technologies I have worked with."
    },
    {
      name: "keywords",
      content: "projects, web development, AI, machine learning, software engineering, programming"
    }
  ]
})

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demoLink?: string;
}

const projects: Record<string, Project[]> = {
  2025: [
    {
      title: "MW Scraper",
      description: "This application combines stock prices, historical performance, and news sentiment to deliver data-driven insights, helping users manage portfolios and make smarter investment decisions.",
      technologies: ["React", "Hono", "FastAPI", "Postgres", "Scikit-learn", "Swarm"],
      github: "https://github.com/risv1/mw-scraper",
    },
    {
      title: "Showdown",
      description: "Dynamic tournament management platform for Pokemon battles. Built for competitive players who want to organize epic battles, track team performance, and export comprehensive results.",
      technologies: ["React", "Hono", "Postgres", "Redis"],
      github: "https://github.com/risv1/showdown",
    },
    {
      title: "Marai",
      description: "Marai is a cloud-based platform that streamlines legal consultations, case management, and AI-driven analysis for law firms and clients.",
      technologies: ["Next", "Go", "Postgres", "Redis", "Swarm", "AWS", "Azure", "Terraform"],
      github: "https://github.com/ProgrammingNotJustCoding/marai",
    },
    {
      title: "Jiva",
      description: "Jiva is a DGMS-compliant platform that digitizes Safety Management Plans (SMP) to enhance safety, streamline operations, and improve communication in coal mines.",
      technologies: ["Next", "Flutter", "Hono", "Postgres", "Redis", "Minio", "Nginx", "Terraform"],
      github: "https://github.com/ProgrammingNotJustCoding/jiva",
    },
    {
      title: "NoCapRide",
      description: "Incentive model for NammaYatri. A machine learning-powered ride-hailing platform backend with intelligent demand forecasting and surge pricing capabilities.",
      technologies: ["Next", "FastAPI", "Scikit-learn"],
      github: "https://github.com/ProgrammingNotJustCoding/NoCapRide",
    },
  ],
  2024: [
    {
      title: "Dhwani",
      description: "Won internals at SIH-2024 SRMIST. An application designed to streamline interactions between supervisors and the therapists under their guidance.",
      technologies: ["Next", "Nest", "Turborepo", "Postgres", "Redis", "AWS",],
      github: "https://github.com/risv1/dhwani",
    },
    {
      title: "Vaidya",
      description: "This project focuses on analyzing weather data to make various predictions that can impact multiple sectors.",
      technologies: ["Nuxt", "FastAPI", "Hive", "Spark", "PyTorch", "Scikit-learn"],
      github: "https://github.com/risv1/vaidya",
    },
    {
      title: "Mamba PyTorch",
      description: "This repository contains a basic PyTorch implementation of the Mamba model for NLP.",
      technologies: ["PyTorch"],
      github: "https://github.com/risv1/mamba-nlp-pytorch",
    },
    {
      title: "RATE PyTorch",
      description: "This repository contains a PyTorch implementation of the Recurrent Action Transformer with Memory model.",
      technologies: ["PyTorch"],
      github: "https://github.com/risv1/RATE-pytorch",
    },
    {
      title: "Codebin",
      description: "Codebin is a platform that allows users to share code snippets, similar to Pastebin, but with a focus on code sharing and collaboration.",
      technologies: ["Nuxt", "Postgres", "AWS"],
      github: "https://github.com/risv1/Codebin"
    },
  ],
  2023: [
    {
      title: "StudyBuddy",
      description: "Won MozoHack 5.0. StudyBuddy is a project that helps students and teachers find study materials with the help of AI agents.",
      technologies: ["Next", "FastAPI", "CrewAI"],
      github: "https://github.com/risv1/StudyBuddy",
    },
    {
      title: "SnapSave",
      description: "SnapSave is a event booking platform that enables users to seamlessly reserve tickets for events, while providing admins with powerful tools to create, manage, and monitor event listings.",
      technologies: ["Remix", "Go", "Postgres"],
      github: "https://github.com/risv1/SnapSave"
    }
  ],
};

const sortedProjects = computed(() => {
  return Object.keys(projects)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map(year => ({
      year,
      projects: projects[year]
    }))
})

const cardRefs = ref<HTMLElement[]>([])
const dynamicCardHeight = ref('auto')

const calculateCardHeight = () => {
    dynamicCardHeight.value = 'auto'
    
    nextTick(() => {
      const heights = cardRefs.value.map(card => card?.offsetHeight || 0)
      const maxHeight = Math.max(...heights)
      if (maxHeight > 0) {
        dynamicCardHeight.value = `${maxHeight}px`
      }
    })
}

const openGithub = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

onMounted(() => {
  calculateCardHeight()
})

if (import.meta.client) {
  window.addEventListener('resize', calculateCardHeight)
}

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', calculateCardHeight)
  }
})
</script>

<template>
  <main class="font-roboto py-8 px-6 md:px-8">
    <div class="text-center mb-12">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white tracking-tight">Projects</h1>
    </div>

    <div class="space-y-16 px-4">
      <div v-for="yearData in sortedProjects" :key="yearData.year" class="space-y-6">
        <h2 class="text-xl md:text-2xl font-bold text-black dark:text-white text-center mb-8">{{ yearData.year }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div 
            v-for="(project, index) in yearData.projects" 
            :key="index" 
            :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
            @click="openGithub(project.github)"
            class="project-card bg-white dark:bg-black rounded-xl p-6 hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all duration-300 border border-neutral-200 dark:border-neutral-800 cursor-pointer hover:shadow-lg"
            :style="{ height: dynamicCardHeight }">
            <div class="flex flex-col h-full">
              <h3 class="text-lg font-bold text-black dark:text-white mb-3">
                {{ project.title }}
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-md flex-grow">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech"
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-black dark:text-white">
                  <Icon v-if="techIcons[tech]" :name="techIcons[tech]" class="text-sm" />
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="px-4 mt-20 mb-8">
        <div class="text-center">
          <a href="https://github.com/risv1?tab=repositories" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-xl decoration-none dark:text-white text-black font-semibold">
            <Icon name="mdi:github" class="text-xl w-8 h-8" />
            See all of my projects
          </a>
        </div>
      </section>
    </div>
  </main>
</template>