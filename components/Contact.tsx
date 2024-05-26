import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="w-full h-full flex p-40 flex-col justify-center items-center gap-5">
      <h1 className="text-7xl font-extrabold text-white">
        Contact<span className="text-primary">.</span>
      </h1>
      <p className="text-xl w-[70%] text-center font-light text-white">
        If you have any questions or would like to discuss a potential project,
        please feel free to get in touch. I'm always open to new opportunities
        and collaborations. You can reach me through{" "}
        <a href="" className="text-primary hover:text-red-600">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
