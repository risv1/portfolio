import { motion } from "framer-motion";
import { useState } from "react";

import { skills } from "../../data/skills";

const Skills: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section className="min-h-screen bg-black py-20 px-4 md:px-16 lg:px-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        What I Do
                    </h2>
                    <div className="w-24 h-px bg-white/30 mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border-none">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredSkill(skill.id)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            className={`relative h-[400px] overflow-hidden cursor-pointer group bg-black ${skill.colSpan || ""}`}
                        >
                            <div className="absolute inset-0 transition-all duration-500 bg-black">
                                {skill.image && (
                                    <>
                                        {hoveredSkill === skill.id && skill.hoverImage ? (
                                            <img
                                                src={skill.hoverImage}
                                                alt={`${skill.domain} animation`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : skill.image && hoveredSkill !== skill.id ? (
                                            <img
                                                src={skill.image}
                                                alt={skill.domain}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : null}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                                    </>
                                )}
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                                <motion.h3
                                    className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
                                    initial={{ opacity: 1 }}
                                    whileHover={{ opacity: 1, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {skill.domain}
                                </motion.h3>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: hoveredSkill === skill.id ? 1 : 0,
                                        y: hoveredSkill === skill.id ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-3"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {skill.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{
                                                    opacity: hoveredSkill === skill.id ? 1 : 0,
                                                    scale: hoveredSkill === skill.id ? 1 : 0.8,
                                                }}
                                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                                                className="text-sm md:text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 font-medium"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-8 right-8"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: hoveredSkill === skill.id ? 1 : 0,
                                        scale: hoveredSkill === skill.id ? 1 : 0,
                                        rotate: hoveredSkill === skill.id ? 0 : -45,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                        <span className="text-white text-lg">→</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 w-full h-px bg-linear-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>
        </section>
    );
};

export default Skills;
