"use client";

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Airplane and spinning circle */}
      <div className="relative w-24 h-24">
        {/* Spinning Circle */}
        <div className="absolute inset-0 animate-spin-slow border-t-4 border-blue-500 border-l-4 border-transparent rounded-full"></div>
        {/* Airplane */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-fly text-4xl">✈️</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
