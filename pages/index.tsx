import About from "@/components/About";
import Contact from "@/components/Contact";
import MainDesc from "@/components/MainDesc";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishi V</title>
      </Head>
      <div className="w-screen h-screen bg-background flex flex-row">
        <Sidebar />
        <div className="overflow-y-scroll xl:w-[95vw] lg:w-[95vw] md:w-[95vw] sm:w-[95vw] xs:w-[90vw] w-[85vw] h-full">
          <div className="w-full flex justify-center items-center">
            <MainDesc />
          </div>
          <div className="w-full flex justify-center items-center">
            <About />
          </div>
          <div className="w-full flex justify-center items-center">
            <Projects />
          </div>
          <div className="w-full flex justify-center items-center">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
