import Bto from "./BtoRdv";

export default function HeroHeader() {
    return (
        <section className="relative">
        <div className="relative z-10 mx-auto justify-center flex flex-col min-h-[640px] bg-white bg-[url(/images/header.webp)] bg-cover bg-center p-6">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/70 z-10"></div>
          <ul className="uppercase font-bold max-w-[900px] z-20">
            <li className="text-5xl md:text-8xl text-white/70">Praticienne</li>
            <li className="text-5xl md:text-8xl text-white">
              réflexologie <span className="text-5xl md:text-8xl"></span>
            </li>
            <li className="text-5xl md:text-7xl text-white/70">
              & Shiatsu assis
            </li>
            <li className="text-5xl md:text-8xl text-white">au pays du</li>
            <li className="text-5xl md:text-6xl text-white">Mont-Blanc</li>
          </ul>
          <Bto />
        </div>
      </section>
    );
  }