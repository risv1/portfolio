import dhwaniAuth from "../assets/projects/dhwani/auth.png";
import dhwaniDashHome from "../assets/projects/dhwani/dashHome.png";
import dhwaniGif from "../assets/projects/dhwani/dhwani.avif";
import dhwaniHome from "../assets/projects/dhwani/home.png";
import dhwaniNewHospital from "../assets/projects/dhwani/newHospital.png";
import jivaContact from "../assets/projects/jiva/contact.png";
import jivaDashHazard from "../assets/projects/jiva/dashHazard.png";
import jivaDashReport from "../assets/projects/jiva/dashReport.png";
import jivaDashSMPPortal from "../assets/projects/jiva/dashSMPPortal.png";
import jivaFeatSMP from "../assets/projects/jiva/featSMP.png";
import jivaHome from "../assets/projects/jiva/home.png";
import jivaGif from "../assets/projects/jiva/jiva.avif";
import mambaH3 from "../assets/projects/mamba/h3.png";
import mambaSSM from "../assets/projects/mamba/ssm.png";
import maraiAi from "../assets/projects/marai/ai.png";
import maraiCase from "../assets/projects/marai/dashCase.png";
import maraiConsultation from "../assets/projects/marai/dashConsultations.png";
import maraiDashHome from "../assets/projects/marai/dashHome.png";
import maraiHome from "../assets/projects/marai/home.png";
import maraiGif from "../assets/projects/marai/marai.avif";
import mwScraperDashAdvisory from "../assets/projects/mw-scraper/dashAdvisory.png";
import mwScraperDashHome from "../assets/projects/mw-scraper/dashHome.png";
import mwScraperDashPortfolio from "../assets/projects/mw-scraper/dashPortfolio.png";
import mwScraperHome from "../assets/projects/mw-scraper/home.png";
import mwScraperGif from "../assets/projects/mw-scraper/mw-scraper.avif";
import noCapRideDash from "../assets/projects/nocapride/dash.png";
import noCapRideEarnings from "../assets/projects/nocapride/earnings.png";
import noCapRideNewRequest from "../assets/projects/nocapride/newRequest.png";
import noCapRideRides from "../assets/projects/nocapride/rides.png";
import noCapRideSurge from "../assets/projects/nocapride/surge.png";
import rate from "../assets/projects/rate/rate.png";
import sdDashHome from "../assets/projects/showdown/dashHome.png";
import sdFeatures from "../assets/projects/showdown/features.png";
import sdHome from "../assets/projects/showdown/home.png";
import sdGif from "../assets/projects/showdown/showdown.avif";
import sdTable from "../assets/projects/showdown/table.png";
import sdTeam from "../assets/projects/showdown/team.png";
import sbDashHome from "../assets/projects/studybuddy/dashHome.png";
import sbDashResult from "../assets/projects/studybuddy/dashResult.png";
import sbHome from "../assets/projects/studybuddy/home.png";
import sbLogo from "../assets/projects/studybuddy/logo.png";
import vaidyaAQI from "../assets/projects/vaidya/aqi.png";
import vaidyaCrops from "../assets/projects/vaidya/crops.png";
import vaidyaEnergy from "../assets/projects/vaidya/energy.png";
import vaidyaHome from "../assets/projects/vaidya/home.png";
import vaidyaGif from "../assets/projects/vaidya/vaidya.avif";
import verseCall from "../assets/projects/verse/call.png";
import verseFeatures from "../assets/projects/verse/features.png";
import verseGroup from "../assets/projects/verse/group.png";
import verseHome from "../assets/projects/verse/home.png";
import verseGif from "../assets/projects/verse/verse.avif";

export interface ProjectData {
	name: string;
	purpose: string;
	industry: string;
	year: string;
	slug: string;
	status: "completed" | "upcoming";
	title: string;
	introDescription: string;
	link: string;
	introBackground?: string;
	productDescription: string;
	productGif?: string;
	technologies: string[];
	gallery: string[];
}

