"use client";

import React, { useState } from "react";

const RoundProductCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-70 h-70 bg-white rounded-full shadow-xl flex flex-col items-center justify-center p-6 relative hover:shadow-2xl transition-shadow duration-300">
      {/* Heart icon */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-0 left-0 bg-white p-2 rounded-full shadow hover:shadow-md transition"
        aria-label="Add to favorites"
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

      {/* Product image */}
      <div className="w-[120px] h-full rounded-full overflow-hidden mb-4 shadow-md transition-transform duration-300 transform hover:scale-105">
        <img
          src="/fond.jpg"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-center text-lg uppercase font-semibold text-gray-800">
        réflexologie<span className="text-[12px] text-[#006878]"> 60 mn</span>
      </h3>
      <p className="text-sm text-gray-500 font-light text-center mt-1 mb-3">
        Séance de réflexologie <span className="text-[12px] text-pink-500 font-semibold uppercase"> plantaire</span>
      </p>

      <span className="text-[#006878] font-bold text-lg mb-2">60€</span>

      {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition">
        Add to Cart
      </button> */}
    </div>
  );
};

export default RoundProductCard;
