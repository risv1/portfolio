import { motion } from "framer-motion";
import mountains from "../assets/backgrounds/mountains.jpg";
import DetailsCard from "../components/common/DetailsCard";
import Certification from "../components/work/Certification";
import WorkDescription from "../components/work/WorkDescription";
import {
	certificationsData,
	professionalData,
	publicationsData,
} from "../data/work";
import Default from "../layouts/Default";

const Work: React.FC = () => {
	return (
		<Default>
			<div className="relative min-h-screen w-full">
				<div className="fixed inset-0 z-0">
					<img
						src={mountains}
						alt="Mountains Background"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/70" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-screen">
						<div className="lg:h-[80vh] md:h-[70vh] h-[90vh] lg:sticky lg:top-0 flex flex-col justify-end pb-12 lg:pb-24 pt-24 lg:pt-0">
							<WorkDescription />
						</div>

						<div className="py-12 lg:py-24 space-y-20">
							<div className="space-y-12">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                    className="text-3xl font-bold text-white mb-8"
                                >
                                    Professional
                                </motion.h2>
								<div className="space-y-12">
									{professionalData.map((job, index) => (
										<DetailsCard key={index} {...job} delay={index * 0.2} />
									))}
								</div>
							</div>

							<div className="space-y-12">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                    className="text-3xl font-bold text-white mb-8"
                                >
                                    Publications
                                </motion.h2>
								<div className="space-y-12">
									{publicationsData.map((pub, index) => (
										<DetailsCard key={index} {...pub} delay={index * 0.2} />
									))}
								</div>
							</div>

							<div className="space-y-12">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                    className="text-3xl font-bold text-white mb-8"
                                >
                                    Certifications
                                </motion.h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{certificationsData.map((cert, index) => (
										<Certification key={index} {...cert} delay={index * 0.1} />
									))}
								</div>
							</div>

							<div className="h-24" />
						</div>
					</div>
				</div>
			</div>
		</Default>
	);
};

export default Work;
