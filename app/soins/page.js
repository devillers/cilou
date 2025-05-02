
import Card from "../components/Reflexo_palmaire"; // Adjust the path as necessary
import HeroHeader from "../components/HeroHeader";

export default function Home() {
  return (
    <div className="  relative ">
       <HeroHeader />
       {/* <ul className="py-4">
              <li>
                <h3 className="text-center  text-5xl sm:text-3xl md:text-5xl uppercase font-thin">
                  découvrez nos soins
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
          */}

<section className="max-w-5xl mx-auto p-4 text-gray-800">
  <ul className="py-4">
    <li>
      <h3 className="text-center text-5xl sm:text-3xl md:text-5xl uppercase font-thin">
        présentation de nos soins
      </h3>
    </li>
    <li>
      <h2 className="text-center text-xl sm:text-3xl my-4  md:text-2xl uppercase font-thin text-[#006778]">
        réflexologie – shiatsu – massages
      </h2>
    </li>
    <li>
      <h4 className="text-center my-4 text-md sm:text-3xl md:text-3xl uppercase font-thin">
        une approche globale du bien-être
      </h4>
    </li>
  </ul>

  <div className="text-gray-800 max-w-3xl mx-auto flex flex-col mt-6">
    <p className="font-thin py-2 italic text-center text-md">
      Le thérapeute en bien-être corporel propose des soins personnalisés destinés à soulager les tensions physiques, apaiser le mental et favoriser l’équilibre intérieur.
    </p>

    <p className="font-thin py-2 italic text-center text-md">
      Les techniques pratiquées incluent le <span className="text-[#006778] font-medium">Shiatsu</span>, le <span className="text-[#006778] font-medium">Chi Nei Tsang</span>, le <span className="text-[#006778] font-medium">massage assis</span> et des <span className="text-[#006778] font-medium">massages sur mesure</span> adaptés aux besoins spécifiques de chacun, y compris le <span className="text-[#006778] font-medium">massage femme enceinte</span>.
    </p>

    <p className="font-thin py-2 italic text-center text-md">
      Un large éventail de <span className="text-[#006778] font-medium">réflexologies</span> est également proposé : plantaire, palmaire, faciale et pédiatrique, chacune visant à stimuler les zones réflexes et à rétablir les fonctions naturelles du corps.
    </p>

    <p className="font-thin py-2 italic text-center text-md mb-6">
      Cette approche holistique s’adresse à tous, du plus jeune au plus âgé, dans une démarche de détente, de prévention et de recentrage.
    </p>
  </div>

  <div className="py-6 ">
    <h5 className="text-center text-2xl md:text-3xl uppercase font-thin text-[#006778] mt-10 mb-4">
      découvrez l’ensemble des soins proposés
    </h5>
  </div>
</section>


      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  relative z-10 p-4">
  
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
