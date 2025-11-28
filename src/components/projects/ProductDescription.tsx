import { motion } from "framer-motion";

interface ProductDescriptionProps {
    description: string;
    productGif?: string;
    technologies?: string[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
    description,
    productGif,
    technologies = [],
}) => {
    return (
        <div className="w-full bg-black relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-48 md:w-96 h-48 md:h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-48 md:w-96 h-48 md:h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative bg-black p-6 md:p-12 lg:p-16 xl:p-20 flex items-center order-2 lg:order-1"
                >
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-linear-to-b from-transparent via-white/30 to-transparent hidden lg:block" />

                    <div className="relative w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6 md:mb-8"
                        >
                            <span className="text-xs uppercase tracking-widest text-white/40 font-medium">
                                About the Project
                            </span>
                            <div className="mt-2 w-12 h-px bg-white/20" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed space-y-4 mb-6 md:mb-8"
                        >
                            {description.split("\n\n").map((paragraph, index) => (
                                <span key={index} className="block">
                                    {paragraph}
                                </span>
                            ))}
                        </motion.p>

                        {technologies.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-6 md:mt-8"
                            >
                                <span className="text-xs uppercase tracking-widest text-white/40 font-medium block mb-3 md:mb-4">
                                    Technologies Used
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                                            className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-white/70 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        <div className="absolute -left-4 top-0 text-6xl md:text-8xl text-white/5 font-serif leading-none hidden md:block">
                            "
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative bg-neutral-950 flex items-center justify-center p-6 md:p-12 lg:p-16 overflow-hidden group order-1 lg:order-2 min-h-[300px] md:min-h-[400px] lg:min-h-0"
                >
                    <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-black to-neutral-950" />

                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: "50px 50px",
                        }}
                    />

                    {productGif ? (
                        <>
                            <div className="relative w-full max-w-2xl">
                                <div className="absolute inset-0 bg-white/10 blur-3xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transform group-hover:scale-[1.02] transition-transform duration-700">
                                    <img
                                        src={productGif}
                                        alt="Product preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="absolute -top-2 -left-2 w-6 md:w-8 h-6 md:h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
                                <div className="absolute -bottom-2 -right-2 w-6 md:w-8 h-6 md:h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
                            </div>
                        </>
                    ) : (
                        <div className="text-white/20 text-center">
                            <div className="text-4xl md:text-6xl mb-4">📷</div>
                            <p className="text-xs md:text-sm">Preview coming soon</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDescription;
