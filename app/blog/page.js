
import HeroHeader from "../components/HeroHeader"

export default function Home() {
  return (
    <div className="relative">
     <HeroHeader />

      <section className="max-w-5xl mx-auto mb-12   p-4   ">
      
        <ul className="py-4">
              <li>
                <h3 className="text-center  text-5xl sm:text-3xl md:text-5xl uppercase font-thin">
                  Nos articles de blog
                </h3>
              </li>
              <li>
                <h2 className="text-center text-2xl sm:text-3xl  mt-2 md:text-3xl uppercase font-thin">
                  nos conseils,   nos astuces ...
                </h2>
              </li>

              {/* <li>
                <h4 className="text-center  text-2xl sm:text-4xl  md:text-4xl uppercase font-thin">
              
                </h4>
              </li> */}
            </ul>
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
