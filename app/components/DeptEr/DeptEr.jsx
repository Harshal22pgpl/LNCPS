"use client";
import React,{useState} from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import DeptCounter from "../DeptCounter/DeptCounter";
import ProgramCard from "../ProgramCard/ProgramCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "../Slider/Slider";
import { head } from "lodash";
import FacultyCard from "../FacultyCard/FacultyCard";
import Curriculumn from "../Curriculumn/Curriculumn";
// import { useState } from "react/cjs/react.development";

export default function DeptEr({ dept }) {
  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-blue-800",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-blue-800",
      color: "bg-[#FF3344]",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-blue-800",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-blue-800",
      color: "bg-[#FF3344]",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-blue-800",
      color: "bg-teal-500",
      speed: "30",
    },
  ];

  let headD;
  let headImg;
  let phoneHead;
  let emailHead;
  let faculties;
  let aboutDept;
  let deptImg;
  let slogan;
  let author;
  switch (dept) {
    case "me":
      slogan =
        "Engineering Tomorrow, Innovating Today ,Unleash Your Potential with Us!";
      author = "Dr.Mumuksha Jain ";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Commerce Department at Lakshmi Narain College of Professional Studies is dedicated to nurturing future business leaders by providing students with a comprehensive education in the principles of trade, finance, and economics. It offers a diverse curriculum that includes subjects like accounting, business management, marketing, and economics, designed to equip students with the practical skills and theoretical knowledge needed to excel in the business world. Through a blend of classroom learning and real-world application, the Commerce Department prepares students for a wide range of careers in areas such as banking, entrepreneurship, corporate management, and financial services. With a strong focus on critical thinking, problem-solving, and ethical business practices, the department fosters a deep understanding of the economic forces that shape our global marketplace";
      dept = "Commerce";
      headD = "Dr.Mumuksha Jain ";

      headImg = "/mumuksha.jpg";
      phoneHead = "8368766792";
      emailHead = "mumukshaj@gmail.com";
      faculties = [
        {
          image: "/muskanjain.jpg",
          name: "Prof. Muskan Jain",
          position: "Assistant Professor",
          degree: "Pursuing  Ph.D from DAVV,M.Com, B.Com",
          experience: "3 years",
        },
        {
          image: "/chirag.png",
          name: "Prof.Chirag Sharma",
          position: "Assistant Professor",
          degree: "Pursuing Ph.D from DAVV, M.Com, B.com ",
          experience: "3 years",
        },

        // Add more faculty members as needed
      ];

      break;
    case "cse":
      slogan =
        "Empowering Innovation, Shaping the Future: Where Technology Meets Excellence";
      author = "Prof. Swati Patil";
      deptImg = "/dept-m-v.jpg";
      aboutDept =
        "The Computer Science Department at LNCPS is at the forefront of technological education, committed to producing skilled and innovative professionals ready to lead in the digital age. This department offers a robust curriculum that covers core areas such as software development, algorithms, data structures, artificial intelligence, cybersecurity, and machine learning. With a focus on both theoretical foundations and practical application, the department equips students with the ability to solve complex problems, develop cutting-edge software, and design intelligent systems. State-of-the-art laboratories and collaboration with industry partners provide hands-on experience, ensuring that students are well-prepared to meet the demands of the rapidly evolving tech industry. The Computer Science Department not only fosters technical expertise but also encourages creativity, critical thinking, and ethical responsibility, preparing students to excel in diverse career paths such as software engineering, data science, cybersecurity, and IT consultancy.";
      dept = "Computer Science";
      headD = "Prof. Swati Patil";
      headImg = "/faculty/sci_HOD.jpg";
      phoneHead = "9425435798";
      emailHead = "swati.bpl2009@gmail.com ";
      faculties = [
        {
          image: "/sarveshmishra.jpg",
          name: "Prof. SARVESH MISHRA",
          position: "Assistant Professor",
          degree: " M.Sc. GATE-2007, M.Tech.(L.S.A.) C.G. SET-2017 , Ph.D. Pursuing ",
          experience: "12 years",
        },
        {
          image: "",
          name: "Prof.kiti Bamaniya",
          position: "Assistant Professor",
          degree: "M.Sc(Applied Chemistry),B.Sc",
          experience: "1 years",
        },
        {
          image: "/nikitayadav.jpg",
          name: "Prof Nikita yadav",
          position: "Assistant Professor",
          degree: "Ph.D Pursuing, M.Sc(BioChemistry),B.Sc",
          experience: "1 years",
        },
        // Add more faculty members as needed
      ];

      break;
    case "ece":
      slogan =
        "Connecting Ideas, Creating Futures: Innovate with Electronics and Communication!";
      author = "Manisha Singh";
      deptImg = "/dept-m-v.jpg";
      aboutDept =
        "The Science Department at LNCPS is dedicated to fostering a deep understanding of the natural and physical sciences through rigorous academic programs and hands-on research. It offers a broad curriculum encompassing subjects like physics, chemistry, biology, mathematics, and environmental science, providing students with a strong foundation in scientific principles and methodologies. The department emphasizes critical thinking, experimental skills, and analytical reasoning, preparing students to tackle complex challenges in both academic and professional settings. With access to advanced laboratories, research facilities, and opportunities for interdisciplinary collaboration, students are encouraged to engage in innovative research and real-world problem-solving. The Science Department not only nurtures scientific curiosity and discovery but also equips students with the practical skills needed for careers in research, healthcare, engineering, environmental science, and beyond.";
      dept = "Science";
      headD = "Prof.Manisha Singh";
      headImg = "/manishasingh.jpg";
      phoneHead = "9977791266";
      emailHead = "Email.gautammanisha305@gmail.com";
      faculties = [
        {
          image: "",
          name: "Prof. Hemant Vijay Bharat Singh",
          position: "HOD of Journalism & Mass Communication",
          degree: "M.Sc. in Mass Communication Journalism And Advertising",
          experience: "12 years",
        },
        {
          image: "",
          name: "Prof. Harsh Sharma",
          position: "Assistant Professor",
          degree: "MMA in Hindi Literature MBA ( Finance-Marketing) PGDCA",
          experience: "3 years",
        },
        { image: "/shalinisoni.jpg",
          name: "Prof.Shalini Soni",
          position: "Assistant Professor",
          degree: "M.A,M.Com, PGDM",
          experience: "1 years",
        },
        { image: "",
          name: "Prof.Bhagat Singh Dawar",
          position: "Assistant Professor",
          degree: "- Ph.D.Pursuing,  M.A (Economics) B.Ed",
          experience: "2 years",
        },
        // Add more faculty members as needed
      ];

      break;
    case "eet":
      slogan =
        "Powering Innovation, Electrifying the Future: Harness the Potential with Electrical Engineering!";
      author = "DILIP SAHASTRABUDHE";
      deptImg = "/dept-m-v.jpg";
      aboutDept =
        "The Electrical Engineering (EE) Department at -LNCPS,indore is a center of excellence, dedicated to the study and advancement of electrical systems and technologies. Our curriculum is designed to provide students with a deep understanding of electrical circuits, power systems, control engineering, and renewable energy technologies. Through hands-on laboratory work, innovative research projects, and industry partnerships, students gain practical skills and real-world experience that prepare them for the challenges of the electrical engineering field. Our distinguished faculty, renowned for their research contributions and industry expertise, are committed to mentoring students and fostering an environment of intellectual growth and innovation. The EE Department is devoted to developing the next generation of electrical engineers who will lead advancements in technology and contribute to sustainable solutions for a better future.";
      dept = "Physical Education";
      headD = "MR.DILIP SAHASTRABUDHE";
      headImg = "/exhod.jpg";
      phoneHead = "7509974000";
      emailHead = "hodex.LNCPS@LNCPSindore.com,";
      faculties = [
        {
          image: "",
          name: "MS. GARIMA MAHESHWARI",
          position: "Assistant Professor",
          degree: "M.E.",
          experience: "9 years",
        },
        // {
        //   name: "Jane Smith",
        //   position: "Data Scientist",
        //   degree: "Masters in Data Science",
        //   experience: "3 years",
        // },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "it":
      slogan = "dfsghj slogan";
      author = "author slogan";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "dfvbgsnha";
      dept = "Humanities";
      headD = "Head Dept";
      headImg = "/director.png";
      phoneHead = "1234567890";
      emailHead = "abc@gmail.com";
      faculties = [
        {
          image: "",
          name: "John Doe",
          position: "Software Engineer",
          degree: "Bachelors in Computer Science",
          experience: "5 years",
        },
        {
          image: "",
          name: "Jane Smith",
          position: "Data Scientist",
          degree: "Masters in Data Science",
          experience: "3 years",
        },
        {
          image: "",
          name: "Emily Johnson",
          position: "Project Manager",
          degree: "MBA",
          experience: "7 years",

        },
        // Add more faculty members as needed
      ];

      break;

    default:
      break;
  }
 const [active, setActive] = useState(0)
 const buttons=[
  'About The Department','Course-curriculmn','Labs Facility','Faculty','Academic Programmes'
 ]
  return (
    <>
    
    <div>
      <SliderMain images={images} heading={dept} />
      <div className='mt-10 flex items-center gap-5'>
      {
        buttons.map((item,index)=>(
          <button onClick={()=>setActive(index)} className='border-2 p-4 rounded-lg bg-blue-500 hover:bg-blue-700' key={index}>{item}</button>
        ))
      }
      </div>
      
      <div className="w-full   ">
        {
          active===0 && (
            <div className="w-full flex px-20 py-10  gap-7">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" text-4xl text-blue-800 my-5">
                About the Department
              </h2>
              <div className="w-full   mt-5">
                <div className="w-full grid grid-cols-3 gap-5 ">
                  {counter.map((count) => (
                    <DeptCounter
                      key={count.title}
                      initialValue={3}
                      targetValue={count.value}
                      speed={count.speed}
                      textColor={count.textColor}
                      text={count.title}
                      color={count.color}
                    />
                  ))}
                </div>
              </div>

              <p className=" mt-5 font-extralight text-sm  text-justify  h-[160px]">
                {aboutDept}
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
          )
        }
        {
          active===1 && (
            <div><Curriculumn/></div>
          )
        }
        {
          active===2 && (
            <div>
              <div className="w-full flex px-20 py-4 gap-7">
          <div className="w-3/5 h-[580px]">
            <div className="relative h-full">
              <Image
                src={deptImg}
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-2/5  flex flex-col gap-10 py-20 justify-between ">
            <div className="w-11/12 mx-auto  flex flex-col gap-4">
              <div className="flex  items-center gap-2">
                <Image src="/mission-icon.png" width={70} height={20} alt="h" />{" "}
                <h1 className="text-2xl font-bold">Mission</h1>
              </div>
              <div>
                <p className="text-sm font-extralight">
                  To impart knowledge and equip students with skills for
                  generating quality civil engineering professionals with high
                  ethical standards; carry out innovative research and
                  consultancy projects to design, build and maintain civil
                  engineering infrastructure ensuring environmental health and
                  quality life.
                </p>
              </div>
            </div>
            <div className="w-11/12 mx-auto  flex flex-col gap-4">
              <div className="flex  items-center gap-2">
                <Image src="/vision-icon.png" width={70} height={20} alt="h" />{" "}
                <h1 className="text-2xl font-bold">Vision</h1>
              </div>
              <div>
                <p className="text-sm font-extralight">
                  To become frontier in civil engineering education and
                  research, which will serve the society with most sustainable
                  infrastructure and superior environmental health.
                </p>
              </div>
            </div>
          </div>
        </div>
            </div>
          )
        }
        {
          active===3 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6 ">
          <h1 className="font-bold text-4xl text-blue-700">
            Head Of Department
          </h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2  flex items-center p-4">
              <div className="w-72 h-72 rounded-full border-2 border-black relative overflow-hidden">
                <Image src={headImg} fill />
              </div>
              <div className="flex flex-col justify-center  p-10">
                <h1 className=" font-semibold text-2xl">{headD}</h1>
                <h2 className="text-lg mb-2">Head Of Department</h2>
                <h1 className="text-sm  mt-1">
                  <FaPhoneAlt className="inline mr-1" />
                  {phoneHead}
                </h1>
                <h1 className="text-sm  mt-1">
                  <MdEmail className="inline mr-1" />
                  {emailHead}
                </h1>
              </div>
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center">
              <p className="p-5 text-3xl text-center"> {slogan}</p>
              <h1 className=" italic  text-2xl">- {author}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center font-semibold border-b">Faculty at LNCPS</h1>
        <div className=" grid ">
        <div>
          {faculties.map((faculty, index) => (
            <div
              className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
              key={index}
            >
              <div className=" flex gap-6 ">
                <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
                  <Image
                    src={faculty.image}
                    alt="Img Not Found"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" py-4">
                  <h1 className="my-2 font-bold text-lg mt-1">
                    <span className="font-semibold"> Name : </span>{" "}
                    {faculty.name}
                  </h1>
                  <h1 className="text-sm mt-1">
                    <span className="font-semibold"> Designation : </span>{" "}
                    {faculty.position}
                  </h1>
                  <h2 className="text-sm">
                    <span className="font-semibold"> Qualification : </span>{" "}
                    {faculty.degree}
                  </h2>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Experience : </span>{" "}
                    {faculty.experience}
                  </h3>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Gmail </span>
                    {faculty.email}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Add more rows as needed */}
        </div>
      </div>
            </>
          )
        }
        {
          active===4 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6">
          <h1 className="text-4xl text-blue-700 font-bold p-2">
            Academic Programmes
          </h1>
          <div className="w-full flex justify-center gap-20 ">
            <ProgramCard
              course={"Undergraduate"}
              bgcolor={"bg-blue-800"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
            <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-blue-800"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
          </div>
        </div>
            </>
          )
        }
        
        

        
        
        {/* <div className="w-full p-2"></div> */}
      </div>
      <div>
      
    </div>
      
      
    </div>
    </>
  );
}
