import { motion } from 'framer-motion';

const WorkDescription: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl space-y-8"
        >
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
                className="text-6xl md:text-7xl font-bold text-white"
            >
                Work
            </motion.h1>

            <div className="text-white/90 space-y-6 p-8 md:p-12 rounded-xl">
                <p className="text-md leading-relaxed">
                    My professional journey spans internships, research, and continuous learning through certifications. I've had the opportunity to work on real-world projects that combine software development with data science and machine learning.
                </p>
                <p className="text-md leading-relaxed">
                    From building web platforms with real-time analytics to contributing to research in predictive modeling, I focus on creating solutions that are both technically sound and practically valuable.
                </p>
            </div>
        </motion.div>
    );
};

export default WorkDescription;
