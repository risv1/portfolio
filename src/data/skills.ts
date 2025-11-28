type Skill = {
	id: string;
	domain: string;
	image?: string;
	hoverImage?: string;
	technologies: string[];
	colSpan?: string;
}

export const skills: Skill[] = [
		{
			id: "1",
			domain: "Web Development",
			technologies: [
                "TypeScript",
                "Go",
                "Python",
                "Java",
                "Node.js",
				"React.js",
                "Vue.js",
				"TailwindCSS",
			],
		},
		{
			id: "2",
			domain: "App Development",
			technologies: ["React Native", "Flutter", "Swift"],
		},
		{
			id: "3",
			domain: "Design",
			technologies: ["Figma", "Canva", "Photoshop"],
		},
		{
			id: "4",
			domain: "AI",
			technologies: [
				"TensorFlow",
				"PyTorch",
                "Scikit-learn",
			],
		},
		{
			id: "5",
            domain: "Others",
            technologies: [
                "Git",
                "Docker",
                "Kubernetes",
                "AWS",
                "Azure",
                "GCP",
                "Linux",
            ],
            colSpan: "md:col-span-2",
		},
	];