import Image from "next/image";
import React from "react";
export default function AbouttheInstitute() {
  return (
    <>
      <div className="  w-11/12 mx-auto mt-10 justify-around bg-gradient-to-r from-blue-400 to-blue-700">
        <div className="   ">
          <h1 className="text-4xl lg:pt-10 lg:pb-5 lg:px-10 p-4 ">
            About the Institute
          </h1>
          <p className="  lg:px-10 lg:pb-4 p-3">
            
Lakshmi Narain College of Professional Studies (LNCP) is a premier institution dedicated to providing high-quality education and skill development to students across various professional disciplines. Located in the vibrant educational landscape of India, LNCP is committed to nurturing future leaders and innovators with a strong emphasis on practical knowledge, ethical values, and global perspectives. The institute offers a wide range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills needed to excel in today’s dynamic professional world
          </p>
          <p className="  lg:px-10 lg:pb-5 border-b p-3 ">
          The institute also emphasizes research, innovation, and skill developments, supported by state-of-the-art infrastructure and modern facilities. LNCP is dynamic campus life, with various clubs, cultural activities, and technical events, enriches the student experience and prepares graduates to excel as professionals and leaders in their chosen fields.
          </p>
          <div className="flex lg:flex-row flex-col mt-3 lg:mt-0 ">
            <div className=" lg:p-10 p-3  flex items-start">
              <div>
                <h1 className="text-2xl font-semibold text-center mb-2 ">
                  MISSION
                </h1>
                <p className=" p-2 ">
                  To become an internationally acclaimed institution of higher
                  learning that will serve as a source of knowledge and
                  expertise for the society and be a preferred destination for
                  undergraduate and graduate studies.
                </p>
              </div>
            </div>
            <div className=" lg:p-10 p-3 flex items-start">
              <div>
                <h1 className="text-2xl  font-semibold text-center mb-2">
                  VISION
                </h1>
                <p className=" p-2   mb-4">
                  To become an internationally acclaimed institution of higher
                  learning that will serve as a source of knowledge and
                  expertise for the society and be a preferred destination for
                  undergraduate and graduate studies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl  border-t p-4 lg:px-10  ">
          Message from Director
        </h1>
        <div className=" flex  justify-between items-center w-full">
          <div className=" flex lg:flex-row flex-col justify-between pt-1 lg:px-10">
            <div className="w-full">
              <p className=" p-2     ">
                To become an internationally acclaimed institution of higher
                learning that will serve as a source of knowledge and expertise
                for the society and be a preferred destination for undergraduate
                and graduate studiesTo become an internationally acclaimed
                institution of higher learning that will serve as a source of
                knowledge and expertise for the society and be . and graduate
                studiesTo become an internationally acclaimed institution of
                higher learning that will serve as a source of knowledge and
                expertise for the society and be . and graduate studiesTo become
                an internationally acclaimed institution of higher learning that
                will serve as a source of knowledge and expertise for the
                society and be . and graduate studiesTo become an
                internationally acclaimed institution of higher learning that
                will serve as a source of knowledge and expertise for the
                society and be .
              </p>
            </div>
            <div className="w-full  flex justify-around items-end ">
              <img src="/founderr.png" alt="" className=" h-[300px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
