import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#009992] text-white">
      {/* Background image (optional) */}
      <img
        src="/fond.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Content wrapper */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative z-10">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="gap-2">
            {/* Optional heading or logo */}
            {/* <div className="text-xl uppercase">Pause  <span className='text-[#bd9254]'>Reflexo</span></div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
