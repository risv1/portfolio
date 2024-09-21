import { motion } from 'framer-motion';

interface TechStackProps {
  techs: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techs }) => (
  <div className="flex flex-wrap gap-4 mt-8">
    {techs.map((tech, index) => (
      <motion.span
        key={tech}
        className="px-6 py-3 bg-purple-900/50 rounded-full text-lg font-medium border border-purple-500/50 shadow-lg text-purple-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {tech}
      </motion.span>
    ))}
  </div>
);

export default TechStack;