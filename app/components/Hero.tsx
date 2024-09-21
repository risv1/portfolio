import { motion } from 'framer-motion';

const Hero: React.FC = () => (
  <motion.div 
    className="h-screen flex flex-col justify-center items-center text-center p-12 snap-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.h1 
      className="text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Hi, I'm Rishi
    </motion.h1>
    <motion.p 
      className="text-4xl mb-12 text-gray-300"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Web Developer | AI Enthusiast | B.Tech Student
    </motion.p>
  </motion.div>
);

export default Hero;