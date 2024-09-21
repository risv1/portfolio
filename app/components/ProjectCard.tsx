import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, projectLink }) => (
    <motion.div
        className="bg-gray-800/50 p-8 rounded-lg shadow-lg mb-8 border-l-4 border-purple-500"
        whileHover={{ scale: 1.03, borderColor: "#d8b4fe" }}
        transition={{ duration: 0.2 }}
    >
        <div className='flex flex-row w-fit justify-between'>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">{title}</h3>
            <a target='_blank'href={projectLink} className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                <ExternalLink size={24} className='mt-1 ml-3' />
            </a>
        </div>
        <p className="text-gray-300 text-lg">{description}</p>
    </motion.div>
);

export default ProjectCard;