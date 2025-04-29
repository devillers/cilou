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

      <section className="max-w-5xl mx-auto p-4      ">
        <div className="text-gray-800 max-w-7xl       mx-auto">
          <ul>
            <li>
              <h3 className="text-5xl sm:text-5xl md:text-6xl uppercase font-thin">
                Cécile Durindel
              </h3>
            </li>
            <li>
              <h2 className="text-4xl sm:text-5xl  md:text-6xl uppercase font-thin">
                réflexologie &
              </h2>
            </li>
            <li>
              <h1 className="text-4xl sm:text-5xl  md:text-6xl uppercase font-thin">
                Shiatsu assis
              </h1>
            </li>
            <li>
              <h4 className="text-3xl sm:text-4xl  md:text-6xl uppercase font-thin">
                au pays du Mont-Blanc
              </h4>
            </li>
          </ul>
          <div className="text-gray-800 max-w-6xl mx-auto flex flex-col mt-10">
            <p className="    font-thin py-2 italic">
              La réflexologie est une technique ancestrale, douce et profonde de
              digito-pression qui part du principe que les pieds, les mains, la
              tête, divisés en points et en zones réflexes, sont la
              représentation miniature du corps humain.{" "}
            </p>

            <p className="font-thin py-2 italic">
              Un toucher spécifique appliqué sur une zone réflexe donnée permet
              d’avoir un effet sur la partie du corps associée afin de soulager
              les tensions ou les déséquilibres qui s’y trouvent et ainsi de
              rétablir l’équilibre naturel du corps ou le maintien de celui-ci.{" "}
            </p>

            <p className=" font-thin py-2 italic">
              En d’autres mots, l’approche soutient l’organisme afin qu’il
              puisse fonctionner de manière optimale.
            </p>
            <p className="font-thin py-2 italic">
              Rien de fou ni de magique, saviez-vous qu’il y a plus de 7 000
              terminaisons nerveuses dans chaque pied et plus de 3 000 dans
              chaque main ?
            </p>
          </div>

          <div className="text-gray-800 max-w-6xl mx-auto flex flex-col mt-10">
            <h5 className="text-xl md:text-2xl    uppercase font-semibold text-[#006878] mb-4 mt-10v">
              Ainsi la réflexologie a de nombreux bienfaits
            </h5>
            <ul className="font-thin py-2 ">
              <li>Relaxation et mieux-être</li>
              <li>Dissipe le stress et l’anxiété</li>
              <li>Amélioration de la qualité du sommeil</li>
              <li>Diminution de la douleur</li>
              <li>Stimulation des organes internes</li>
              <li>Amélioration de la circulation sanguine et lymphatique</li>
              <li>Favorise la récupération</li>
            </ul>
            <p className="font-semi-bold text-center py-2  text-[#006878]">
              Une séance de réflexologie classique dure habituellement de 30 à
              60 minutes mais peut-être adaptée en fonction de chacun.
            </p>
          </div>

          <h5 className="text-xl md:text-2xl uppercase font-semibold text-[#006878] mb-4 mt-10">
            La réflexologie convient à tous, du plus jeune au plus âgé à
            l’exception
          </h5>
          <div className="text-gray-800 max-w-6xl mx-auto flex flex-col  ">
            <ul className="      font-thin py-2 italic text-sm leading-6 text-center">
              <li>Des femmes enceintes de moins de 3 mois</li>
              <li>Des personnes avec phlébite en court</li>
              <li>Des personnes ayant fait un avc dans les 6 derniers mois</li>
              <li>
                Des personnes ayant un cancer du sang ou touchant le système
                lymphatique.
              </li>
            </ul>
          </div>
        </div>
      </section>
   
    
    </div>
  );
}
