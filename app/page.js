import { getMetadataForPage } from "./lib/metadata";

export const metadata = getMetadataForPage({
  title: "Accueil | Care Concierge",
  description:
    "Des chalets de luxe en Haute-Savoie avec un service d’exception.",
  keywords: ["chalet", "conciergerie", "luxe", "haute savoie"],
});

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="relative z-10 mx-auto justify-center flex flex-col min-h-[640px] bg-white bg-[url(/images/header.webp)] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/70 z-1"></div>
          <ul className="uppercase font-bold max-w-[900px] p-4 z-20">
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

      <div className="max-w-5xl mx-auto mb-12 p-4">
        <div className="text-gray-800 max-w-7xl p-6 mx-auto">
          <ul>
            <li>
              <h5 className="text-5xl md:text-6xl uppercase font-thin">
                Cécile Durindel
              </h5>
            </li>
            <li>
              <h5 className="text-4xl md:text-6xl uppercase font-thin">
                réflexologie &
              </h5>
            </li>
            <li>
              <h6 className="text-4xl md:text-5xl uppercase font-thin">
                Shiatsu assis
              </h6>
            </li>
            <li>
              <h6 className="text-3xl md:text-4xl uppercase font-thin">
                au pays du Mont-Blanc
              </h6>
            </li>
          </ul>
          <div className="text-gray-800 max-w-6xl mx-auto flex flex-col items-center">
            <p className="text-center text-lg font-thin py-10 italic">
              La réflexologie est une technique ancestrale, douce et profonde de
              digito-pression qui part du principe que les pieds, les mains, la
              tête, divisés en points et en zones réflexes, sont la
              représentation miniature du corps humain.{" "}
            </p>

            <p className="text-center text-lg font-thin py-10 italic">
              Un toucher spécifique appliqué sur une zone réflexe donnée permet
              d’avoir un effet sur la partie du corps associée afin de soulager
              les tensions ou les déséquilibres qui s’y trouvent et ainsi de
              rétablir l’équilibre naturel du corps ou le maintien de celui-ci.{" "}
            </p>

            <p className="text-center text-lg font-thin py-10 italic">
              En d’autres mots, l’approche soutient l’organisme afin qu’il
              puisse fonctionner de manière optimale.
            </p>
            <p className="text-center text-lg font-thin py-10 italic">
              Rien de fou ni de magique, saviez-vous qu’il y a plus de 7 000
              terminaisons nerveuses dans chaque pied et plus de 3 000 dans
              chaque main ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
