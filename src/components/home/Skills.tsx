import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
	id: string;
	domain: string;
	image: string;
	hoverImage: string;
	technologies: string[];
	colSpan?: string;
}

const Skills: React.FC = () => {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	const skills: Skill[] = [
		{
			id: "1",
			domain: "Web Development",
			image: "/skills/web.jpg",
			hoverImage: "/skills/web.gif",
			technologies: [
				"Node.js",
				"React.js",
				"TypeScript",
				"Next.js",
				"TailwindCSS",
			],
		},
		{
			id: "2",
			domain: "App Development",
			image: "/skills/app.jpg",
			hoverImage: "/skills/app.gif",
			technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
		},
		{
			id: "3",
			domain: "Research",
			image: "/skills/research.jpg",
			hoverImage: "/skills/research.gif",
			technologies: [
				"Python",
				"R",
				"LaTeX",
				"Data Analysis",
				"Academic Writing",
			],
		},
		{
			id: "4",
			domain: "AI",
			image: "/skills/ai.jpg",
			hoverImage: "/skills/ai.gif",
			technologies: [
				"TensorFlow",
				"PyTorch",
				"OpenAI",
				"LangChain",
				"Hugging Face",
			],
		},
		{
			id: "5",
			domain: "Design",
			image: "/skills/design.jpg",
			hoverImage: "/skills/design.gif",
			technologies: ["Figma", "Adobe XD", "Canva", "Photoshop", "Illustrator"],
			colSpan: "md:col-span-2",
		},
	];

	return (
		<section className="min-h-screen bg-black py-20 px-8 md:px-16 lg:px-24">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
						What I Do
					</h2>
					<div className="w-24 h-px bg-white/30 mt-6" />
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border-none">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.id}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onHoverStart={() => setHoveredSkill(skill.id)}
							onHoverEnd={() => setHoveredSkill(null)}
							className={`relative h-[400px] overflow-hidden cursor-pointer group bg-black ${skill.colSpan || ""}`}
						>
							<div className="absolute inset-0 transition-all duration-500">
								{hoveredSkill === skill.id ? (
									<img
										src={skill.hoverImage}
										alt={`${skill.domain} animation`}
										className="w-full h-full object-cover"
										onError={(e) => {
											e.currentTarget.src = skill.image;
										}}
									/>
								) : (
									<div className="w-full h-full bg-black" />
								)}
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
							</div>

							<div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
								<motion.h3
									className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
									initial={{ opacity: 1 }}
									whileHover={{ opacity: 1, y: -5 }}
									transition={{ duration: 0.2 }}
								>
									{skill.domain}
								</motion.h3>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: hoveredSkill === skill.id ? 1 : 0,
										y: hoveredSkill === skill.id ? 0 : 20,
									}}
									transition={{ duration: 0.3 }}
									className="space-y-3"
								>
									<div className="flex flex-wrap gap-2">
										{skill.technologies.map((tech, idx) => (
											<motion.span
												key={idx}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{
													opacity: hoveredSkill === skill.id ? 1 : 0,
													scale: hoveredSkill === skill.id ? 1 : 0.8,
												}}
												transition={{ duration: 0.2, delay: idx * 0.05 }}
												className="text-sm md:text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 font-medium"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</motion.div>

								<motion.div
									className="absolute bottom-8 right-8"
									initial={{ opacity: 0, scale: 0 }}
									animate={{
										opacity: hoveredSkill === skill.id ? 1 : 0,
										scale: hoveredSkill === skill.id ? 1 : 0,
										rotate: hoveredSkill === skill.id ? 0 : -45,
									}}
									transition={{ duration: 0.3 }}
								>
									<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
										<span className="text-white text-lg">→</span>
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16 w-full h-px bg-linear-to-r from-white/0 via-white/20 to-white/0"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.5 }}
				/>
			</div>
		</section>
	);
};

export default Skills;
