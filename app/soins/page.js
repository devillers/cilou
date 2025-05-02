import Image from "next/image";
import Card from "../components/Reflexo_palmaire"; // Adjust the path as necessary

export default function Home() {
  return (
    <div className="  relative ">
            <section className="relative">
        <div className="relative z-10 mx-auto justify-center flex flex-col min-h-[640px] bg-white bg-[url(/images/header.webp)] bg-cover bg-center p-6">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/70 z-1"></div>
          <ul className="uppercase font-bold max-w-[900px] z-20">
            <li className="text-5xl md:text-8xl  text-white/70">
              Praticienne{" "}
            </li>
            <li className="text-5xl md:text-8xl  text-white">
              réflexologie <span className="text-5xl md:text-8xl"></span>
            </li>
            <li className="text-5xl md:text-7xl  text-white/70">
            & Shiatsu assis
            </li>
            <li className="text-5xl md:text-8xl  text-white">au pays du</li>
            <li className="text-5xl md:text-6xl  text-white">Mont-Blanc</li>
          </ul>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative z-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
