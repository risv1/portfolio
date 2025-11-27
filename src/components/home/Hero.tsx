import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LatestUpdate {
    id: string;
    image: string;
    title: string;
    description: string;
}

const Hero: React.FC = () => {
    // Sample latest updates - replace with actual data
    const latestUpdates: LatestUpdate[] = [
        {
            id: '1',
            image: '/placeholder-update-1.jpg',
            title: 'New Project Launch',
            description: 'Working on an AI-powered application'
        },
        {
            id: '2',
            image: '/placeholder-update-2.jpg',
            title: 'Research Paper',
            description: 'Published findings on ML optimization'
        }
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* 3D Model Background Container - To be implemented */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for 3D model */}
                <div className="h-full w-full bg-black" />
            </div>

            {/* Main Content with z-index */}
            <div className="relative z-10 flex h-[calc(100vh-8rem)] items-center justify-center">
                {/* Work Link - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute left-12 md:left-24 lg:left-32"
                >
                    <Link to="/work">
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white cursor-pointer transition-all duration-300"
                            whileHover={{
                                filter: "blur(2px) brightness(0.7)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Work
                        </motion.h1>
                    </Link>
                </motion.div>

                {/* Projects Link - Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute right-12 md:right-24 lg:right-32"
                >
                    <Link to="/projects">
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white cursor-pointer transition-all duration-300"
                            whileHover={{
                                filter: "blur(2px) brightness(0.7)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Projects
                        </motion.h1>
                    </Link>
                </motion.div>
            </div>

            {/* Latest Updates - Bottom Right */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-8 right-8 z-20 space-y-4"
            >
                <h3 className="text-white text-xl font-semibold mb-4">Latest</h3>
                <div className="space-y-3">
                    {latestUpdates.map((update, index) => (
                        <motion.div
                            key={update.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg max-w-sm transition-all duration-300 hover:brightness-110"
                        >
                            {/* Image */}
                            <div className="w-16 h-16 shrink-0 bg-neutral-800 rounded-md overflow-hidden">
                                <img
                                    src={update.image}
                                    alt={update.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="text-white font-semibold text-sm truncate">
                                    {update.title}
                                </h4>
                                <p className="text-white/70 text-xs mt-1 line-clamp-2">
                                    {update.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
