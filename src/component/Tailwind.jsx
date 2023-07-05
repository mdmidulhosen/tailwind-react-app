import React from "react";
import image from "../assets/images/image.png";

function Tailwind() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-10 bg-white rounded shadow-md mx-auto text-center">
        <div className="flex justify-center items-center">
          <img
            src={image}
            className="h-28 rounded-full bg-black ring-4 ring-pink-700"
          />
        </div>
        <div className="space-y-2 mt-2">
          <p className="text-lg font-bold">Mridul Hosen Kibria</p>
          <p>Web Developer</p>
          <button
            type="submit"
            className="rounded-full text-sky-500 border-gray-100 border- shadow-md px-4 py-1 font-bold"
          >
            Click now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tailwind;
