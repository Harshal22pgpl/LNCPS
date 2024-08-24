"use client";
import React from "react";
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


export default function DeptEr({ dept }) {
  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-red-600",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-red-600",
      color: "bg-[#FF3344]",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-red-600",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-red-600",
      color: "bg-[#FF3344]",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-red-600",
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
      slogan = "Engineering Tomorrow, Innovating Today ,Unleash Your Potential with Us!";
      author = "Dr.Mumuksha Jain ";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Mechanical Engineering Department at -LNCPS Indore is a hub of innovation and excellence, dedicated to the study and application of mechanical systems. Our department focuses on providing a robust education that combines theoretical knowledge with practical experience. Students engage in a variety of subjects, including thermodynamics, fluid mechanics, materials science, and robotics. Through hands-on projects, state-of-the-art laboratories, and industry collaborations, we prepare our students to solve real-world engineering challenges. Our faculty, renowned for their expertise and research contributions, are committed to mentoring students and fostering a learning environment that encourages creativity and critical thinking. Whether it's designing the next generation of sustainable energy systems or developing advanced manufacturing techniques, our Mechanical Engineering Department is at the forefront of technological advancement and prepares graduates to excel in diverse engineering careers";
      dept = "Commerce";
      headD = "Dr.Mumuksha Jain ";

      headImg = "/faculty/com_HOD.jpg";
      phoneHead = "8368766792";
      emailHead = "mumukshaj@gmail.com";
      faculties = [
        {
          name: "Prof. Muskan Jain",
          position: "Assistant Professor",
          degree: "Pursuing  Ph.D from DAVV,M.Com, B.Com",
          experience: "3 years",
        },
        {
          name: "Prof.Chirag Sharma",
          position: "Assistant Professor",
          degree: "Pursuing Ph.D from DAVV, M.Com, B.com ",
          experience: "3 years",
        },
       
        // Add more faculty members as needed
      ];

      break;
    case "cse":
      slogan = "Empowering Innovation, Shaping the Future: Where Technology Meets Excellence";
      author = "Prof. Swati Patil";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Computer Science Department at -LNCPS indore is a vibrant and dynamic community dedicated to advancing the frontiers of technology and innovation. Our curriculum is designed to equip students with a solid foundation in computing principles, software development, and data analysis. With courses ranging from artificial intelligence and cybersecurity to software engineering and machine learning, our program prepares students for the rapidly evolving tech industry. Our state-of-the-art labs, collaborative research projects, and industry partnerships provide hands-on experience and practical skills essential for real-world applications. Our distinguished faculty, renowned for their cutting-edge research and industry expertise, are committed to guiding students in their academic and professional growth. Whether you aspire to develop groundbreaking software, solve complex computational problems, or lead technological advancements, the Computer Science Department at -LNCPS indore is the ideal place to start your journey.";
      dept = "Computer Science";
      headD = "Prof. Swati Patil";
      headImg = "/faculty/sci_HOD.jpg";
      phoneHead = "9425435798";
      emailHead = "swati.bpl2009@gmail.com ";
      faculties = [
        {
          name: "Prof. SARVESH MISHRA",
          position: "Assistant Professor",
          degree: " M.Sc. GATE-2007, M.Tech.(L.S.A.) C.G. SET-2017 , Ph.D. Pursuing ",




          experience: "12 years",
        },
        {
          name: "Prof.kiti Bamaniya",
          position: "Assistant Professor",
          degree: "M.Sc(Applied Chemistry),B.Sc",
          experience: "1 years",
        },
        {
          name: "Prof Nikita yadav",
          position: "Assistant Professor",
          degree: "Ph.D Pursuing, M.Sc(BioChemistry),B.Sc",
          experience: "1 years",
        },
        // Add more faculty members as needed
      ];

      break;
    case "ece":
      slogan = "Connecting Ideas, Creating Futures: Innovate with Electronics and Communication!";
      author = "Manisha Singh";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Electronics and Communication Engineering (ECE) Department at -LNCPS,indore is a hub of technological innovation and academic excellence. Our department focuses on the study and application of electronic systems, communication technologies, and signal processing. Students are immersed in a comprehensive curriculum that covers a wide range of topics, including digital electronics, telecommunications, embedded systems, and VLSI design. With access to cutting-edge laboratories and industry-standard tools, students gain hands-on experience that prepares them for the dynamic field of electronics and communication. Our dedicated faculty, known for their research and industry involvement, mentor students to develop critical thinking and problem-solving skills. The ECE Department is committed to fostering a learning environment that encourages creativity, innovation, and collaboration, ensuring that our graduates are well-equipped to excel in the fast-paced world of technology and communication.";
      dept = "Science";
      headD = "Prof.Manisha Singh";
      headImg = "/faculty/arts_HOD.jpg";
      phoneHead = "9977791266";
      emailHead = "Email.gautammanisha305@gmail.com";
      faculties = [
        {
          name: "Prof. Hemant Vijay Bharat Singh",
          position: "HOD of Journalism & Mass Communication",
          degree: "M.Sc. in Mass Communication Journalism And Advertising",
          experience: "12 years",
        },
        {
          name: "Prof. Harsh Sharma",
          position: "Assistant Professor",
          degree: "MMA in Hindi Literature MBA ( Finance-Marketing) PGDCA",
          experience: "3 years",
        },
        {
          name: "Prof.Shalini Soni",
          position: "Assistant Professor",
          degree: "M.A,M.Com, PGDM",
          experience: "1 years",
        },
        {
          name: "Prof.Bhagat Singh Dawar",
          position: "Assistant Professor",
          degree: "- Ph.D.Pursuing,  M.A (Economics) B.Ed",
          experience: "2 years",
        },
        // Add more faculty members as needed
      ];

      break;
    case "eet":
      slogan = "Powering Innovation, Electrifying the Future: Harness the Potential with Electrical Engineering!";
      author = "DILIP SAHASTRABUDHE";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Electrical Engineering (EE) Department at -LNCPS,indore is a center of excellence, dedicated to the study and advancement of electrical systems and technologies. Our curriculum is designed to provide students with a deep understanding of electrical circuits, power systems, control engineering, and renewable energy technologies. Through hands-on laboratory work, innovative research projects, and industry partnerships, students gain practical skills and real-world experience that prepare them for the challenges of the electrical engineering field. Our distinguished faculty, renowned for their research contributions and industry expertise, are committed to mentoring students and fostering an environment of intellectual growth and innovation. The EE Department is devoted to developing the next generation of electrical engineers who will lead advancements in technology and contribute to sustainable solutions for a better future.";
      dept = "Physical Education";
      headD = "MR.DILIP SAHASTRABUDHE";
      headImg = "/exhod.jpg";
      phoneHead = "7509974000";
      emailHead = "hodex.LNCPS@LNCPSindore.com,";
      faculties = [
        {
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
          name: "John Doe",
          position: "Software Engineer",
          degree: "Bachelors in Computer Science",
          experience: "5 years",
        },
        {
          name: "Jane Smith",
          position: "Data Scientist",
          degree: "Masters in Data Science",
          experience: "3 years",
        },
        {
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

  return (
    <div>
      <SliderMain images={images} heading={dept} />
      <div className="w-full   ">
        <div className="w-full flex px-20 py-10  gap-7">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" text-4xl text-[#FF3344] my-5">
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

        <div className="w-full flex flex-col px-20 gap-4 py-6">
          <h1 className="text-4xl text-[#C80D1D] font-bold p-2">
            Academic Programmes
          </h1>
          <div className="w-full flex justify-center gap-20 ">
            <ProgramCard
              course={"Undergraduate"}
              bgcolor={"bg-[#FF3344]"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
            <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-[#89131D]"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col px-20 gap-4 py-6 ">
          <h1 className="font-bold text-4xl text-[#C80D1D]">
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
              <p className="p-5 text-3xl text-center">
                {" "}
                {slogan}
              </p>
              <h1 className=" italic  text-2xl">- {author}</h1>
            </div>
          </div>
        </div>
        <div className="w-full p-2"></div>
      </div>
      <div>
      <h1 className="text-3xl text-center font-semibold border-b">Facult at LNCPS</h1>
    </div>
      
      <div className=" grid ">
         
         <div>
            {faculties.map((faculty, index) => (
              <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] " key={index}>
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
                  <span className="font-semibold"> Name : </span> {faculty.name}
                  </h1>
                  <h1 className="text-sm mt-1"><span className="font-semibold"> Designation : </span>   {faculty.position}</h1>
                  <h2 className="text-sm"><span className="font-semibold"> Qualification : </span> {faculty.degree}</h2>
                  <h3 className="text-sm mt-1"><span className="font-semibold"> Experience : </span>  {faculty.experience}</h3>
                  <h3 className="text-sm mt-1"><span className="font-semibold"> Gmail </span>{faculty.email}</h3>
                </div>
              </div>
            </div>
            ))}

            {/* Add more rows as needed */}
        
       
    </div>
    </div>

    </div>
  );
}
