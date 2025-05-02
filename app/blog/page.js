import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
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

      <section className="max-w-5xl mx-auto mb-12   p-4   ">
        <h1
          className="text-2xl font-bold mb-4 text-[#009996]"
          style={{ fontFamily: "Capriola, sans-serif" }}
        >
          Blog
        </h1>
      </section>
    </div>
  );
}
