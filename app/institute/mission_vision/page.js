import Monument from "@/app/components/Monument/Monument";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div>
      <div className="w-full h-80 bg-cover capitalize flex justify-center items-center"
        style={{ backgroundImage: `url('/about-banner.jpg')` }}>
          <h2 className="font-bold text-3xl w-4/5 uppercase text-center text-white">
         MISSION AND VISION - LNCPS INDORE | Central India&apos;s No. 1 Engineering Institute - Indore
        </h2>
          </div>
        <Monument />
      </div>
      
    </>
  );
}
