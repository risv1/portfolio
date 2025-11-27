import { motion } from "framer-motion";

interface DetailsCardProps {
	title: string;
	subtitle: string;
	period: string;
	description: string;
	skills?: string[];
	delay?: number;
}

const DetailsCard: React.FC<DetailsCardProps> = ({
	title,
	subtitle,
	period,
	description,
	skills,
	delay = 0,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1, margin: "-50px" }}
			transition={{ duration: 1.0, delay, ease: "easeOut" }}
			className="relative pl-8 border-l border-white/20 hover:border-white/50 transition-colors duration-300"
		>
			<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-white/20" />

			<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
				<h3 className="text-xl font-bold text-white">{title}</h3>
				<span className="text-sm text-white/50 font-mono">{period}</span>
			</div>

			<h4 className="text-lg text-white/80 mb-4">{subtitle}</h4>

			<p className="text-md text-white/60 mb-6 leading-relaxed">
				{description}
			</p>

			{skills && skills.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{skills.map((skill, idx) => (
						<span
							key={idx}
							className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
						>
							{skill}
						</span>
					))}
				</div>
			)}
		</motion.div>
	);
};

export default DetailsCard;
