import Image from "next/image";
type Project = {
  name: string;
  description: string;
  url: string;
};

export default function ProjectSection({ project }: { project: Project }) {
  return (
    <div className="w-full h-full flex flex-col items-center p-5 border rounded-md bg-black hover:bg-transparent">
      <h2 className="text-3xl text-primary w-full self-start font-bold flex flex-row items-center gap-5">
        {project.name}{" "}
        <a href={project.url} className="text-primary ml-auto text-lg p-3">
          <Image
            src="/github-mark-white.svg"
            alt="Github"
            width={35}
            height={35}
          />
        </a>
      </h2>
      <Image
        className="p-3"
        src={"/pikachu-running.gif"}
        alt="Pikachu"
        width={150}
        height={200}
      />
      <div className="h-full w-full rounded-b-md">
        <p className="text-white text-light text-lg p-3">
          {project.description}
        </p>
      </div>
    </div>
  );
}
