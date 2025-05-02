"use client";

import React, { useState } from "react";

export default function ReflexoPalmaireCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow w-full max-w-[240px] aspect-[4/4] mx-auto flex flex-col items-center justify-start text-center pt-6 relative">
      {/* Heart icon */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-2 left-2 bg-white p-2 rounded-full shadow hover:shadow-md transition"
        aria-label="Ajouter aux favoris"
      >
        <svg
          className={`w-5 h-5 ${
            liked ? "text-red-500" : "text-gray-400"
          } transition-colors duration-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>

      {/* Image */}
      <img
        src="/hand.png"
        alt="Réflexologie palmaire"
        className="w-30 h-30 object-cover rounded-full mb-3 border-4 border-white shadow-sm"
      />

      {/* Title */}
      <h3 className="text-md font-semibold leading-tight mb-1 uppercase text-gray-800">
        Réflexologie <span className="text-[12px] text-[#006878]">40 mn</span>
      </h3>

      {/* Description */}
      <p className="text-sm font-light text-gray-500 px-4 mb-2">
        Séance de <span className="text-pink-500 font-semibold uppercase text-[12px]">palmaire</span>
      </p>

      {/* Price */}
      <span className="text-[#006878] font-bold text-lg mb-4">40€</span>
    </div>
  );
}
