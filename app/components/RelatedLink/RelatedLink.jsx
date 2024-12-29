import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function RelatedLink() {
  const links = [
   {link:"/institute/certificationcourse",name:"Certification Course"},
   {link:"/institute/campus_facilities",name:"Campus and Facilities"},
   {link:"/academic/onlinefee",name:"Online Fee Payment"},
   {link:"/econtent",name:"E-content"},
   {link:"/students/rules_regulations",name:"Pahal Edition"},
   {link:"/institute/contact",name:"Contact Us"},

];
  return (
    <>
      <div className="border-2 w-[370px]  text-black rounded-lg p-3  ">
        <div className="  px-4 p-2 text-xl  font-semibold "> Related-Link</div>

        {links.map((link) => (
          <Link href={link.link} key={link} className="text-gray-600 cursor-pointer border-b-2  mx-auto  hover:text-orange-800 px-4 py-3 w-11/12 flex justify-between items-center ">
            <h2 className="text-lg ">{link.name}</h2>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </Link>
        ))}

        <h1></h1>
      </div>
    </>
  );
}
