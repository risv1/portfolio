export interface ProjectData {
	name: string;
	purpose: string;
	industry: string;
	year: string;
	slug: string;
}

export interface ProjectDetail extends ProjectData {
	title: string;
	introDescription: string;
	link: string;
	introBackground?: string;
	productDescription: string;
	productGif?: string;
	technologies: string[];
	gallery: string[];
}

export const allProjects: (ProjectData & {
	status: "completed" | "upcoming";
})[] = [
	{
		name: "MW Scraper",
		purpose: "Internship",
		industry: "Finance",
		year: "2025",
		slug: "mw-scraper",
		status: "completed",
	},
	{
		name: "Showdown",
		purpose: "Personal",
		industry: "Gaming",
		year: "2025",
		slug: "showdown",
		status: "completed",
	},
	{
		name: "Marai",
		purpose: "Coursework",
		industry: "Legal",
		year: "2025",
		slug: "marai",
		status: "completed",
	},
	{
		name: "Jiva",
		purpose: "Coursework",
		industry: "Regulatory",
		year: "2025",
		slug: "jiva",
		status: "completed",
	},
	{
		name: "NoCapRide",
		purpose: "Hackathon",
		industry: "Transport",
		year: "2025",
		slug: "nocapride",
		status: "completed",
	},
	{
		name: "Dhwani",
		purpose: "Hackathon",
		industry: "Healthcare",
		year: "2024",
		slug: "dhwani",
		status: "completed",
	},
	{
		name: "Vaidya",
		purpose: "Coursework",
		industry: "Agriculture",
		year: "2024",
		slug: "vaidya",
		status: "completed",
	},
	{
		name: "Mamba NLP",
		purpose: "Personal",
		industry: "AI",
		year: "2024",
		slug: "mamba-nlp",
		status: "completed",
	},
	{
		name: "RATE",
		purpose: "Personal",
		industry: "AI",
		year: "2024",
		slug: "rate",
		status: "completed",
	},
	{
		name: "Codebin",
		purpose: "Coursework",
		industry: "Software",
		year: "2024",
		slug: "codebin",
		status: "completed",
	},
	{
		name: "StudyBuddy",
		purpose: "Hackathon",
		industry: "Education",
		year: "2023",
		slug: "studybuddy",
		status: "completed",
	},
	{
		name: "SnapSave",
		purpose: "Personal",
		industry: "Entertainment",
		year: "2023",
		slug: "snapsave",
		status: "completed",
	},
];

