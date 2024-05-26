import ProjectSection from "./ProjectSection";

export default function Projects() {
  const projects = [
    {
      name: "StudyBuddy",
      description:
        "StudyBuddy is a project that helps students and teachers find study materials with the help of AI agents.",
      url: "https://github.com/risv1/StudyBuddy",
    },
    {
      name: "Daily",
      description:
        "An application built with Nuxt.js to help me navigate around my frequent visits and manage my everyday schedule.",
      url: "https://github.com/risv1/Daily",
    },
    {
      name: "Xtrabite",
      description:
        "Online food delivery database management application built with Next.js, FastAPI and OracleDB.",
      url: "https://github.com/risv1/Xtrabite",
    },
    {
      name: "Codebin",
      description:
        "Application built with Nuxt.js to help upload and manage code files, and assist with sharing as well.",
      url: "https://github.com/risv1/Codebin",
    },
    {
      name: "SnapSave",
      description:
        "This application deals with purchasing tickets to, and managing, events, built with Remix.js and Go Fiber.",
      url: "https://github.com/risv1/SnapSave",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full h-full flex xl:px-40 lg:px-40 px-10 py-20 flex-col gap-10"
    >
      <h1 className="text-6xl font-extrabold text-white">
        Projects<span className="text-primary">.</span>
      </h1>
      <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
