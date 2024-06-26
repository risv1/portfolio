export default function About() {
  const tools = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Python" },
    { id: 4, name: "React" },
    { id: 5, name: "Next.js" },
    { id: 6, name: "Vue.js" },
    { id: 7, name: "Nuxt.js" },
    { id: 8, name: "Node.js" },
    { id: 9, name: "Express.js" },
    { id: 10, name: "Postgres" },
  ];

  return (
    <div
      id="about"
      className="w-full h-full flex xl:px-40 lg:px-40 px-10 py-20 xl:flex-row lg:flex-row flex-col gap-5"
    >
      <div className="xl:w-[60%] lg:w-[60%] w-full h-full flex flex-col gap-7">
        <h1 className="text-6xl font-extrabold text-white">
          About<span className="text-primary">.</span>
        </h1>
        <p className="text-gray-300 text-light text-xl">
          Hi, I&apos;m Rishi! I&apos;m an undergraduate student studying
          Computer Science at SRM Institute of Science and Technology. I&apos;m
          passionate about building web applications and exploring the field of
          AI. I&apos;m currently learning full-stack development and working on
          a few projects to enhance my skills.
        </p>
        <p className="text-gray-300 text-light text-xl">
          I&apos;m also an AI enthusiast and I&apos;m exploring the field of AI
          to build applications that can help solve real-world problems.
          I&apos;m currently learning about machine learning and deep learning
          and working on projects to understand the concepts better.
        </p>
      </div>
      <div className="xl:w-[40%] lg:w-[40%] w-full h-full flex flex-col items-center gap-5">
        <h2 className="text-white font-bold text-3xl">
          What I use<span className="text-primary">...</span>
        </h2>
        <div className="w-full h-2/5 grid grid-cols-4 gap-2">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="w-full h-fit p-3 rounded-lg flex justify-center items-center hover:bg-red-700 duration-150 ease-in-out bg-primary"
            >
              <p className="text-white text-xs font-bold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
