// app/page.js
import CardPalmaire from "./components/Reflexo_palmaire"; // Adjust the path as necessary
import CardPlantaire from "./components/Reflexo_plantaire"; // Adjust the path as necessary

export default function Home() {
  return (
    <div className=" max-w-[1200px] mx-auto relative  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6 z-10 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative z-10">
        <CardPlantaire />
        <CardPlantaire />
        <CardPalmaire />
        <CardPalmaire />
      </div>
    </div>
  );
}
