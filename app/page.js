import { getMetadataForPage } from "./lib/metadata";
import ContactForm from "./components/ContactForm";
import HeroHeader from "./components/HeroHeader";

export const metadata = getMetadataForPage({
  title: "Accueil | Pause Réflexologie",
  description: "Réflexologie & Shiatsu assis.",
  keywords: [
    "Shiatsu",
    "Réflexologie",
    "saint gervais les bains",
    "chamonix",
    "megeve",
    "saint nicolas de veroce",
    "val montjoie",
    "val d'arley",
    "pays du mont blanc",
    "vallee de l'arve",
    "bien etre",
    "relaxation",
    "stress",
    "tension",
    "fatigue",
    "soulager",
    "detente",
    "haute-savoie",
  ],
  openGraph: {
    title: "Accueil | Pause Réflexologie",
    description: "Réflexologie & Shiatsu assis.",
    url: "https://www.pausereflexo.fr",
    siteName: "Pause Réflexo",
    images: [
      {
        url: "https://www.pausereflexo.fr/images/fond.webp",
        width: 1200,
        height: 630,
        alt: "Réflexologie & Shiatsu assis.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accueil | Pause Réflexologie",
    description: "Réflexologie & Shiatsu assis.",
    image: "https://www.pausereflexo.fr/images/fond.webp",
  },
});

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroHeader />

        <section className="max-w-5xl mx-auto p-4 ">
          <div className="flex flex-col text-gray-800 max-w-7xl mx-auto">
            <ul className="py-4">
              <li>
                <h3 className="text-center  text-5xl sm:text-3xl md:text-5xl uppercase font-thin">
                  Cécile Durindel
                </h3>
              </li>
              <li>
                <h2 className="text-center text-2xl sm:text-5xl  mt-2 md:text-4xl uppercase font-thin">
                  réflexologie & Shiatsu assis
                </h2>
              </li>

              <li>
                <h4 className="text-center  text-2xl sm:text-4xl  md:text-4xl uppercase font-thin">
                  au pays du Mont-Blanc
                </h4>
              </li>
            </ul>
            <div className="text-gray-800 max-w-3xl mx-auto flex flex-col my-4">
              <p className=" font-thin py-2 italic text-center text-md">
                La réflexologie est une technique ancestrale, douce et profonde
                de digito-pression qui part du principe que les pieds, les
                mains, la tête, divisés en points et en zones réflexes, sont la
                représentation miniature du corps humain.{" "}
              </p>

              <p className="font-thin py-2 italic text-center">
                Un toucher spécifique appliqué sur une zone réflexe donnée
                permet d’avoir un effet sur la partie du corps associée afin de
                soulager les tensions ou les déséquilibres qui s’y trouvent et
                ainsi de rétablir l’équilibre naturel du corps ou le maintien de
                celui-ci.{" "}
              </p>

              <p className=" font-thin py-2 italic text-center">
                En d’autres mots, l’approche soutient l’organisme afin qu’il
                puisse fonctionner de manière optimale.
              </p>
              <p className="font-thin py-2 italic text-center">
                Rien de fou ni de magique, saviez-vous qu’il y a plus de 7 000
                terminaisons nerveuses dans chaque pied et plus de 3 000 dans
                chaque main ?
              </p>
            </div>

            <div className="text-gray-800 max-w-5xl mx-auto flex flex-col my-4">
              <h5 className="text-md md:text-2xl uppercase font-thin text-center text-[#009992] mb-4 ">
                Ainsi la réflexologie a de nombreux bienfaits
              </h5>
              <ul className="font-thin py-2 text-center ">
                <li>Relaxation et mieux-être</li>
                <li>Dissipe le stress et l’anxiété</li>
                <li>Amélioration de la qualité du sommeil</li>
                <li>Diminution de la douleur</li>
                <li>Stimulation des organes internes</li>
                <li>Amélioration de la circulation sanguine et lymphatique</li>
                <li>Favorise la récupération</li>
              </ul>
              <p className="font-light py-4 text-center text-[#009992]">
                Une séance de réflexologie classique dure habituellement de 30 à
                60 minutes mais peut-être adaptée en fonction de chacun.
              </p>
            </div>

            <h5 className="text-md md:text-2xl uppercase font-thin text-center text-[#009992] my-4">
              La réflexologie convient à tous, du plus jeune au plus âgé à
              l’exception
            </h5>
            <div className="text-gray-800 max-w-6xl mx-auto flex flex-col  ">
              <ul className=" font-thin py-2 italic text-md leading-6 text-center">
                <li>Des femmes enceintes de moins de 3 mois</li>
                <li>Des personnes avec phlébite en court</li>
                <li>
                  Des personnes ayant fait un avc dans les 6 derniers mois
                </li>
                <li>
                  Des personnes ayant un cancer du sang ou touchant le système
                  lymphatique.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="apropros"
          className="w-full mx-auto bg-[#F7F3EC]  my-4 p-4   "
        >
          <div className="text-gray-800 max-w-5xl mx-auto">
            <h5 className="uppercase text-2xl font-thin  text-[#009992] mb-4">
              à propos
            </h5>
            <p className="font-thin py-2 text-sm leading-6 text-justify">
              Bonjour et bienvenue, Je m’appelle Cécile, amoureuse de ma région
              et installée à Saint-Nicolas-de-Véroce, au cœur des montagnes qui
              inspirent mes pratiques.
            </p>
            <p className="font-thin py-2 text-sm leading-6 text-justify ">
              Guidée par une profonde curiosité et riche de plusieurs
              expériences professionnelles, j’ai trouvé ma vocation :
              accompagner chacun vers plus de bien-être et de sérénité.
            </p>
            <p className="font-thin py-2 text-sm leading-6 text-justify ">
              Certifiée en réflexologie plantaire, palmaire, ventrale et
              crânienne, ainsi qu’en shiatsu assis, je vous propose des séances
              personnalisées pour soulager le stress, les tensions et la
              fatigue. À l’image du colibri, je crois que chaque geste compte
              pour ramener plus d'équilibre dans votre quotidien.
            </p>
            <p className="font-thin py-2 text-sm leading-6 text-justify">
              {" "}
              Formée au Centre Réflexo Naturel de La Roche-sur-Foron et forte de
              cinq années d’expérience comme assistante de vie, je suis
              particulièrement attentive aux besoins des personnes âgées et de
              leurs proches.
            </p>
            <p className="font-thin py-2 text-sm leading-6 text-justify ">
              {" "}
              J'interviens à domicile, en entreprise dans le cadre du bien-être
              au travail, en EHPAD et en résidences seniors, auprès des
              résidents comme du personnel.
            </p>
            <p className="font-thin py-2 text-sm leading-6 text-justify">
              {" "}
              À partir de septembre 2025, je vous accueillerai également en
              cabinet. Je me déplace dans tout le Val Montjoie, le Val d’Arly,
              le Pays du Mont-Blanc et la Vallée de l’Arve.
            </p>
            <p className="font-thin py-2 text-sm leading-6 text-justify ">
              Offrez-vous un moment de détente… ou faites-en cadeau à ceux que
              vous aimez ! Contactez-moi pour réserver votre séance.
            </p>
          </div>
        </section>

        <section id="rdv" className="w-full mx-auto my-4 p-4   ">
          <div className="text-gray-800 max-w-5xl mx-auto">
            <h5 className="uppercase text-2xl  font-thin mb-4 text-[#009992] ">
              Prendre RDV
            </h5>
            <p className="font-thin py-2 text-sm leading-6">
              Bonjour et bienvenue, Je m’appelle Cécile, amoureuse de ma région
              et installée à Saint-Nicolas-de-Véroce, au cœur des montagnes qui
              inspirent mes pratiques.
            </p>
          </div>
        </section>

        <section id="contact" className="w-full mx-auto my-4 p-4">
          <ContactForm />
        </section>
      </div>
    </>
  );
}
