import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.section 
    className="min-h-screen flex flex-col justify-center p-12 snap-start"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bold mb-10 text-purple-300 border-b-2 border-purple-500/30 pb-4">{title}</h2>
    {children}
  </motion.section>
);

export default Section;