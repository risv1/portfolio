import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <motion.div 
    className="bg-gray-800/50 p-8 rounded-lg shadow-lg mb-8 border-l-4 border-purple-500"
    whileHover={{ scale: 1.03, borderColor: "#d8b4fe" }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-2xl font-semibold mb-4 text-purple-300">{title}</h3>
    <p className="text-gray-300 text-lg">{description}</p>
  </motion.div>
);

export default ProjectCard;