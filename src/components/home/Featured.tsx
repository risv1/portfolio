import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

interface Project {
    id: string;
    title: string;
    year: string;
    image: string;
    hoverImage: string; // gif or avif
    skills: string[];
}

const Featured: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Sample projects - replace with actual data
    const featuredProjects: Project[] = [
        {
            id: '1',
            title: 'Marai AI',
            year: '2024',
            image: '/project-1.jpg',
            hoverImage: '/project-1.gif',
            skills: ['React', 'TypeScript', 'AI/ML']
        },
        {
            id: '2',
            title: 'Portfolio Site',
            year: '2024',
            image: '/project-2.jpg',
            hoverImage: '/project-2.gif',
            skills: ['React', 'Framer Motion', 'TailwindCSS']
        },
        {
            id: '3',
            title: 'Research Platform',
            year: '2023',
            image: '/project-3.jpg',
            hoverImage: '/project-3.gif',
            skills: ['Python', 'Django', 'PostgreSQL']
        },
        {
            id: '4',
            title: 'Mobile App',
            year: '2023',
            image: '/project-4.jpg',
            hoverImage: '/project-4.gif',
            skills: ['React Native', 'Node.js', 'MongoDB']
        },
        {
            id: '5',
            title: 'E-commerce Platform',
            year: '2024',
            image: '/project-5.jpg',
            hoverImage: '/project-5.gif',
            skills: ['Next.js', 'Stripe', 'PostgreSQL']
        },
        {
            id: '6',
            title: 'Data Visualization',
            year: '2023',
            image: '/project-6.jpg',
            hoverImage: '/project-6.gif',
            skills: ['D3.js', 'React', 'Python']
        }
    ];

    useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black py-20 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Scrollable Grid */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            {featuredProjects.map((project, index) => (
                                <motion.div
                                    key={`${project.id}-${index}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onHoverStart={() => setHoveredProject(project.id)}
                                    onHoverEnd={() => setHoveredProject(null)}
                                    className="relative aspect-4/5 rounded-lg overflow-hidden cursor-pointer group"
                                >
                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={hoveredProject === project.id ? project.hoverImage : project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-300"
                                            onError={(e) => {
                                                e.currentTarget.src = '';
                                                e.currentTarget.parentElement!.style.background = '#262626';
                                            }}
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                    </div>

                                    {/* Title and Year - Hidden until hover */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white font-bold text-lg">
                                            {project.title}
                                        </h3>
                                        <span className="text-white/70 text-sm font-medium">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Skills - Hidden until hover */}
                                    <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Sticky Header */}
                    <div className="lg:pl-12 sticky top-24 self-start">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Heading with Count */}
                            <div className="space-y-4">
                                <div className="flex items-baseline gap-4">
                                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                        Featured
                                    </h2>
                                    <span className="text-3xl md:text-4xl text-white/50 font-light">
                                        {featuredProjects.length}
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white/80">
                                    Projects
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-white/60 text-lg leading-relaxed max-w-md">
                                A curated selection of my best work, showcasing innovative solutions
                                across web development, mobile apps, and research projects.
                            </p>

                            {/* View All Button */}
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ filter: "brightness(0.9)" }}
                                    className="group flex hover:cursor-pointer items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300"
                                >
                                    View All Projects
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </motion.button>
                            </Link>

                            {/* Decorative Element */}
                            <motion.div
                                className="mt-12 w-full h-px bg-linear-to-r from-white/0 via-white/20 to-white/0"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
