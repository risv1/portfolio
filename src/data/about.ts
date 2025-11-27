export interface EducationItem {
    title: string;
    subtitle: string;
    period: string;
    description: string;
}

export interface CommunityItem {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    skills: string[];
}

export const educationData: EducationItem[] = [
    {
        title: "SRM Institute of Science and Technology",
        subtitle: "B.Tech in Computer Science Engineering",
        period: "2022 - 2026",
        description: "Focusing on core computer science concepts, software engineering, and artificial intelligence. Active member of various technical clubs and communities."
    }
];

export const communitiesData: CommunityItem[] = [
    {
        title: "Technical Associate Lead",
        subtitle: "Google Developer Groups on Campus, SRMIST",
        period: "Apr 2024 - Aug 2025",
        description: "Remade the main club website using Next.js. Conducted 2025's recruitment drive for the club.",
        skills: ["TypeScript", "Go", "Next", "Postgres", "AWS"]
    },
    {
        title: "Technical Maintainer",
        subtitle: "FOSS SRM",
        period: "Dec 2024 - Aug 2025",
        description: "Organized and conducted \"Unbox Freedom: Dive into FOSS, Docker & Linux\", a workshop exploring the fundamentals of Docker and Linux. Contributing to open source projects and maintaining technical infrastructure.",
        skills: ["Nuxt", "Docker", "MongoDB"]
    },
    {
        title: "Vice President",
        subtitle: "GeeksForGeeks, SRMIST",
        period: "May 2024 - Jun 2025",
        description: "Organized and conducted \"GraphQL for Geeks\", a workshop on GraphQL. Organized \"Docker for Geeks\", a workshop on Docker. Made GFGSRMIST's recruitment portal for onboarding new members.",
        skills: ["Nuxt", "Supabase"]
    }
];
