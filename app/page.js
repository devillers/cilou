import Image from "next/image";
import Card from "../components/Card"; // Adjust the path as necessary


export default function Home() {
  return (
    <div className=" max-w-[1200px] mx-auto relative  text-white">
      {/* Background image (optional) */}
      {/* <img
        src="/fond.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      /> */}

      {/* Content wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative z-10">
      
        
         
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
      
      </div>

  );
}
