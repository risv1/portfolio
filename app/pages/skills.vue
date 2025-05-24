<script setup lang="ts">
import { techIcons } from '~/utils/icons'

const experience = [
  {
    position: "Software Engineer",
    company: "Vyana Tech",
    duration: "Dec 2024 - Jan 2025",
    type: "Part-time",
    description: "Worked on a MERN stack application with a focus on functionality and performance. Implemented integration testing using Jest to ensure application reliability.",
    skills: ["Jest", "Express", "MongoDB", "Node.js"],
    proof: "https://drive.google.com/file/d/1NEhEkyjWK9d96Y025mdUrks-KC5mb2X1/view?usp=sharing"
  }
];

const publications = [
  {
    title: "Predictive Salary Modelling: Leveraging Data Science Skills and Machine Learning for Accurate Forecasting",
    publisher: "IEEE",
    date: "Feb 6, 2025",
    description: "Presented at the \"9th International Conference on Communication and Electronics Systems (ICCES-2024)\"",
    link: "https://ieeexplore.ieee.org/document/10859447",
  }
];

const certifications = [
  {
    name: "RedHat Certified System Administrator",
    issuer: "Red Hat",
    date: "2025",
    image: "/images/certifications/rhcsa-preview.png",
    pdf: "https://drive.google.com/file/d/1HNTw3aRUyYU-yX8FIj0FrJZrtQVDyMSn/view?usp=sharing"
  },
  {
    name: "Oracle Certified Cloud Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    image: "/images/certifications/oracle-preview.png",
    pdf: "https://drive.google.com/file/d/15ZFWvU1SgrDsMMNm70zuqQdb8nUF4FqI/view?usp=sharing"
  },
];

const organizations = [
  {
    organization: "Google Developer Groups on Campus, SRMIST",
    position: "Technical Associate Lead",
    duration: "Apr 2024 - Present",
    description: "Remade the main club website using Next.js. Conducted 2025's recruitment drive for the club,",
    skills: ["TypeScript", "Go", "Next", "Postgres", "AWS"]
  },
  {
    organization: "GeeksForGeeks, SRMIST",
    position: "Vice President",
    duration: "May 2024 - Present",
    description: "Organized and conducted \"GraphQL for Geeks\", a workshop on GraphQL. Organized \"Docker for Geeks\", a workshop on Docker. Made GFGSRMIST's recruitment portal for onboarding new members.",
    skills: ["Nuxt", "Supabase"]
  },
  {
    organization: "FOSS SRM",
    position: "Technical Maintainer",
    duration: "Dec 2024 - Present",
    description: "Contributing to open source projects and maintaining technical infrastructure.",
  },
];

const techStack = {
  "Languages": ["C++", "Python", "JavaScript", "TypeScript", "Go", "Rust"],
  "Development": ["React", "Next", "Vue.js", "Nuxt", "Express", "FastAPI", "Actix Web"],
  "AI & Machine Learning": ["PyTorch", "scikit-learn"],
  "Others": ["Docker", "Kubernetes", "Git", "AWS", "Azure", "Terraform"]
};
</script>

