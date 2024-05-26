import Link from "next/link";

export default function MainDesc() {
  return (
    <div className="w-full h-full flex p-40 flex-row gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl text-white font-extrabold">
          Hi, I<span className="text-primary">'</span>m Rishi
          <span className="text-primary">.</span>
        </h1>
        <h2 className="text-3xl text-white font-light">
          I'm a{" "}
          <span className="font-extrabold text-primary">Web Developer</span> and{" "}
          <span className="font-extrabold text-primary">AI enthusiast</span>.
        </h2>
        <p className="text-xl font-light text-white w-2/3 text-start">
          I'm an undergraduate student pursuing my B.Tech in Computer Science
          and Engineering. I have a passion for building web applications and
          exploring the field of AI.
        </p>
        <Link href="/#contact">
          <button className="bg-primary hover:bg-red-700 duration-150 ease-in-out px-6 py-3 rounded-md text-white w-fit">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
