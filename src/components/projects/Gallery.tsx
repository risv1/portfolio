import { motion } from "framer-motion";

interface GalleryProps {
	images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	const getImageLayout = (index: number, total: number) => {
		if (index === total - 1) {
			return "full";
		}

		const remaining = total - index;

		if (remaining === 2) {
			return "half";
		}

		let fullCount = 0;
		let halfPairCount = 0;

		for (let i = 0; i < index; i++) {
			if (i === total - 1) break;

			const rem = total - i;
			if (rem === 2 && i < total - 1) {
				halfPairCount++;
				continue;
			}

			const position = i - halfPairCount * 2;
			if (position % 3 === 0) {
				fullCount++;
			}
		}

		const adjustedIndex = index - Math.floor(index / 3) * 3;
		return adjustedIndex === 0 ? "full" : "half";
	};

	const renderImages = () => {
		const elements: React.JSX.Element[] = [];
		let i = 0;

		while (i < images.length) {
			const layout = getImageLayout(i, images.length);

			if (layout === "full") {
				elements.push(
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.0, ease: "easeOut" }}
						className="w-full aspect-video group relative overflow-hidden"
					>
						<div className="relative w-full h-full overflow-hidden">
							<img
								src={images[i]}
								alt={`Gallery image ${i + 1}`}
								className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500" />
						</div>
					</motion.div>,
				);
				i++;
			} else {
				const hasNext =
					i + 1 < images.length &&
					getImageLayout(i + 1, images.length) === "half";

				if (hasNext) {
					elements.push(
						<div
							key={`pair-${i}`}
							className="grid grid-cols-1 md:grid-cols-2 gap-1"
						>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1.0, ease: "easeOut" }}
								className="w-full aspect-video group relative overflow-hidden"
							>
								<div className="relative w-full h-full overflow-hidden">
									<img
										src={images[i]}
										alt={`Gallery image ${i + 1}`}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-colors duration-500 rounded-tr-lg" />
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
								className="w-full aspect-video group relative overflow-hidden"
							>
								<div className="relative w-full h-full overflow-hidden">
									<img
										src={images[i + 1]}
										alt={`Gallery image ${i + 2}`}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-linear-to-bl from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/0 group-hover:border-white/30 transition-colors duration-500 rounded-bl-lg" />
								</div>
							</motion.div>
						</div>,
					);
					i += 2;
				} else {
					elements.push(
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1.0, ease: "easeOut" }}
							className="w-full aspect-video group relative overflow-hidden"
						>
							<div className="relative w-full h-full overflow-hidden">
								<img
									src={images[i]}
									alt={`Gallery image ${i + 1}`}
									className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								<div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500" />
							</div>
						</motion.div>,
					);
					i++;
				}
			}
		}

		return elements;
	};

	return (
		<div className="w-full bg-black relative">
			<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

			<div className="py-1">{renderImages()}</div>

			<div className="h-20 bg-linear-to-b from-transparent to-black/50" />
		</div>
	);
};

export default Gallery;
