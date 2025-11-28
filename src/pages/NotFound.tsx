import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import SEO from "../components/common/SEO";
import Default from "../layouts/Default";

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Default>
			<SEO
				title="404"
				description="The page you're looking for doesn't exist."
			/>
			<div className="relative min-h-screen w-full bg-black flex items-center justify-center px-4">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-50" />

				<div className="relative z-10 text-center max-w-2xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<motion.h1
							className="text-8xl md:text-9xl font-bold text-white mb-4"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							404
						</motion.h1>

						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-2xl md:text-4xl font-semibold text-white/80 mb-6"
						>
							Page Not Found
						</motion.h2>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-base md:text-lg text-white/60 mb-12 max-w-md mx-auto"
						>
							The page you're looking for doesn't exist or has been moved.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<button
								onClick={() => navigate(-1)}
								className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 transition-all duration-300 rounded-full backdrop-blur-sm"
							>
								Go Back
							</button>

							<button
								onClick={() => navigate("/")}
								className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full font-medium"
							>
								Return Home
							</button>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
				/>
			</div>
		</Default>
	);
};

export default NotFound;
