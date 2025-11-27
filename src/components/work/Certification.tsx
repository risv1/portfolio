import { motion } from "framer-motion";

interface CertificationProps {
	name: string;
	provider: string;
	image: string;
	url: string;
	year: string;
	delay?: number;
}

const Certification: React.FC<CertificationProps> = ({
	name,
	provider,
	image,
	url,
	year,
	delay = 0,
}) => {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1, margin: "-50px" }}
			transition={{ duration: 0.8, delay, ease: "easeOut" }}
			className="group relative block bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
		>
			<div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				>
					→
				</a>
			</div>

			<div className="p-6">
				<h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
					{name}
				</h3>
				<div className="flex items-center justify-between">
					<p className="text-sm text-white/60">{provider}</p>
					<p className="text-sm text-white/40 font-mono">{year}</p>
				</div>
			</div>
		</motion.a>
	);
};

export default Certification;
