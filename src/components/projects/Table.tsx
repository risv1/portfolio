import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { ProjectData } from "../../data/projects";

interface TableProps {
	data: ProjectData[];
	title?: string;
}

const Table: React.FC<TableProps> = ({ data, title }) => {
	const [expandedProject, setExpandedProject] = useState<string | null>(null);

	if (data.length === 0) return null;

	const isUpcomingTable = data.every((p) => p.status === "upcoming");

	return (
		<div className="w-full mb-16">
			{title && <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>}

			<div className="hidden md:flex justify-between text-white/40 text-sm uppercase tracking-wider mb-6 px-4">
				<div className="flex gap-12 md:gap-24">
					<div className="w-32">Purpose</div>
					<div>Project</div>
				</div>
				<div className="flex gap-12 md:gap-24 text-right">
					<div>Industry</div>
					<div className="w-20">Year</div>
				</div>
			</div>

			<div className="flex md:hidden justify-between text-white/40 text-xs uppercase tracking-wider mb-4 px-4">
				<div className="flex-1">Name</div>
				<div className="text-right mr-4">Industry</div>
				{!isUpcomingTable && <div className="w-8"></div>}
			</div>

			<div className="space-y-2">
				{data.map((project, index) => {
					const isUpcoming = project.status === "upcoming";
					const isExpanded = expandedProject === project.slug;

					return (
						<div key={project.slug}>
							<div className="hidden md:block">
								{isUpcoming ? (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: index * 0.1,
											duration: 0.8,
											ease: "easeOut",
										}}
										className="group flex justify-between items-center py-4 px-4 rounded-lg cursor-default"
									>
										<div className="flex gap-12 md:gap-24 items-center">
											<div className="w-32 text-white/60 transition-colors duration-300">
												{project.purpose}
											</div>
											<div>
												<p className="text-white/60 font-medium transition-colors duration-300">
													{project.name}
													<span className="ml-2 text-xs text-white/40">
														(Coming Soon)
													</span>
												</p>
											</div>
										</div>
										<div className="flex gap-12 md:gap-24 items-center text-right">
											<div className="text-white/60 transition-colors duration-300">
												{project.industry}
											</div>
											<div className="w-20 text-white/60 transition-colors duration-300">
												{project.year}
											</div>
										</div>
									</motion.div>
								) : (
									<Link to={`/projects/${project.slug}`}>
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: index * 0.1,
												duration: 0.8,
												ease: "easeOut",
											}}
											className="group flex justify-between items-center py-4 px-4 rounded-lg cursor-pointer"
										>
											<div className="flex gap-12 md:gap-24 items-center">
												<div className="w-32 text-white/60 group-hover:text-white transition-colors duration-300">
													{project.purpose}
												</div>
												<div>
													<p className="text-white/60 group-hover:text-white font-medium transition-colors duration-300">
														{project.name}
													</p>
												</div>
											</div>
											<div className="flex gap-12 md:gap-24 items-center text-right">
												<div className="text-white/60 group-hover:text-white transition-colors duration-300">
													{project.industry}
												</div>
												<div className="w-20 text-white/60 group-hover:text-white transition-colors duration-300">
													{project.year}
												</div>
											</div>
										</motion.div>
									</Link>
								)}
							</div>

							<div className="md:hidden">
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: index * 0.1,
										duration: 0.8,
										ease: "easeOut",
									}}
									className="border-b border-white/10"
								>
									<div
										className={`flex justify-between items-center py-4 px-4 ${!isUpcoming ? "cursor-pointer" : ""}`}
										onClick={() => {
											if (!isUpcoming && !isUpcomingTable) {
												setExpandedProject(isExpanded ? null : project.slug);
											}
										}}
									>
										<div className="flex-1 min-w-0">
											<p className="text-white font-medium text-lg truncate">
												{project.name}
											</p>
										</div>
										<div className="flex items-center gap-4 flex-shrink-0">
											<span className="text-white/60 text-sm">
												{project.industry}
											</span>
											{!isUpcoming && !isUpcomingTable ? (
												<motion.button
													animate={{ rotate: isExpanded ? 45 : 0 }}
													transition={{ duration: 0.2 }}
													className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white text-2xl font-light"
												>
													+
												</motion.button>
											) : null}
										</div>
									</div>

									<AnimatePresence>
										{isExpanded && !isUpcoming && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3, ease: "easeInOut" }}
												className="overflow-hidden"
											>
												<div className="px-4 pb-6 space-y-4">
													{project.introBackground && (
														<div className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-900">
															<img
																src={project.introBackground}
																alt={project.name}
																className="w-full h-full object-cover"
																onError={(e) => {
																	e.currentTarget.style.display = "none";
																}}
															/>
														</div>
													)}

													{project.technologies.length > 0 && (
														<div className="flex flex-wrap gap-2">
															{project.technologies.map((tech, idx) => (
																<span
																	key={idx}
																	className="text-xs px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80"
																>
																	{tech}
																</span>
															))}
														</div>
													)}

													<div className="flex justify-between items-center pt-2">
														<span className="text-white/60 text-sm">
															{project.year}
														</span>
														<Link
															to={`/projects/${project.slug}`}
															className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors"
														>
															Case Study
														</Link>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Table;
