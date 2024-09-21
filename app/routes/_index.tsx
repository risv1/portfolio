import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import Background from '../components/Background';
import Hero from '../components/Hero';
import Section from '../components/Section';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';

const PersonalWebsite: React.FC = () => {
  const techStack = [
    "JavaScript", "TypeScript", "Python", "React", "Next.js", "Vue.js",
    "Nuxt.js", "Node.js", "Express.js", "Postgres"
  ];

  const projects = [
    { title: "StudyBuddy", description: "Helps students and teachers find study materials with AI agents." },
    { title: "Daily", description: "Nuxt.js app to manage everyday schedule and frequent visits." },
    { title: "Xtrabite", description: "Online food delivery database management with Next.js, FastAPI and OracleDB." },
    { title: "Codebin", description: "Nuxt.js app to upload, manage and share code files." },
    { title: "SnapSave", description: "Event ticket purchasing and management app with Remix.js and Go Fiber." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans overflow-x-hidden">
      <Background />
      <div className="relative z-10 snap-y snap-mandatory h-screen overflow-y-scroll">
        <Hero />

        <Section title="About Me & Skills">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-purple-200">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                I'm an undergraduate student studying Computer Science at SRM Institute of Science and Technology.
                Passionate about building web applications and exploring AI, I'm currently learning full-stack development
                and working on projects to enhance my skills in both web development and AI. My goal is to create
                innovative solutions that merge cutting-edge web technologies with artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-purple-200">What I Use</h3>
              <TechStack techs={techStack} />
            </div>
          </div>
        </Section>

        <Section title="Projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Section>

        <Section title="Contact">
          <p className="text-gray-300 mb-10 text-2xl leading-relaxed">
            If you have any questions or would like to discuss a potential project, please feel free to get in touch.
            I'm always open to new opportunities and collaborations.
          </p>
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/rishiviswanathan16/" target='_blank' className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              <Linkedin size={40} />
            </a>
            <a href="https://github.com/risv1" target='_blank' className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              <Github size={40} />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              <Mail size={40} />
            </a>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};

export default PersonalWebsite;