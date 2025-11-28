import { motion } from "framer-motion";

interface IntroDescriptionProps {
    title: string;
    description: string;
    link: string;
    backgroundImage?: string;
}

const IntroDescription: React.FC<IntroDescriptionProps> = ({
    title,
    description,
    link,
    backgroundImage,
}) => {
    const isGithub = link.toLowerCase().includes("github");

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                {backgroundImage ? (
                    <>
                        <img
                            src={backgroundImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/80" />
                        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/40" />
                    </>
                ) : (
                    <div className="w-full h-full bg-black" />
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
            </motion.div>

            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

            <div className="relative z-10 h-full flex flex-col justify-between px-4 md:px-12 lg:px-20 py-8 md:py-12 pt-24 md:pt-32 lg:pt-36">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-3xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-white max-w-5xl leading-[0.95] tracking-tight">
                        {title}
                    </h1>
                    <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full" />
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                        className="relative max-w-2xl w-full lg:w-auto"
                    >
                        <div className="absolute -inset-4 md:-inset-6 bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/5" />
                        <p className="relative text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed p-4 md:p-6">
                            {description}
                        </p>
                    </motion.div>

                    <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="group relative flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-full backdrop-blur-md transition-all duration-500 overflow-hidden shrink-0"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <span className="relative text-white font-medium tracking-wide text-sm md:text-base">
                            {isGithub ? "View on GitHub" : "Visit Project"}
                        </span>

                        <svg
                            className="relative w-4 h-4 md:w-5 md:h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </motion.a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
        </div>
    );
};

export default IntroDescription;
