"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Counter from "@/app/components/Counter";
import Card from "@/app/components/Card";
import Seminar from "@/app/components/Seminar";
import Notices from "./components/News-Notices";
import AbouttheInstitute from "./components/AbouttheInstitute/AbouttheInstitute";
import NumberOne from "./components/NumberOne/NumberOne";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo/InfiniteMovingCardsDemo";

export default function Home() {
  const [activeTab, setActiveTab] = useState("postgraduate");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set default active tab to 'postgraduate'

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  // Function to toggle submenu

  const images = ["/Lncpsbuild.png", "/lncpsbuild2.jpg", "/GRPlncps.jpg"];
  const imagesss = ["/Lncpsbuild.png", "/lncpsbuild2.jpg"];

  const EventData = [
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    // Add more events as needed
  ];

  const carouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/Lncpsbuild.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/lncpsbuild2.jpg",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },
    // Add more news items as needed
  ];

  const additionalCarouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/ar-1.jpg",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/ar-3.jpg",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/ar-2.jpg",
    },
  ];

  const EventsData = [
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    // Add more events as needed
  ];

  // const imagess = [
  //   "/speaker.JPG",
  //   "/award.JPG",
  //   "/principals.JPG",
  //   "/carasol2.jpg",
  //   "/grp.jpg",
  //   "/Sports.jpg",
  //   "/LNCPS-sports.jpg",
  //   "/LNCPS-stunt.jpg",
  //   "/mdsir.jpg",
  //   "/carasol1.jpg",
  //   "/studentgrp.jpg",
  //   "/baja2.jpg",
  //   "/mdmaam.jpg",
  //   "/student.jpg",
  //   "/ar-1.jpg",
  //   "/ar-2.jpg",
  //   "/ar-3.jpg",
  //   "/ar-1.jpg",
  //   "/ar-2.jpg",
  //   "/ar-3.jpg",
  //   "/ar-1.jpg",
  //   "/ar-2.jpg",
  //   "/ar-3.jpg",
  // ];

  const ScarouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },
    // Add more news items as needed
  ];
  const additionalCarouselDataseminar = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },

    // Add more news items as needed
  ];

  return (
    <div className=" text-white">
      <div className="md:w-full lg:w-full sm:w-full w-full">
        <Image
          className="duration-500 w-full min-h-[500px] max-h-[500px]"
          src={images[currentSlide]}
          alt="Hero Image"
          width={700}
          height={650}
        />
      </div>

      <NumberOne
        img="/number-1.png"
        title="WHY  LNCPS"
        content="Today, LNCPS Group is one of the Largest and most preferred Educational Group for Engineering, Management, Pharmacy, Medical with ISO-9001 certification and NBA accreditation for many Engineering courses.. Bright young students from all across the country are coming to fulfill their dream in this group."
      />
      <section className="  w-11/12 mx-auto">
        <Notices
          eventData={EventData}
          carouselData={carouselData}
          additionalCarouselData={additionalCarouselData}
        />
      </section>
      <section className="mt-10 w-11/12 mx-auto mb-10">
        <Seminar
          eventData={EventsData}
          carouselData={ScarouselData}
          additionalCarouselData={additionalCarouselDataseminar}
        />
      </section>
      <div className=" w-full border-2">
        <InfiniteMovingCardsDemo />
      </div>
      {/* <div className=" w-11/12 mx-auto">
        <ParallaxScroll images={imagess} />
      </div> */}
      <section
        className="academic-programme mx-auto mt-10 flex justify-center overflow-auto"
        style={{
          background: "url('/baggi.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col lg:flex-row  items-center bg-opacity-75 bg-[#89131D] h-auto lg:h-[580px] p-4">
          <nav className="nav flex flex-col lg:w-1/4 w-full lg:items-start items-center p-4 overflow-hidden">
            <ul className="space-y-2 bg-white rounded-xl p-4 w-full lg:w-auto">
              <li className="bg-white rounded-lg text-black hover:bg-[#FF3344]">
                <button
                  onClick={() => handleTabClick("undergraduate")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "undergraduate" ? "active" : ""
                  }`}
                  role="tab"
                >
                  Bachelor of Business Administration (BBA)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#FF3344]">
                <button
                  onClick={() => handleTabClick("postgraduate")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "postgraduate" ? "active" : ""
                  }`}
                  role="tab"
                >
                  Bachelor of Commerce (B.Com. - Plain)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#FF3344]">
                <button
                  onClick={() => handleTabClick("bcmp")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "bcmp" ? "active" : ""
                  }`}
                  role="tab"
                >
                  B.Sc. (Chemistry- Mathematics – Physics)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#f6820f]">
                <button
                  onClick={() => handleTabClick("bcs")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "bcs" ? "active" : ""
                  }`}
                  role="tab"
                >
                  B.Sc. (Computer Science – Mathematics – Physics)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#f6820f]">
                <button
                  onClick={() => handleTabClick("bah")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "bah" ? "active" : ""
                  }`}
                  role="tab"
                >
                  BA (History-Hindi-English)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#f6820f]">
                <button
                  onClick={() => handleTabClick("bee")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "postgraduate" ? "active" : ""
                  }`}
                  role="tab"
                >
                  BA (Economics-English-Psychology)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#f6820f]">
                <button
                  onClick={() => handleTabClick("doctoral")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "doctoral" ? "active" : ""
                  }`}
                  role="tab"
                >
                  Bachelor of Commerce (B.Com. - Tax)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#FF3344]">
                <button
                  onClick={() => handleTabClick("executive")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "executive" ? "active" : ""
                  }`}
                  role="tab"
                >
                  BJMC – (Print Journalism, Broadcast (Radio and TV) Journalism
                  and Web Journalism)
                </button>
              </li>
              <li className="bg-white rounded-lg text-black hover:bg-[#FF3344]">
                <button
                  onClick={() => handleTabClick("parttime")}
                  className={`p-4 w-full lg:w-auto text-left nav-link ${
                    activeTab === "parttime" ? "active" : ""
                  }`}
                  role="tab"
                >
                  B.Sc. (BioTechnology-Chemistry-Pharmaceutical Chemistry)
                </button>
              </li>
            </ul>
          </nav>
          <div className="tab-content lg:w-3/4 w-full p-4">
            {activeTab === "undergraduate" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BBA</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years
                  <br></br>
                  BBA 1st semester syllabus (click to download)
                  <br></br>
                  BBA 2nd semester syllabus (click to download)
                  <br></br>
                  BBA 3rd and 4th semester syllabus (click to download)
                  <div>
                    <h1>Branch/Specialization</h1>
                    B.A. (Economics) - Intake 60 Eligibility Criteria: 12th in
                    any stream Institute: Lakshmi Narain College of Professional
                    Studies University: Devi Ahilya Vishwavidyalaya Help Line
                    Number: +91 9752410847
                  </div>{" "}
                  (
                  <a
                    href="https://josaa.nic.in/"
                    className="outside-link"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  )
                </p>
              </article>
            )}
            {activeTab === "postgraduate" && (
              <article
                className="tab-pane fade active show text-black"
                role="tabpanel"
              >
                <h2 className="text-white font-bold text-3xl">B.COM</h2>
                <h4 className="text-white mt-5">M. Tech.</h4>
                <p className="text-white text-justify">
                  Duration: 3 Years B.Com. syllabus (click to download)
                  Foundation Course (click to download)
                </p>
                <div>
                  Branch/Specialization: Bachelor of Commerce (Plain) (60)
                  Bachelor of Commerce (Tax) (60) Eligibility Criteria: 12th in
                  any stream (for HONS. minimum 60% marks) Institute: Lakshmi
                  Narain College of Professional Studies University: Devi Ahilya
                  Vishwavidyalaya Help Line Number: +91 9752410847 Admission
                  Procedure: Admissions to various courses of LNCPS are based on
                  merit positions on the basis of percentage of marks obtained
                  by the student in the qualifying examination. The candidate is
                  eligible to apply for the admission only when he/she fulfils
                  the document requirements for the particular programme in
                  which the admission is sought. It is the responsibility of the
                  student to obtain all the relevant information about his/her
                  eligibility. In case a student who is provisionally admitted
                  on the basis of the information/documents furnished by him is
                  found ineligible/fake, The Director/Principal reserves the
                  right to cancel the admission without any intimation to the
                  candidate. Documents: Copy of mark sheet of 10th and 12th
                  class. Transfer Certificate (in original). Migration
                  Certificate (in original). Character Certificate (in original)
                  5 Photographs of candidate. 1 Photograph of Father and 1 of
                  Mother. Caste certificate in case of SC / ST / OBC category.
                  Minority certificate for minorities. Gap certificate in case
                  of any gap during study. Reservation: The institute follows
                  the provisions contained in the constitution of India and the
                  decision of Supreme Court of India as applicable to
                  self-financing educational institutions established and
                  administered by MINORITY COMMUNITY. Refund of Fee: The fee is
                  non-refundable in case a student takes admission to any of the
                  academic programs conducted by the institute and deposits the
                  fee, but subsequently does not join the course or leaves the
                  course during the Year/Semester.
                </div>
                {/* Add content for other postgraduate programs */}
              </article>
            )}
            {activeTab === "doctoral" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">B.COM</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years B.Com. 1st, 2nd, 3rd semester syllabus
                  (click to download) Foundation Course (click to download)
                </p>
                <h4 className="text-white mb-4 font-bold text-3xl">
                  {" "}
                  Branch/Specialization
                </h4>
                <p className="text-white text-justify">
                  Bachelor of Commerce (Plain) (60) Bachelor of Commerce (Tax)
                  (60) Eligibility Criteria: 12th in any stream (for HONS.
                  minimum 60% marks) Institute: Lakshmi Narain College of
                  Professional Studies University: Devi Ahilya Vishwavidyalaya
                  Help Line Number: +91 9752410847 Admission Procedure:
                  Admissions to various courses of LNCPS are based on merit
                  positions on the basis of percentage of marks obtained by the
                  student in the qualifying examination. The candidate is
                  eligible to apply for the admission only when he/she fulfils
                  the document requirements for the particular programme in
                  which the admission is sought. It is the responsibility of the
                  student to obtain all the relevant information about his/her
                  eligibility. In case a student who is provisionally admitted
                  on the basis of the information/documents furnished by him is
                  found ineligible/fake, The Director/Principal reserves the
                  right to cancel the admission without any intimation to the
                  candidate. Documents: Copy of mark sheet of 10th and 12th
                  class. Transfer Certificate (in original). Migration
                  Certificate (in original). Character Certificate (in original)
                  5 Photographs of candidate. 1 Photograph of Father and 1 of
                  Mother. Caste certificate in case of SC / ST / OBC category.
                  Minority certificate for minorities. Gap certificate in case
                  of any gap during study. Reservation: The institute follows
                  the provisions contained in the constitution of India and the
                  decision of Supreme Court of India as applicable to
                  self-financing educational institutions established and
                  administered by MINORITY COMMUNITY. Refund of Fee: The fee is
                  non-refundable in case a student takes admission to any of the
                  academic programs conducted by the institute and deposits the
                  fee, but subsequently does not join the course or leaves the
                  course during the Year/Semester.
                </p>
              </article>
            )}
            {activeTab === "executive" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BJMC</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years BJMC syllabus (click to download)
                </p>
              </article>
            )}

            {activeTab === "bcmp" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BsC</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years Admission criteria – 12th with science for
                  BSc courses and 12th passed with out science can apply for all
                  except BSc Chemistry syllabus(click to download) Foundation
                  Course(click to download) BA Mathematics Scheme of Examination
                  & Syllabus(click to download) BA Physics Scheme of Examination
                  & Syllabus(click to download)
                </p>
                <div>
                  Branch/Specialization: B.Sc (Computer Science) (Intake 60)
                  B.Sc (Biotechnology) (Intake 60) B.Sc (Plain) (Intake 60)
                  Eligibility Criteria: 12th with Physics-Chemistry-Mathematics/
                  Physics-Chemistry-Biology Institute: Lakshmi Narain College of
                  Professional Studies University: Devi Ahilya Vishwavidyalaya
                  Help Line Number: +91 9752410847 Admission Procedure:
                  Admissions to various courses of LNCPS are based on merit
                  positions on the basis of percentage of marks obtained by the
                  student in the qualifying examination. The candidate is
                  eligible to apply for the admission only when he/she fulfils
                  the document requirements for the particular programme in
                  which the admission is sought. It is the responsibility of the
                  student to obtain all the relevant information about his/her
                  eligibility. In case a student who is provisionally admitted
                  on the basis of the information/documents furnished by him is
                  found ineligible/fake, The Director/Principal reserves the
                  right to cancel the admission without any intimation to the
                  candidate. Documents: Copy of mark sheet of 10th and 12th
                  class. Transfer Certificate (in original). Migration
                  Certificate (in original). Character Certificate (in original)
                  5 Photographs of candidate. 1 Photograph of Father and 1 of
                  Mother. Caste certificate in case of SC / ST / OBC category.
                  Minority certificate for minorities. Gap certificate in case
                  of any gap during study. Reservation: The institute follows
                  the provisions contained in the constitution of India and the
                  decision of Supreme Court of India as applicable to
                  self-financing educational institutions established and
                  administered by MINORITY COMMUNITY. Refund of Fee: The fee is
                  non-refundable in case a student takes admission to any of the
                  academic programs conducted by the institute and deposits the
                  fee, but subsequently does not join the course or leaves the
                  course during the Year/Semester.
                </div>
              </article>
            )}

            {activeTab === "bcs" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BSC</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years Admission criteria – 12th with science for
                  BSc courses and 12th passed with out science can apply for all
                  except BSc Physics Scheme of Examination & Syllabus(click to
                  download) Foundation Course(click to download) BA Mathematics
                  Scheme of Examination & Syllabus(click to download)
                </p>
                <div>
                  Branch/Specialization: B.Sc (Computer Science) (Intake 60)
                  B.Sc (Biotechnology) (Intake 60) B.Sc (Plain) (Intake 60)
                  Eligibility Criteria: 12th with Physics-Chemistry-Mathematics/
                  Physics-Chemistry-Biology Institute: Lakshmi Narain College of
                  Professional Studies University: Devi Ahilya Vishwavidyalaya
                  Help Line Number: +91 9752410847 Admission Procedure:
                  Admissions to various courses of LNCPS are based on merit
                  positions on the basis of percentage of marks obtained by the
                  student in the qualifying examination. The candidate is
                  eligible to apply for the admission only when he/she fulfils
                  the document requirements for the particular programme in
                  which the admission is sought. It is the responsibility of the
                  student to obtain all the relevant information about his/her
                  eligibility. In case a student who is provisionally admitted
                  on the basis of the information/documents furnished by him is
                  found ineligible/fake, The Director/Principal reserves the
                  right to cancel the admission without any intimation to the
                  candidate. Documents: Copy of mark sheet of 10th and 12th
                  class. Transfer Certificate (in original). Migration
                  Certificate (in original). Character Certificate (in original)
                  5 Photographs of candidate. 1 Photograph of Father and 1 of
                  Mother. Caste certificate in case of SC / ST / OBC category.
                  Minority certificate for minorities. Gap certificate in case
                  of any gap during study. Reservation: The institute follows
                  the provisions contained in the constitution of India and the
                  decision of Supreme Court of India as applicable to
                  self-financing educational institutions established and
                  administered by MINORITY COMMUNITY. Refund of Fee: The fee is
                  non-refundable in case a student takes admission to any of the
                  academic programs conducted by the institute and deposits the
                  fee, but subsequently does not join the course or leaves the
                  course during the Year/Semester.
                </div>
              </article>
            )}

            {activeTab === "bah" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BA</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years BA English Literature Syllabus(click to
                  download) Foundation Course(click to download) BA Mathematics
                  Scheme of Examination & Syllabus(click to download)
                </p>
                <div>
                  Branch/Specialization: B.A. (Economics) - Intake 60
                  Eligibility Criteria: 12th in any stream Institute: Lakshmi
                  Narain College of Professional Studies University: Devi Ahilya
                  Vishwavidyalaya Help Line Number: +91 9752410847
                </div>
              </article>
            )}

            {activeTab === "bee" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BA</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years Syllabus Of BA Psychology(click to download)
                  Foundation Course(click to download) BA Mathematics Scheme of
                  Examination & Syllabus(click to download)
                </p>
                <div>
                  Branch/Specialization: B.A. (Economics) - Intake 60
                  Eligibility Criteria: 12th in any stream Institute: Lakshmi
                  Narain College of Professional Studies University: Devi Ahilya
                  Vishwavidyalaya Help Line Number: +91 9752410847
                </div>
              </article>
            )}

            {activeTab === "parttime" && (
              <article className="tab-pane fade text-black" role="tabpanel">
                <h2 className="text-white font-bold text-3xl">BSC</h2>
                <p className="text-white text-justify">
                  Duration: 3 Years Admission criteria – 12th with science for
                  BSc courses and 12th passed with out science can apply for all
                  except BSc Biotechnology syllabus (click to download)
                  Foundation Course (click to download) Pharmaceutical Chemistry
                  (click to download)
                </p>
                <div>
                  Branch/Specialization: B.Sc (Computer Science) (Intake 60)
                  B.Sc (Biotechnology) (Intake 60) B.Sc (Plain) (Intake 60)
                  Eligibility Criteria: 12th with Physics-Chemistry-Mathematics/
                  Physics-Chemistry-Biology Institute: Lakshmi Narain College of
                  Professional Studies University: Devi Ahilya Vishwavidyalaya
                  Help Line Number: +91 9752410847 Admission Procedure:
                  Admissions to various courses of LNCPS are based on merit
                  positions on the basis of percentage of marks obtained by the
                  student in the qualifying examination. The candidate is
                  eligible to apply for the admission only when he/she fulfils
                  the document requirements for the particular programme in
                  which the admission is sought. It is the responsibility of the
                  student to obtain all the relevant information about his/her
                  eligibility. In case a student who is provisionally admitted
                  on the basis of the information/documents furnished by him is
                  found ineligible/fake, The Director/Principal reserves the
                  right to cancel the admission without any intimation to the
                  candidate. Documents: Copy of mark sheet of 10th and 12th
                  class. Transfer Certificate (in original). Migration
                  Certificate (in original). Character Certificate (in original)
                  5 Photographs of candidate. 1 Photograph of Father and 1 of
                  Mother. Caste certificate in case of SC / ST / OBC category.
                  Minority certificate for minorities. Gap certificate in case
                  of any gap during study. Reservation: The institute follows
                  the provisions contained in the constitution of India and the
                  decision of Supreme Court of India as applicable to
                  self-financing educational institutions established and
                  administered by MINORITY COMMUNITY. Refund of Fee: The fee is
                  non-refundable in case a student takes admission to any of the
                  academic programs conducted by the institute and deposits the
                  fee, but subsequently does not join the course or leaves the
                  course during the Year/Semester.
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <AbouttheInstitute />

      <section class=" flex  lg:h-[300px] w-11/12 mx-auto mt-10 lg:flex-row flex-col  ">
        <div class="items flex-1 w-full bg-[#FF3344] text-white p-6 pt-14 text-center  ">
          <h2 className="font-semibold text-2xl">Thought of the Day</h2>
          <h5 className="font-semibold text-xl py-5 text-justify">
            Sometimes the biggest strength can be found in how you understand
            and confront your greatest weaknesses.
          </h5>
          <h5 className="font-semibold text-2xl">
            <i>--Michael Springer--</i>
          </h5>
        </div>
        <div class="item flex-1 w-full bg-[#89131D] p-6 pt-14  items-center text-center ">
          <h2 className="font-semibold text-2xl">bg-[#C80D1D] the Day</h2>
          <h5 className="font-semibold text-xl py-5">कार्यात्मक</h5>
          <h5 className="font-semibold text-2xl">FUNCTIONAL</h5>
        </div>
      </section>
      <section className=" w-11/12 mx-auto mt-10">
        <div
          className=""
          style={{
            backgroundImage: "url('/svg/linessvg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className=" w-8/9   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dyellow  ">
            <div className="  ">
              <Counter
                initialValue={0}
                targetValue={2000}
                speed={0.001}
                text="Highest Package"
                textColor="text-[#FF3344]"
                title="First Counter"
                color=""
              />
            </div>
            <div className=" ">
              <Counter
                initialValue={20}
                targetValue={100}
                speed={100}
                text="Dream Company Offers"
                textColor="text-green-700"
                title="Second Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="Placements Batch 22-23"
                textColor=""
                title="Third Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="LNCPSians Serving MNC"
                textColor="text-red-600"
                title="Third Counter"
                color=""
              />
            </div>
          </div>
          <div className=" rounded-b-md   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dyellow  mb-12">
            <div className=" ">
              <Counter
                initialValue={0}
                targetValue={2000}
                speed={0.001}
                text="NIRF All India Rank"
                textColor="text-[#FF3344]"
                title="First Counter"
                color=""
              />
            </div>
            <div className=" ">
              <Counter
                initialValue={20}
                targetValue={100}
                speed={100}
                text="Companies Visited 2022"
                textColor="text-green-700"
                title="Second Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="Offers For Core Branch"
                textColor="text-red-600"
                title="Third Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="Ph.D Faculties"
                textColor="text-red-600"
                title="Third Counter"
                color=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-11/12 w-full mx-auto mb-10">
        <div
          className=" "
          style={{
            backgroundImage: "url('/svg/linessvg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            //
            className="flex lg:flex-row flex-col "
            style={{
              backgroundImage: "url('/HomeBg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="md:w-full lg:w-1/2 sm:w-full    ">
              {/* <h3 className="font-bold text-3xl p-5 ">
                Ranking and Recognition &nbsp; &nbsp;&nbsp;
                <Link href="/ranking" className="text-sm">
                  View All...
                </Link>
              </h3> */}
              <Image
                className="duration-200 px-5 min-h-[515px] max-h-[400px] rounded-lg pt-6 flex mx-auto items-center"
                src={images[currentSlide]}
                alt="Hero Image"
                width={700}
                height={650}
              />
            </div>
            <div className="md:w-full lg:w-1/2 sm:w-full  flex flex-col justify-center  ">
              <div className="w-ful rounded-md  sm:p-4  md:p-4 lg:p-5 p-8 shadow-none  border-black grid md:grid-cols-1 lg:grid-cols-2   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dyellow">
                <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap  ">
                  <Card
                    title="Department"
                    content="10"
                    imageUrl="/department.png"
                  />
                </div>
                <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                  <Card title="Faculty" content=" 70+" imageUrl="/staff.png" />
                </div>
                <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                  <Card
                    title="Faculty"
                    content="3050+"
                    imageUrl="/student-icon.png"
                  />
                </div>
                <div className="  flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap">
                  <Card title="Faculty" content="100" imageUrl="/faculty.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