export const allProjects: ProjectData[] = [
	{
		name: "Cortex",
		purpose: "Personal",
		industry: "AI",
		year: "2026",
		slug: "cortex",
		status: "upcoming",
		title: "Cortex",
		introDescription: "Coming soon.",
		link: "",
		productDescription: "Coming soon.",
		technologies: [],
		gallery: [],
	},
	{
		name: "MAIA",
		purpose: "Personal",
		industry: "AI",
		year: "2026",
		slug: "maia",
		status: "upcoming",
		title: "MAIA",
		introDescription: "Coming soon.",
		link: "",
		productDescription: "Coming soon.",
		technologies: [],
		gallery: [],
	},
	{
		name: "Mewz",
		purpose: "Personal",
		industry: "Productivity",
		year: "2025",
		slug: "mewz",
		status: "upcoming",
		title: "Mewz",
		introDescription: "Coming soon.",
		link: "",
		productDescription: "Coming soon.",
		technologies: [],
		gallery: [],
	},
	{
		name: "Verse",
		purpose: "Coursework",
		industry: "Communication",
		year: "2025",
		slug: "verse",
		status: "completed",
		title: "Verse",
		introBackground: verseHome,
		introDescription:
			"Verse is an innovative communication platform designed to enhance collaboration and connectivity among users through seamless messaging, file sharing, and real-time interaction features.",
		link: "https://github.com/programmingnotjustcoding/verse",
		productGif: verseGif,
		productDescription:
			"Verse revolutionizes the way individuals and teams communicate by providing a unified platform that integrates messaging, file sharing, and real-time collaboration tools. Built with a focus on user experience and scalability, Verse offers features such as group chats, video conferencing, and document collaboration, all within a secure and intuitive interface. The platform leverages modern web technologies to ensure fast performance and reliability, making it an ideal solution for both personal and professional communication needs.",
		technologies: [
			"React",
			"Hono",
			"LiveKit",
			"Postgres",
			"CoTURN",
			"Redis",
			"Kafka",
		],
		gallery: [verseHome, verseCall, verseGroup, verseFeatures],
	},
	{
		name: "MW Scraper",
		purpose: "Internship",
		industry: "Finance",
		year: "2025",
		slug: "mw-scraper",
		status: "completed",
		title: "MW Scraper",
		introBackground: mwScraperHome,
		introDescription:
			"This application combines stock prices, historical performance, and news sentiment to deliver data-driven insights, helping users manage portfolios and make smarter investment decisions.",
		link: "https://github.com/risv1/mw-scraper",
		productGif: mwScraperGif,
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
		gallery: [
			mwScraperHome,
			mwScraperDashHome,
			mwScraperDashPortfolio,
			mwScraperDashAdvisory,
		],
	},
	{
		name: "Showdown",
		purpose: "Personal",
		industry: "Gaming",
		year: "2025",
		slug: "showdown",
		status: "completed",
		title: "Showdown",
		introBackground: sdHome,
		introDescription:
			"Dynamic tournament management platform for Pokemon battles. Built for competitive players who want to organize epic battles, track team performance, and export comprehensive results.",
		link: "https://showdown-bois.vercel.app/",
		productGif: sdGif,
		productDescription:
			"Showdown is a feature-rich tournament management platform designed specifically for Pokemon competitive battles. The platform enables organizers to create and manage tournaments, track player statistics, monitor team compositions, and generate detailed performance reports. With real-time updates and Redis caching, participants get instant notifications about match results and tournament progress.",
		technologies: ["React", "Hono", "Postgres", "Redis"],
		gallery: [sdHome, sdFeatures, sdDashHome, sdTable, sdTeam],
	},
	{
		name: "Marai",
		purpose: "Coursework",
		industry: "Legal",
		year: "2025",
		slug: "marai",
		status: "completed",
		title: "Marai",
		introBackground: maraiHome,
		introDescription:
			"Marai is a cloud-based platform that streamlines legal consultations, case management, and AI-driven analysis for law firms and clients.",
		link: "https://github.com/programmingnotjustcoding/marai",
		productGif: maraiGif,
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
		gallery: [maraiHome, maraiDashHome, maraiConsultation, maraiCase, maraiAi],
	},
	{
		name: "Jiva",
		purpose: "Coursework",
		industry: "Regulatory",
		year: "2025",
		slug: "jiva",
		status: "completed",
		title: "Jiva",
		introBackground: jivaHome,
		introDescription:
			"Jiva is a DGMS-compliant platform that digitizes Safety Management Plans (SMP) to enhance safety, streamline operations, and improve communication in coal mines.",
		link: "https://github.com/programmingnotjustcoding/jiva",
		productGif: jivaGif,
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
		gallery: [
			jivaHome,
			jivaFeatSMP,
			jivaContact,
			jivaDashSMPPortal,
			jivaDashHazard,
			jivaDashReport,
		],
	},
	{
		name: "NoCapRide",
		purpose: "Hackathon",
		industry: "Transport",
		year: "2025",
		slug: "nocapride",
		status: "completed",
		title: "NoCapRide",
		introBackground: noCapRideSurge,
		introDescription:
			"Incentive model for NammaYatri. A machine learning-powered ride-hailing platform backend with intelligent demand forecasting and surge pricing capabilities.",
		link: "https://github.com/programmingnotjustcoding/nocapride",
		productGif: noCapRideDash,
		productDescription:
			"NoCapRide introduces an innovative incentive model for the NammaYatri ride-hailing platform. Using advanced machine learning algorithms, the system predicts demand patterns and implements intelligent surge pricing to balance supply and demand. The platform analyzes historical ride data, weather conditions, and local events to optimize driver allocation and passenger wait times, creating a more efficient and fair ride-hailing ecosystem.",
		technologies: ["Next", "FastAPI", "Scikit-learn"],
		gallery: [
			noCapRideSurge,
			noCapRideDash,
			noCapRideNewRequest,
			noCapRideRides,
			noCapRideEarnings,
		],
	},
	{
		name: "Dhwani",
		purpose: "Hackathon",
		industry: "Healthcare",
		year: "2024",
		slug: "dhwani",
		status: "completed",
		title: "Dhwani",
		introBackground: dhwaniHome,
		introDescription:
			"Won internals at SIH-2024 SRMIST. An application designed to streamline interactions between supervisors and the therapists under their guidance.",
		link: "https://github.com/risv1/dhwani",
		productGif: dhwaniGif,
		productDescription:
			"Dhwani, winner of SIH-2024 SRMIST internals, is a comprehensive healthcare management platform that facilitates efficient communication and workflow management between therapy supervisors and their therapists. The monorepo architecture built with Turborepo ensures code sharing and consistent development practices across the platform. Features include session scheduling, patient progress tracking, resource sharing, and performance analytics, all deployed on AWS infrastructure for reliability and scalability.",
		technologies: ["Next", "Nest", "Turborepo", "Postgres", "Redis", "AWS"],
		gallery: [dhwaniHome, dhwaniAuth, dhwaniDashHome, dhwaniNewHospital],
	},
	{
		name: "Vaidya",
		purpose: "Coursework",
		industry: "Agriculture",
		year: "2024",
		slug: "vaidya",
		status: "completed",
		title: "Vaidya",
		introBackground: vaidyaHome,
		introDescription:
			"This project focuses on analyzing weather data to make various predictions that can impact multiple sectors.",
		link: "https://github.com/risv1/vaidya",
		productGif: vaidyaGif,
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
		gallery: [vaidyaHome, vaidyaCrops, vaidyaEnergy, vaidyaAQI],
	},
	{
		name: "Mamba NLP",
		purpose: "Personal",
		industry: "AI",
		year: "2024",
		slug: "mamba-nlp",
		status: "completed",
		title: "Mamba PyTorch",
		introBackground: mambaH3,
		introDescription:
			"This repository contains a basic PyTorch implementation of the Mamba model for NLP.",
		link: "https://github.com/risv1/mamba-nlp",
		productGif: mambaSSM,
		productDescription:
			"Mamba PyTorch is an educational implementation of the Mamba architecture for natural language processing tasks. This project provides a clean, well-documented PyTorch implementation that demonstrates the core concepts of the Mamba model, making it accessible for researchers and students interested in understanding modern NLP architectures. The implementation includes training scripts, model architecture details, and example use cases for various NLP tasks.",
		technologies: ["PyTorch"],
		gallery: [mambaSSM, mambaH3],
	},
	{
		name: "RATE",
		purpose: "Personal",
		industry: "AI",
		year: "2024",
		slug: "rate",
		status: "completed",
		title: "RATE PyTorch",
		introBackground: rate,
		introDescription:
			"This repository contains a PyTorch implementation of the Recurrent Action Transformer with Memory model.",
		link: "https://github.com/risv1/rate-pytorch",
		productGif: rate,
		productDescription:
			"RATE PyTorch implements the Recurrent Action Transformer with Memory (RATE) model, a sophisticated architecture designed for sequential decision-making tasks. This implementation provides a comprehensive framework for training and evaluating RATE models on various reinforcement learning and sequential prediction tasks. The repository includes detailed documentation, training utilities, and example applications demonstrating the model's capabilities in handling complex temporal dependencies.",
		technologies: ["PyTorch"],
		gallery: [],
	},
	{
		name: "StudyBuddy",
		purpose: "Hackathon",
		industry: "Education",
		year: "2023",
		slug: "studybuddy",
		status: "completed",
		title: "StudyBuddy",
		introBackground: sbHome,
		introDescription:
			"Won MozoHack 5.0. StudyBuddy is a project that helps students and teachers find study materials with the help of AI agents.",
		link: "https://github.com/risv1/studybuddy",
		productGif: sbLogo,
		productDescription:
			"StudyBuddy, winner of MozoHack 5.0, revolutionizes educational resource discovery through AI-powered agents. The platform uses CrewAI to orchestrate multiple AI agents that understand student learning needs, search across various educational resources, and curate personalized study materials. Teachers can also leverage the platform to discover and share high-quality educational content. The Next.js frontend provides an intuitive interface while FastAPI handles the complex AI orchestration and resource aggregation.",
		technologies: ["Next", "FastAPI", "CrewAI"],
		gallery: [sbHome, sbDashHome, sbDashResult, sbLogo],
	},
];

export const featuredProjects: ProjectData[] = allProjects.filter((p) =>
	[
		"mw-scraper",
		"showdown",
		"marai",
		"jiva",
		"nocapride",
		"dhwani",
		"studybuddy",
	].includes(p.slug),
);

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
	return allProjects.find((p) => p.slug === slug);
};
