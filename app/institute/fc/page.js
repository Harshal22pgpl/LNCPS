import GovernorCard from "@/app/components/GovernorCard/GovernorCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/ar-3.jpg",];
  return (
    <div>
      <SliderMain images={images} heading="Anti-Ragging" />
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        
        <div className="w-2/3 px-20 ">
          <h1 className="my-1 p-2">Anti-Ragging Commitee (Members)</h1>
          <GovernorCard />
          <GovernorCard />
          <GovernorCard />

          <GovernorCard />
          <h1 className="my-1 p-2">Anti-Ragging (Secretary)</h1>
          <GovernorCard />
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
