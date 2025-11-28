import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Table from "../components/projects/Table";
import { allProjects } from "../data/projects";
import Default from "../layouts/Default";

const Projects: React.FC = () => {
    const [industryFilter, setIndustryFilter] = useState<string | null>(null);
    const [purposeFilter, setPurposeFilter] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const industries = Array.from(new Set(allProjects.map((p) => p.industry)));
    const purposes = Array.from(new Set(allProjects.map((p) => p.purpose)));

    const filteredProjects = useMemo(() => {
        return allProjects.filter((project) => {
            const matchIndustry = industryFilter
                ? project.industry === industryFilter
                : true;
            const matchPurpose = purposeFilter
                ? project.purpose === purposeFilter
                : true;
            return matchIndustry && matchPurpose;
        });
    }, [industryFilter, purposeFilter]);

    const completedProjects = filteredProjects.filter(
        (p) => p.status === "completed",
    );
    const upcomingProjects = filteredProjects.filter(
        (p) => p.status === "upcoming",
    );

    const clearFilters = () => {
        setIndustryFilter(null);
        setPurposeFilter(null);
    };

    return (
        <Default>
            <div className="min-h-screen w-full bg-black pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 overflow-x-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-4 md:gap-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white"
                        >
                            Projects
                        </motion.h1>

                        <div className="relative w-full md:w-auto">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
                            >
                                <span className="text-sm font-medium">Filters</span>
                                <span className="text-xs">{isFilterOpen ? "−" : "+"}</span>
                                {(industryFilter || purposeFilter) && (
                                    <span className="ml-2 w-2 h-2 rounded-full bg-white animate-pulse" />
                                )}
                            </button>

                            <AnimatePresence>
                                {isFilterOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setIsFilterOpen(false)}
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute left-0 md:left-auto md:right-0 top-full mt-4 w-[calc(100vw-2rem)] md:w-72 bg-neutral-900 border border-white/10 rounded-xl p-5 md:p-6 shadow-2xl z-50"
                                        >
                                            <div className="space-y-5 md:space-y-6">
                                                <div>
                                                    <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                                                        Industry
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {industries.map((ind) => (
                                                            <button
                                                                key={ind}
                                                                onClick={() =>
                                                                    setIndustryFilter(
                                                                        industryFilter === ind ? null : ind,
                                                                    )
                                                                }
                                                                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                                                                    industryFilter === ind
                                                                        ? "bg-white text-black border-white"
                                                                        : "bg-transparent text-white/60 border-white/20 hover:border-white/50"
                                                                }`}
                                                            >
                                                                {ind}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                                                        Purpose
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {purposes.map((purp) => (
                                                            <button
                                                                key={purp}
                                                                onClick={() =>
                                                                    setPurposeFilter(
                                                                        purposeFilter === purp ? null : purp,
                                                                    )
                                                                }
                                                                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                                                                    purposeFilter === purp
                                                                        ? "bg-white text-black border-white"
                                                                        : "bg-transparent text-white/60 border-white/20 hover:border-white/50"
                                                                }`}
                                                            >
                                                                {purp}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {(industryFilter || purposeFilter) && (
                                                    <button
                                                        onClick={clearFilters}
                                                        className="w-full text-xs text-center text-white/40 hover:text-white transition-colors pt-3 border-t border-white/10"
                                                    >
                                                        Clear Filters
                                                    </button>
                                                )}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        <Table data={completedProjects} title="Selected Works" />
                        <Table data={upcomingProjects} title="Upcoming" />
                    </div>
                </div>
            </div>
        </Default>
    );
};

export default Projects;
