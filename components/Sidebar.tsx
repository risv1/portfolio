import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const links = [
    { id: 1, name: "About", path: "/#about" },
    { id: 2, name: "Projects", path: "/#projects" },
    { id: 3, name: "Contact", path: "/#contact" },
  ];

  return (
    <div className="xl:w-[5vw] lg:w-[5vw] md:w-[5vw] sm:w-[5vw] xs:w-[10vw] w-[15vw] h-full flex flex-col gap-3 items-center bg-black">
      <Link href={"/"} className="mb-auto">
        <Image
          className="mt-2 hover:cursor-pointer"
          src="/rLogo.png"
          alt="R"
          width={50}
          height={50}
        />
      </Link>
      <div className="w-full mb-auto h-4/5 flex flex-col items-center justify-center gap-20">
        {links.map((link) => (
          <Link
            className="xl:h-[5vw] lg:h-[5vw] md:h-[5vw] h-[10vw] xl:pt-4 lg:pt-4 md:pt-3 sm:pt-3 xs:pt-3 pt-1 xl:w-[10vw] lg:w-[10vw] w-full text-lg rotate-90 border-t-2 border-black duration-150 ease-in-out hover:border-primary text-white text-center"
            key={link.id}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
