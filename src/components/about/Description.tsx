import { motion } from "framer-motion";

const Description: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
			className="max-w-xl text-white/90 space-y-6 p-8 md:p-12 rounded-xl"
		>
			<p className="text-md leading-relaxed">
				Hi, I’m Rishi, a student and developer with a passion for application
				development and deep learning. I enjoy building thoughtful, user-centric
				solutions while exploring the potential of intelligent systems to solve
				real-world challenges.
			</p>
			<p className="text-md leading-relaxed">
				In the development space, I focus on creating scalable and maintainable
				applications that deliver seamless user experiences. Alongside this, I
				explore the world of deep learning, working on projects that apply AI
				techniques to uncover insights, automate tasks, and enhance
				functionality across domains.
			</p>
			<p className="text-md leading-relaxed">
				Outside of coding, I enjoy casual gaming, watching anime, and
				experimenting with 3D modeling as a creative outlet.
			</p>
		</motion.div>
	);
};

export default Description;
