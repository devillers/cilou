
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
            <li className="text-4xl md:text-8xl  text-white">
              réflexologie <span className="text-5xl md:text-8xl">&</span>
            </li>
            <li className="text-5xl md:text-7xl  text-white/70">
              Shiatsu assis
            </li>
            <li className="text-5xl md:text-8xl  text-white">au pays du</li>
            <li className="text-5xl md:text-6xl  text-white">Mont-Blanc</li>
          </ul>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mb-12   p-4   ">
        <div className="text-gray-800 max-w-7xl       mx-auto">
          <h5 className="text-xl md:text-2xl  uppercase font-semibold text-[#006878] mb-4 mt-10">
            à propos
          </h5>
          <p className="font-thin py-2 text-sm leading-6">
            Bonjour et bienvenue, Je m’appelle Cécile, amoureuse de ma région et
            installée à Saint-Nicolas-de-Véroce, au cœur des montagnes qui
            inspirent mes pratiques.</p>
            <p className="font-thin py-2 text-sm leading-6 ">
              Guidée par une profonde curiosité et riche de plusieurs
              expériences professionnelles, j’ai trouvé ma vocation :
              accompagner chacun vers plus de bien-être et de sérénité.
            </p>
            <p className="font-thin py-2 text-sm leading-6 ">
              Certifiée en réflexologie plantaire, palmaire, ventrale et
              crânienne, ainsi qu’en shiatsu assis, je vous propose des séances
              personnalisées pour soulager le stress, les tensions et la
              fatigue. À l’image du colibri, je crois que chaque geste compte
              pour ramener plus d'équilibre dans votre quotidien.
            </p>
            <p  className="font-thin py-2 text-sm leading-6 ">
              {" "}
              Formée au Centre Réflexo Naturel de La Roche-sur-Foron et forte de
              cinq années d’expérience comme assistante de vie, je suis
              particulièrement attentive aux besoins des personnes âgées et de
              leurs proches.
            </p>
            <p className="font-thin py-2 text-sm leading-6 ">
              {" "}
              J'interviens à domicile, en entreprise dans le cadre du bien-être
              au travail, en EHPAD et en résidences seniors, auprès des
              résidents comme du personnel.
            </p>
            <p className="font-thin py-2 text-sm leading-6 ">
              {" "}
              À partir de septembre 2025, je vous accueillerai également en
              cabinet. Je me déplace dans tout le Val Montjoie, le Val d’Arly,
              le Pays du Mont-Blanc et la Vallée de l’Arve.
            </p>
            <p className="font-thin py-2 text-sm leading-6 ">
              Offrez-vous un moment de détente… ou faites-en cadeau à ceux que
              vous aimez ! Contactez-moi pour réserver votre séance.
            </p>
          </div>
        </section>
      
    </div>
  );
}