export const projectDetails: Record<string, ProjectDetail> = {
	"mw-scraper": {
		name: "MW Scraper",
		purpose: "Internship",
		industry: "Finance",
		year: "2025",
		slug: "mw-scraper",
		title: "MW Scraper",
		introDescription:
			"This application combines stock prices, historical performance, and news sentiment to deliver data-driven insights, helping users manage portfolios and make smarter investment decisions.",
		link: "https://github.com/yourusername/mw-scraper",
		productDescription:
			"MW Scraper is a comprehensive financial analysis tool that combines real-time stock prices, historical performance data, and news sentiment analysis to deliver actionable insights. The platform helps investors and portfolio managers make data-driven decisions by aggregating multiple data sources and applying machine learning algorithms for sentiment analysis and trend prediction.",
		technologies: [
			"React",
			"Hono",
			"FastAPI",
			"Postgres",
			"Scikit-learn",
			"Swarm",
		],
		gallery: [],
	},
	showdown: {
		name: "Showdown",
		purpose: "Personal",
		industry: "Gaming",
		year: "2025",
		slug: "showdown",
		title: "Showdown",
		introDescription:
			"Dynamic tournament management platform for Pokemon battles. Built for competitive players who want to organize epic battles, track team performance, and export comprehensive results.",
		link: "https://github.com/yourusername/showdown",
		productDescription:
			"Showdown is a feature-rich tournament management platform designed specifically for Pokemon competitive battles. The platform enables organizers to create and manage tournaments, track player statistics, monitor team compositions, and generate detailed performance reports. With real-time updates and Redis caching, participants get instant notifications about match results and tournament progress.",
		technologies: ["React", "Hono", "Postgres", "Redis"],
		gallery: [],
	},
	marai: {
		name: "Marai",
		purpose: "Coursework",
		industry: "Legal",
		year: "2025",
		slug: "marai",
		title: "Marai",
		introDescription:
			"Marai is a cloud-based platform that streamlines legal consultations, case management, and AI-driven analysis for law firms and clients.",
		link: "https://github.com/yourusername/marai",
		productDescription:
			"Marai revolutionizes legal practice management by providing a comprehensive cloud-based platform for law firms and their clients. The system facilitates seamless legal consultations, efficient case management, and leverages AI-powered analysis to assist with legal research and document review. Built with enterprise-grade infrastructure using AWS and Azure, with infrastructure as code managed through Terraform for scalability and reliability.",
		technologies: [
			"Next",
			"Go",
			"Postgres",
			"Redis",
			"Swarm",
			"AWS",
			"Azure",
			"Terraform",
		],
		gallery: [],
	},
	jiva: {
		name: "Jiva",
		purpose: "Coursework",
		industry: "Regulatory",
		year: "2025",
		slug: "jiva",
		title: "Jiva",
		introDescription:
			"Jiva is a DGMS-compliant platform that digitizes Safety Management Plans (SMP) to enhance safety, streamline operations, and improve communication in coal mines.",
		link: "https://github.com/yourusername/jiva",
		productDescription:
			"Jiva addresses critical safety challenges in the mining industry by providing a DGMS-compliant digital platform for Safety Management Plans. The system enables real-time safety monitoring, incident reporting, and compliance tracking across coal mining operations. With cross-platform support through Flutter mobile apps and a robust Next.js web interface, mine workers and supervisors can access critical safety information anywhere. The platform uses Minio for secure document storage and Nginx for efficient content delivery.",
		technologies: [
			"Next",
			"Flutter",
			"Hono",
			"Postgres",
			"Redis",
			"Minio",
			"Nginx",
			"Terraform",
		],
		gallery: [],
	},
	nocapride: {
		name: "NoCapRide",
		purpose: "Hackathon",
		industry: "Transport",
		year: "2025",
		slug: "nocapride",
		title: "NoCapRide",
		introDescription:
			"Incentive model for NammaYatri. A machine learning-powered ride-hailing platform backend with intelligent demand forecasting and surge pricing capabilities.",
		link: "https://github.com/yourusername/nocapride",
		productDescription:
			"NoCapRide introduces an innovative incentive model for the NammaYatri ride-hailing platform. Using advanced machine learning algorithms, the system predicts demand patterns and implements intelligent surge pricing to balance supply and demand. The platform analyzes historical ride data, weather conditions, and local events to optimize driver allocation and passenger wait times, creating a more efficient and fair ride-hailing ecosystem.",
		technologies: ["Next", "FastAPI", "Scikit-learn"],
		gallery: [],
	},
	dhwani: {
		name: "Dhwani",
		purpose: "Hackathon",
		industry: "Healthcare",
		year: "2024",
		slug: "dhwani",
		title: "Dhwani",
		introDescription:
			"Won internals at SIH-2024 SRMIST. An application designed to streamline interactions between supervisors and the therapists under their guidance.",
		link: "https://github.com/yourusername/dhwani",
		productDescription:
			"Dhwani, winner of SIH-2024 SRMIST internals, is a comprehensive healthcare management platform that facilitates efficient communication and workflow management between therapy supervisors and their therapists. The monorepo architecture built with Turborepo ensures code sharing and consistent development practices across the platform. Features include session scheduling, patient progress tracking, resource sharing, and performance analytics, all deployed on AWS infrastructure for reliability and scalability.",
		technologies: ["Next", "Nest", "Turborepo", "Postgres", "Redis", "AWS"],
		gallery: [],
	},
	vaidya: {
		name: "Vaidya",
		purpose: "Coursework",
		industry: "Agriculture",
		year: "2024",
		slug: "vaidya",
		title: "Vaidya",
		introDescription:
			"This project focuses on analyzing weather data to make various predictions that can impact multiple sectors.",
		link: "https://github.com/yourusername/vaidya",
		productDescription:
			"Vaidya is an advanced weather analytics platform that processes large-scale meteorological data to generate actionable predictions for agriculture and other weather-dependent sectors. Leveraging big data technologies like Apache Hive and Spark, the platform analyzes historical weather patterns and applies deep learning models built with PyTorch to forecast weather conditions, crop yields, and potential agricultural risks. The system helps farmers and agricultural businesses make informed decisions about planting, irrigation, and harvest timing.",
		technologies: [
			"Nuxt",
			"FastAPI",
			"Hive",
			"Spark",
			"PyTorch",
			"Scikit-learn",
		],
		gallery: [],
	},
	"mamba-nlp": {
		name: "Mamba NLP",
		purpose: "Personal",
		industry: "AI",
		year: "2024",
		slug: "mamba-nlp",
		title: "Mamba PyTorch",
		introDescription:
			"This repository contains a basic PyTorch implementation of the Mamba model for NLP.",
		link: "https://github.com/yourusername/mamba-nlp",
		productDescription:
			"Mamba PyTorch is an educational implementation of the Mamba architecture for natural language processing tasks. This project provides a clean, well-documented PyTorch implementation that demonstrates the core concepts of the Mamba model, making it accessible for researchers and students interested in understanding modern NLP architectures. The implementation includes training scripts, model architecture details, and example use cases for various NLP tasks.",
		technologies: ["PyTorch"],
		gallery: [],
	},
	rate: {
		name: "RATE",
		purpose: "Personal",
		industry: "AI",
		year: "2024",
		slug: "rate",
		title: "RATE PyTorch",
		introDescription:
			"This repository contains a PyTorch implementation of the Recurrent Action Transformer with Memory model.",
		link: "https://github.com/yourusername/rate",
		productDescription:
			"RATE PyTorch implements the Recurrent Action Transformer with Memory (RATE) model, a sophisticated architecture designed for sequential decision-making tasks. This implementation provides a comprehensive framework for training and evaluating RATE models on various reinforcement learning and sequential prediction tasks. The repository includes detailed documentation, training utilities, and example applications demonstrating the model's capabilities in handling complex temporal dependencies.",
		technologies: ["PyTorch"],
		gallery: [],
	},
	codebin: {
		name: "Codebin",
		purpose: "Coursework",
		industry: "Software",
		year: "2024",
		slug: "codebin",
		title: "Codebin",
		introDescription:
			"Codebin is a platform that allows users to share code snippets, similar to Pastebin, but with a focus on code sharing and collaboration.",
		link: "https://github.com/yourusername/codebin",
		productDescription:
			"Codebin is a modern code-sharing platform that enables developers to quickly share, collaborate on, and discuss code snippets. Built with Nuxt.js for a fast, SEO-friendly frontend and PostgreSQL for reliable data storage, the platform offers syntax highlighting for multiple programming languages, version control for snippets, and collaborative editing features. Deployed on AWS, Codebin provides a seamless experience for developers to share knowledge and solve problems together.",
		technologies: ["Nuxt", "Postgres", "AWS"],
		gallery: [],
	},
	studybuddy: {
		name: "StudyBuddy",
		purpose: "Hackathon",
		industry: "Education",
		year: "2023",
		slug: "studybuddy",
		title: "StudyBuddy",
		introDescription:
			"Won MozoHack 5.0. StudyBuddy is a project that helps students and teachers find study materials with the help of AI agents.",
		link: "https://github.com/yourusername/studybuddy",
		productDescription:
			"StudyBuddy, winner of MozoHack 5.0, revolutionizes educational resource discovery through AI-powered agents. The platform uses CrewAI to orchestrate multiple AI agents that understand student learning needs, search across various educational resources, and curate personalized study materials. Teachers can also leverage the platform to discover and share high-quality educational content. The Next.js frontend provides an intuitive interface while FastAPI handles the complex AI orchestration and resource aggregation.",
		technologies: ["Next", "FastAPI", "CrewAI"],
		gallery: [],
	},
	snapsave: {
		name: "SnapSave",
		purpose: "Personal",
		industry: "Entertainment",
		year: "2023",
		slug: "snapsave",
		title: "SnapSave",
		introDescription:
			"SnapSave is a event booking platform that enables users to seamlessly reserve tickets for events, while providing admins with powerful tools to create, manage, and monitor event listings.",
		link: "https://github.com/yourusername/snapsave",
		productDescription:
			"SnapSave is a comprehensive event management and ticketing platform that connects event organizers with attendees. Built with Remix for optimal performance and Go for a robust backend, the platform handles everything from event creation and ticket sales to attendance tracking and analytics. The PostgreSQL database ensures reliable transaction processing and data integrity. Event organizers get powerful admin tools for managing listings, monitoring sales, and analyzing attendee demographics, while users enjoy a smooth booking experience with real-time availability updates.",
		technologies: ["Remix", "Go", "Postgres"],
		gallery: [],
	},
};
