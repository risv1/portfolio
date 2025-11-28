import { motion } from "framer-motion";
import mountains from "../assets/backgrounds/mountains.jpg";
import Description from "../components/about/Description";
import DetailsCard from "../components/common/DetailsCard";
import SEO from "../components/common/SEO";
import { communitiesData, educationData } from "../data/about";
import Default from "../layouts/Default";

const About: React.FC = () => {
	return (
		<Default>
			<SEO
				title="About"
				description="Learn more about Rishi Viswanathan's background, education, and community involvement."
			/>
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
						<div className="lg:h-screen md:h-screen h-screen lg:sticky lg:top-0 flex flex-col justify-center pb-12 lg:pb-0 pt-24 lg:pt-0">
							<Description />
						</div>

						<div className="py-12 lg:py-24 space-y-20">
							<div className="space-y-12">
								<motion.h2
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1.0, ease: "easeOut" }}
									className="text-3xl font-bold text-white mb-8"
								>
									Education
								</motion.h2>
								<div className="space-y-12">
									{educationData.map((edu, index) => (
										<DetailsCard key={index} {...edu} delay={index * 0.2} />
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
									Communities & Organizations
								</motion.h2>
								<div className="space-y-12">
									{communitiesData.map((role, index) => (
										<DetailsCard key={index} {...role} delay={index * 0.2} />
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

export default About;
