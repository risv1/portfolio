import oraclePreview from "../assets/oracle-preview.png";
import rhcsaPreview from "../assets/rhcsa-preview.png";

export interface WorkItem {
	title: string;
	subtitle: string;
	period: string;
	description: string;
	skills?: string[];
}

export interface PublicationItem {
	title: string;
	subtitle: string;
	period: string;
	description: string;
}

export interface CertificationItem {
	name: string;
	provider: string;
	image: string;
	url: string;
	year: string;
}

export const professionalData: WorkItem[] = [
	{
		title: "Hexaware Technologies",
		subtitle: "Intern • Part-time",
		period: "Jun 2025 - Aug 2025",
		description:
			"Developed a web platform to manage stock portfolios with real-time news sentiment analysis to measure portfolio impact, enabling data-driven investment decisions. Contributed to building an internal tool that streamlined the creation of business proposals, improving efficiency and collaboration across teams.",
		skills: ["React", "FastAPI", "Postgres", "Azure", "Scikit-learn", "n8n"],
	},
	{
		title: "Vyana Technologies",
		subtitle: "Intern • Part-time",
		period: "Dec 2024 - Jan 2025",
		description:
			"Worked on a MERN stack application with a focus on enhancing functionality and performance, while implementing integration testing with Jest to ensure system reliability. Collaborated with the team to deliver features aligned with business requirements and improve overall application quality.",
		skills: ["Jest", "Express", "MongoDB", "Node.js"],
	},
];

export const publicationsData: PublicationItem[] = [
	{
		title:
			"Predictive Salary Modelling: Leveraging Data Science Skills and Machine Learning for Accurate Forecasting",
		subtitle: "IEEE",
		period: "Feb 6, 2025",
		description:
			'Presented at the "9th International Conference on Communication and Electronics Systems (ICCES-2024)"',
	},
];

export const certificationsData: CertificationItem[] = [
	{
		name: "RedHat Certified System Administrator",
		provider: "Red Hat",
		image: rhcsaPreview,
		url: "https://www.credly.com/badges/your-rhcsa-badge",
		year: "2025",
	},
	{
		name: "Oracle Certified Cloud Foundations Associate",
		provider: "Oracle",
		image: oraclePreview,
		url: "https://www.credly.com/badges/your-oracle-badge",
		year: "2025",
	},
];
