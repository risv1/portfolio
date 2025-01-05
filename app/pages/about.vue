<script setup lang="ts">

const colorMode = useColorMode()

const stats = ref({
    github: `https://my-realm.vercel.app/api/stats/svg?username=risv1&background=${colorMode.value === 'dark' ? 'black' : 'white'}`,
    languages: `https://my-realm.vercel.app/api/languages/svg?username=risv1&background=${colorMode.value === 'dark' ? 'black' : 'white'}`,
    leetcode: 'https://my-realm.vercel.app/api/leetcode/svg?username=risv1'
})

watch(colorMode, (newMode) => {
    stats.value.github = `https://my-realm.vercel.app/api/stats/svg?username=risv1&background=${newMode === 'dark' ? 'black' : 'white'}`
    stats.value.languages = `https://my-realm.vercel.app/api/languages/svg?username=risv1&background=${newMode === 'dark' ? 'black' : 'white'}`
})

const work = [
    {
        title: 'Vyana Tech',
        duration: 'December 2024  - January 2025',
        description: 'Worked on making integration tests for their microservice architecture using Jest, for their patient management system.'
    },
    {
        title: 'Google Developer Groups on Campus',
        duration: 'April 2024 - Present',
        description: 'Technical team member, worked on remaking the website in NextJS'
    },
    {
        title: 'GeeksForGeeks SRM',
        duration: 'July 2024 - Present',
        description: 'Vice President, worked on the recruitment portal in Nuxt.js'
    }
]

const hackathons = [
    {
        name: 'Mozohack 5.0',
        description: '2nd runner up. Developed StudyBuddy, an app to make fetching learning and teaching materials easier with AI agents',
        github: 'https://github.com/risv1/StudyBuddy',
        devfolio: 'https://devfolio.co/projects/study-buddy-ce0b'
    },
    {
        name: 'Smart India Hackathon 2024 (Internal)',
        description: 'Selected in internal selections. Developed Dhwani, an app to streamline interactions between supervisors and therapists, facilitating engagements with speech-impaired patients',
        github: 'https://github.com/risv1'
    }
]

const certificates = [
    {
        name: 'Cisco Networking Basics',
        icon: '/images/networking-basics.png',
        link: '/certs/Networking_Basics_Badge.pdf',
        preview: '/images/nb-preview.png'
    },
    {
        name: 'AWS Machine Learning Foundations',
        icon: '/images/aws-ml-foundations.png',
        link: '/certs/AWS_ML_Foundations.pdf',
        preview: '/images/aws-ml-preview.png'
    }
]

const others = [
    {
        title: 'Blue Cross of India',
        duration: 'December 2023 - January 2024',
        description: 'Primary responsibilities included reorganizing and digitizing three decades worth of medical records, adoption histories, and rescue documentation dating from 1986 to present.'
    },
]
</script>

<template>
    <main v-cloak class="min-h-screen bg-white dark:bg-black">
        <div class="space-y-12 md:mr-0 mr-7">
            <Stats :stats="stats" />
            <Work :experiences="work" />
            <Hackathons :hackathons="hackathons" />
            <Certificates :certificates="certificates" />
            <Others :others="others" />
        </div>

    </main>
</template>