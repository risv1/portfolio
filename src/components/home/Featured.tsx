import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { featuredProjects } from "../../data/projects";

const Featured: React.FC = () => {
	const [hoveredProject, setHoveredProject] = useState<string | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

	useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen bg-black py-20 px-4 md:px-16 lg:px-24 overflow-x-hidden"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					<div className="lg:pl-12 lg:sticky lg:top-24 lg:self-start order-1 lg:order-2">
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="space-y-6 lg:space-y-8"
						>
							<div className="space-y-2 lg:space-y-4">
								<div className="flex items-baseline gap-3 lg:gap-4">
									<h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
										Featured
									</h2>
									<span className="text-2xl md:text-3xl lg:text-4xl text-white/50 font-light">
										{featuredProjects.length}
									</span>
								</div>
								<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/80">
									Projects
								</h3>
							</div>

							<p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md">
								A curated selection of my best work, showcasing innovative
								solutions across web development, mobile apps, and research
								projects.
							</p>

							<Link to="/projects">
								<motion.button
									whileHover={{ filter: "brightness(0.9)" }}
									className="group flex hover:cursor-pointer items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 text-sm lg:text-base"
								>
									View All Projects
									<span className="transition-transform duration-300 group-hover:translate-x-1">
										→
									</span>
								</motion.button>
							</Link>

							<motion.div
								className="mt-8 lg:mt-12 w-full h-px bg-linear-to-r from-white/0 via-white/20 to-white/0"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1, delay: 0.5 }}
							/>
						</motion.div>
					</div>

					<div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
						<div className="grid grid-cols-2 gap-3 lg:gap-4">
							{featuredProjects.map((project, index) => (
								<motion.div
									key={`${project.slug}-${index}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									onHoverStart={() => setHoveredProject(project.slug)}
									onHoverEnd={() => setHoveredProject(null)}
									className="relative aspect-4/5 rounded-lg overflow-hidden cursor-pointer group"
									onClick={() => navigate(`/projects/${project.slug}`)}
								>
									<div className="absolute inset-0 bg-neutral-900">
										{project.gallery && project.gallery.length > 0 && (
											<>
												<img
													src={
														hoveredProject === project.slug &&
														project.productGif
															? project.productGif
															: project.gallery[0]
													}
													alt={project.name}
													className="w-full h-full object-cover transition-all duration-300"
													onError={(e) => {
														e.currentTarget.style.display = "none";
													}}
												/>
												<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
											</>
										)}
									</div>

									<div className="absolute top-3 lg:top-4 left-3 lg:left-4 right-3 lg:right-4 flex justify-between items-start z-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<h3 className="text-white font-bold text-sm lg:text-lg">
											{project.name}
										</h3>
										<span className="text-white/70 text-xs lg:text-sm font-medium">
											{project.year}
										</span>
									</div>

									<div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="flex flex-wrap gap-1 lg:gap-2">
											{project.technologies?.slice(0, 3).map((tech, idx) => (
												<span
													key={idx}
													className="text-[10px] lg:text-xs px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
