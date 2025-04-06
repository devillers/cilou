"use client";

import React, { useState } from "react";

const RoundProductCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-80 h-80 bg-white rounded-full shadow-xl flex flex-col items-center justify-center p-6 relative hover:shadow-2xl transition-shadow duration-300">
      {/* Heart icon */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 left-3 bg-white p-2 rounded-full shadow hover:shadow-md transition"
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
      <div className="w-[160px] h-[200px] rounded-full overflow-hidden mb-4 shadow-md">
        <img
          src="/fond.jpg"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-center text-lg uppercase font-semibold text-gray-800">
        réflexologie
      </h3>
      <p className="text-sm text-gray-500 text-center mt-1 mb-3">
        Séance de réflexologie plantaire
      </p>

      <span className="text-[#006878] font-bold text-lg mb-2">60€</span>

      {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition">
        Add to Cart
      </button> */}
    </div>
  );
};

export default RoundProductCard;
