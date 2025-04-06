import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FiPhone } from 'react-icons/fi'; // Feather phone icon

const handleIconClick = () => {
  window.open('https://www.facebook.com', '_blank', 'noopener,noreferrer');
};

const Footer = () => {
  return (
    <footer className=" py-8 mt-[20px] ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
     



      <div className="flex items-start gap-4">
  <img
    src="/pic.png"
    alt="Logo"
    className="h-30 w-auto ml-4"
  />
  <p className="text-[10px] text-gray-600 mt-2 text-justify leading-6">
    Découvrez la réflexologie : une méthode naturelle et apaisante pour soulager le stress et favoriser le bien-être en stimulant des points précis sur les pieds, les mains et les oreilles. Un pas vers une meilleure santé !
  </p>
</div>

  


        
        <div>
          <h3 className="font-bold text-[12px]">Plan du site</h3>
          <ul className="text-[10px] text-gray-600 space-y-2 mt-2">
          <li>Accueil</li>
          <li>Porfolio</li>
            <li>Blog</li>
            
            <li>Prendre RDV</li>
            <li>CGV</li>
            <li>Mentions légales</li>

          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[12px]">Me trouver </h3>
          <ul className="text-[10px] text-gray-600 space-y-2 mt-2">
            <li>Cecile Durindel </li>
            <li>EI siret 79333537300023</li>
            <li>Route de Saint Nicolas</li>
            <li>74170 Saint Gervais les Bains</li>
            <li className="flex items-center gap-2">
  <FiPhone className="text-[#009996]" />
  <a href="tel:0609077438" className="text-gray-600  hover:text-[#009996]">
    0609077438
  </a>
</li>
<div className="flex items-center gap-2">
    {/* Using the FaReact icon */}
    <CiFacebook className="mt-2 h-6 w-6 text-[#009996] cursor-pointer" onClick={handleIconClick} />
  </div>
            
          </ul>
        </div>
      </div>
      {/* <div className="text-center text-gray-500 text-[10px] mt-8">
        <p>Informations Légales</p>
        <button className="text-gray-600 hover:underline">Français</button>
      </div> */}
    </footer>
  );
};

export default Footer;