<template>
  <main class="font-roboto py-8 px-6 md:px-8">
    <h1 class="text-2xl md:text-3xl font-bold mb-16 text-black dark:text-white text-center tracking-tight">Skills &
      Experience</h1>

    <section class="mb-20">
      <h2 class="text-xl md:text-2xl font-bold mb-12 text-black dark:text-white text-center">Work Experience</h2>

      <div class="max-w-5xl mx-auto space-y-6 px-4">
        <a v-for="(job, index) in experience" :key="index" :href="job.proof" target="_blank" rel="noopener noreferrer"
          class="block decoration-none group bg-gradient-to-r from-white to-neutral-50 dark:from-black dark:to-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div class="flex-1">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-black dark:text-white mb-2">{{ job.position }}</h3>
                  <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span class="text-lg text-neutral-700 dark:text-neutral-300 font-semibold">{{ job.company }}</span>
                    <span class="hidden sm:block text-neutral-400">•</span>
                    <span
                      class="w-fit inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                      {{ job.duration }}
                    </span>
                    <span class="hidden sm:block text-neutral-400">•</span>
                    <span
                      class="w-fit inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
                      {{ job.type }}
                    </span>
                  </div>
                </div>
              </div>

              <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{{ job.description }}</p>

              <div class="mb-4">
                <h4 class="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in job.skills" :key="skill"
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    <Icon v-if="techIcons[skill]" :name="techIcons[skill]" class="text-sm" />
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    <section class="mb-20">
      <h2 class="text-xl md:text-2xl font-bold mb-12 text-black dark:text-white text-center">Publications</h2>

      <div class="max-w-4xl mx-auto space-y-6 px-4">
        <a v-for="(publication, index) in publications" :key="index" :href="publication.link" target="_blank"
          rel="noopener noreferrer"
          class="block decoration-none bg-white dark:bg-black rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-black dark:text-white mb-2">{{ publication.title }}</h3>
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="text-neutral-700 dark:text-neutral-300 font-medium">{{ publication.publisher }}</span>
                <span class="text-neutral-400">•</span>
                <span
                  class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium">
                  {{ publication.date }}
                </span>
              </div>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm">{{ publication.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </section>

    <section class="mb-20">
      <h2 class="text-xl md:text-2xl font-bold mb-12 text-black dark:text-white text-center">Certifications</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <a v-for="cert in certifications" :key="cert.name" :href="cert.pdf" target="_blank" rel="noopener noreferrer"
          class="block decoration-none bg-white dark:bg-black rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
          <div class="h-40 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center overflow-hidden">
            <img v-if="cert.image" :src="cert.image" :alt="cert.name" class="w-full h-full object-cover" />
            <Icon v-else name="mdi:certificate" class="text-4xl text-neutral-400 dark:text-neutral-500" />
          </div>

          <div class="p-4">
            <h3 class="text-base font-bold text-black dark:text-white mb-2">
              {{ cert.name }}
            </h3>
            <div class="flex justify-between items-center">
              <span class="text-neutral-600 dark:text-neutral-400 font-medium text-xs">{{ cert.issuer }}</span>
              <span
                class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-xs font-medium">
                {{ cert.date }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <section class="mb-20">
      <h2 class="text-xl md:text-2xl font-bold mb-12 text-black dark:text-white text-center">Organizations</h2>

      <div class="max-w-5xl mx-auto space-y-6 px-4">
        <div v-for="(org, index) in organizations" :key="index"
          class="group bg-gradient-to-r from-white to-neutral-50 dark:from-black dark:to-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md">
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div class="flex-1">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-black dark:text-white mb-2">{{ org.position }}</h3>
                  <div class="flex flex-col gap-2">
                    <span class="text-lg text-neutral-700 dark:text-neutral-300 font-semibold">{{ org.organization
                      }}</span>
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span
                        class="w-fit inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                        {{ org.duration }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{{ org.description }}</p>

              <div v-if="org.skills && org.skills.length > 0">
                <h4 class="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Skills</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in org.skills" :key="skill"
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    <Icon v-if="techIcons[skill]" :name="techIcons[skill]" class="text-sm" />
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4">
      <h2 class="text-xl md:text-2xl font-bold mb-12 text-black dark:text-white text-center">Technical Skills</h2>

      <div class="space-y-12">
        <div v-for="(skills, category) in techStack" :key="category">
          <h3 class="text-lg font-bold mb-6 text-neutral-800 dark:text-neutral-200 text-center">{{ category }}</h3>

          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-items-center max-w-6xl mx-auto">
            <div v-for="skill in skills" :key="skill"
              class="flex flex-col items-center gap-2 p-3 rounded-lg text-black dark:text-white bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 w-full max-w-28 shadow-sm hover:shadow-md">
              <Icon v-if="techIcons[skill]" :name="techIcons[skill]" class="text-2xl" />
              <span class="text-neutral-700 dark:text-neutral-300 font-medium text-center text-xs">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>