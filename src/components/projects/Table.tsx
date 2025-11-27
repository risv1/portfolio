import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ProjectData {
    name: string;
    purpose: string;
    industry: string;
    year: string;
    slug: string;
    status?: 'completed' | 'upcoming';
}

interface TableProps {
    data: ProjectData[];
    title?: string;
}

const Table: React.FC<TableProps> = ({ data, title }) => {
    if (data.length === 0) return null;

    return (
        <div className="w-full mb-16">
            {title && (
                <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
            )}

            {/* Header */}
            <div className="flex justify-between text-white/40 text-sm uppercase tracking-wider mb-6 px-4">
                <div className="flex gap-12 md:gap-24">
                    <div className="w-32">Purpose</div>
                    <div>Project</div>
                </div>
                <div className="flex gap-12 md:gap-24 text-right">
                    <div>Industry</div>
                    <div className="w-20">Year</div>
                </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
                {data.map((project, index) => {
                    const isUpcoming = project.status === 'upcoming';
                    const RowContent = (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className={`group flex justify-between items-center py-4 px-4 rounded-lg ${isUpcoming ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                            <div className="flex gap-12 md:gap-24 items-center">
                                <div className={`w-32 text-white/60 ${!isUpcoming && 'group-hover:text-white'} transition-colors duration-300`}>
                                    {project.purpose}
                                </div>
                                <div>
                                    <p
                                        className={`text-white/60 ${!isUpcoming && 'group-hover:text-white'} font-medium transition-colors duration-300`}
                                    >
                                        {project.name}
                                        {isUpcoming && <span className="ml-2 text-xs text-white/40">(Coming Soon)</span>}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-12 md:gap-24 items-center text-right">
                                <div className={`text-white/60 ${!isUpcoming && 'group-hover:text-white'} transition-colors duration-300`}>
                                    {project.industry}
                                </div>
                                <div className={`w-20 text-white/60 ${!isUpcoming && 'group-hover:text-white'} transition-colors duration-300`}>
                                    {project.year}
                                </div>
                            </div>
                        </motion.div>
                    );

                    return isUpcoming ? (
                        <div key={project.slug}>
                            {RowContent}
                        </div>
                    ) : (
                        <Link to={`/projects/${project.slug}`} key={project.slug}>
                            {RowContent}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Table;
