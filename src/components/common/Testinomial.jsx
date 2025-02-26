import React from "react";
import Matthew2 from "../asset/Mathew.png";
import Jack from "../asset/JackD.png";
import Susan from "../asset/MathewBlacky.png";


export function Testinomial() {
  return (
    <div className="bg-white relative py-10 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-[#15549A] font-inter font-bold">
          What Our Customers Say?
        </h2>
      </div>

      {/* Background Section (Behind Cards) */}
      <div className="absolute top-[100px] w-full bg-[#15549A] h-[200px] z-0"></div>
      <div className="absolute top-[125px] w-[1100px] bg-white shadow-xl h-[250px] rounded-md z-5"></div>

      {/* Testimonial Cards Container */}
      <div className="relative flex justify-center top-[50px] items-center w-full max-w-4xl h-[400px]">
        {/* Left Card */}
        <div className="absolute  w-[330px] h-[330px]   z-10 left-[10px] top-[25px] flex flex-col items-center p-4">
          {/* Image Section */}
          <img
            src={Matthew2}
            alt="Customer 1"
            className="w-full h-full rounded object-cover "
          />
        </div>

        {/* Center Card (Slightly Bigger) */}
        <div className="absolute w-[360px] h-[360px]    z-20 flex top-3 flex-col items-center p-4">
          {/* Image Section */}
          <img
            src={Jack}
            alt="Customer 2"
            className="w-full h-full rounded object-cover mb-2"
          />
          
          
        </div>

        {/* Right Card */}
        <div className="absolute w-[330px] h-[330px]    z-10 right-[10px] top-[25px] flex flex-col items-center p-4">
          {/* Image Section */}
          <img
            src={Susan}
            alt="Customer 3"
            className="w-full h-full rounded object-cover mb-2"
          />
        
          
        </div>
      </div>
    </div>
  );
}