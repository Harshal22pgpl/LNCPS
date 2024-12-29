"use client"
import CampusMap from "@/app/components/CampusMap/CampusMap";
import Gallary from "@/app/components/Gallary/Gallary";
import { ParallaxScroll } from "@/app/components/ParallaxScroll/ParallaxScroll";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function OverView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1300); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  const imagess = [
    "/gallery1.jpeg",
    "/gallery2.JPG",
    "/gallery3.jpeg",
    "/gallery4.jpg",
    "/gallery5.JPG",
    "/feildvisit6.jpg",
    "/gallery6.jpg",
    "/feildvisit7.jpeg",
    "/gallery7.jpg",
    '/Graduationceremony.jpeg',
    "/gallery8.jpeg",
    "/gallery9.jpg",
    "/feildvisit11.jpg",
    "/feildvisit10.jpg",
    "/feildvisit3.jpeg",
    "/healthCamp.jpg",
    "/feildvisit4.jpg",
    "/feildvisit2.jpg",
    "/feildvisit1.jpeg",
    "/feildvisit5.jpeg",
    "/elibrary.jpg",
    "/gallery12.jpg",
    "/gallery11.jpg",
    "/gallery10.jpg",
  ];
  return (
    <>
    
      <div className="w-full flex h-[650px]  ">
        <div className="w-[850px] h-full flex flex-col justify-center items-center p-4 pt-24">
          <Image src="/LNCPS-IND.png" width={150}
          height={150} />
          <h1 className="text-4xl font-semibold flex items-center text-blue-600 ">
           Overview of Lakshmi Narain College Of Professional Studies
          </h1>
          <p className="text-black text-justify bg-blue-200 p-10 pt-2">
            {" "}
            The Academic Overview of Lakshmi Narain College of Professional Studies (LNCP) reflects a commitment to excellence in education, fostering a learning environment that equips students with the skills, knowledge, and values needed to excel in their chosen professions. 
            LNCP offers a diverse range of undergraduate and postgraduate programs across fields such as business administration, computer applications, commerce, and more, each tailored to align with current industry standards and trends.
            The curriculum emphasizes a balance of theoretical understanding and practical application, integrating classroom learning with hands-on experiences through projects, internships, and industry interactions.
            Supported by a dedicated faculty of experienced professionals and academics.Regular seminars, workshops, and guest lectures from industry leaders enhance the academic experience.
          </p>
        </div>
        <div className="w-full   overflow-hidden ">
          {" "}
          <div className="md:w-full lg:w-full sm:w-full w-full flex justify-center items-center ">
       
        <Image
          className="duration-500 w-[950px] mt-2 h-[740px]"
          src='/lncpsbuild2.jpg'
          alt={"images"}
          width={700}
          height={650}
          
        />
      </div>
        </div>
      </div>
     
      <div className=" w-11/12 mx-auto mt-10 mb-6">
        <ParallaxScroll images={imagess} />
      </div>
    </>
  );
}
