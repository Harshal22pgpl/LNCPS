import CampusMap from "@/app/components/CampusMap/CampusMap";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <>

      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor: "#43b2ff",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Campus and Facilities</h1>
      </div>
      {/* <SliderMain images={images} heading="Campus and Facilities" /> */}
      <div className="p-10">
        <CampusMap
          heading1="Our buildings"
          paragraph1="Lakshmi Narain College of Professional Studies (LNCPS) has been established in 2018 with a vision to spread the culture of staying rooted with values and ethics and at the same time develop
                skills and competencies to help every student that joins the institute to give back to society and take nation to the zenith.
                The institute is poised to impart the best quality of Higher Education, through the versatile infrastructure of Indore campus. 
                The institute has an excellent Library, laboratories and fully equipped Computer Lab with Wi-Fi facility.
                We offer full time regular under graduate courses affiliated with Devi Ahilya Vishwavidyalaya, Indore. 
                MP Higher Education. In Science stream: B.Sc. (Computer Science), B.Sc. (Biotechnology with Pharmaceutical Chemistry). B.Sc. (PCM). In Commerce: stream B.Com (Tax), B.Com (Plain) and In Business Studies: BBA, BA (Economics) and MBA in dual specialization of Marketing, Finance, HRM, Operations and IT."
          img1="/lncpsbuild2.jpg"
          heading2="Sports Room"
          paragraph2="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
          img2="/baggi.jpg"
        />
        <CampusMap
          heading1="Library"
          paragraph1="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
          img1="/baggi.jpg"
          heading2="PlayGround"
          paragraph2="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
          img2="/baggi.jpg"
        />
        <CampusMap
          heading1="Chemistry Lab"
          paragraph1="The chemistry lab is a vital space for hands-on learning and experimentation, where students explore the fundamental principles of chemistry through practical application. Equipped with modern apparatus and advanced safety features, the lab provides a safe and controlled environment for students to conduct experiments across various branches of chemistry, including organic, inorganic, analytical, and physical chemistry. In the lab, students engage in activities such as compound synthesis, chemical analysis, and titration, gaining a deeper understanding of chemical reactions and properties. Guided by experienced instructors, students learn essential laboratory techniques, develop critical thinking and problem-solving skills, and gain confidence in handling scientific instruments. The chemistry lab plays a crucial role in bridging theoretical knowledge with real-world practice, preparing students for advanced studies and careers in science and technology."
          img1="/chemistry (4).jpg"
          heading2="Computer Lab"
          paragraph2="The computer lab is a dynamic learning environment designed to give students hands-on experience with the latest technologies and computing skills. Outfitted with modern hardware and up-to-date software, the lab provides an ideal space for students to develop proficiency in programming, data analysis, web development, and other essential areas of computer science. Guided by expert instructors, students use the lab to work on projects, conduct research, and solve real-world problems, gaining practical skills in coding languages, software tools, and network configurations. The lab also supports collaborative learning, allowing students to work together on projects, share insights, and enhance their teamwork skills. With a focus on bridging theoretical knowledge with practical application, the computer lab is instrumental in preparing students for the demands of the rapidly evolving tech industry."
          img2="/computer (1).jpg"
        />
        <CampusMap
          heading1="Physics Lab"
          paragraph1="The physics lab is an essential space where students engage with the core principles of physics through hands-on experiments and practical applications. Equipped with a wide range of instruments and tools, the lab allows students to explore fundamental concepts such as mechanics, thermodynamics, electromagnetism, optics, and waves. Instructors guide students through experiments designed to validate theoretical principles, measure physical properties, and understand the behavior of matter and energy. The lab encourages critical thinking, problem-solving, and scientific inquiry, helping students develop a deep understanding of how physical laws operate in the real world. By providing opportunities for experimentation and observation, the physics lab enhances students' learning experiences and prepares them for advanced studies and careers in science and engineering."
          img1="/physics (2).jpg"
          heading2="Biotechnology Lab"
          paragraph2="The biotechnology lab is a state-of-the-art facility designed to provide students with practical exposure to the cutting-edge field of biotechnology. Equipped with advanced instruments and tools, the lab supports a wide range of experiments and research in areas like genetic engineering, microbiology, molecular biology, and bioprocessing. Students work on techniques such as DNA extraction, PCR (Polymerase Chain Reaction), gel electrophoresis, and tissue culture, gaining hands-on experience that bridges theoretical knowledge with real-world applications. The lab also emphasizes safety protocols and ethical practices in biotechnology, ensuring that students develop not only technical expertise but also a strong understanding of the implications of their work. With its focus on innovation and research, the biotechnology lab prepares students for careers in research, healthcare, pharmaceuticals, and other biotechnological industries."
          img2="/biotechnology (2).jpg"
        />
        <CampusMap
          heading1="BAJMC "
          paragraph1="The BAJMC (Bachelor of Arts in Journalism and Mass Communication) lab is a specialized space designed to provide students with practical exposure to the world of media and communication. Equipped with modern audio-visual tools, editing software, and broadcasting equipment, the lab allows students to develop and refine skills in areas such as journalism, news reporting, radio, television production, and digital media. Students engage in hands-on activities like writing news scripts, recording podcasts, editing videos, and creating multimedia content. They also learn the fundamentals of camera work, sound mixing, and live broadcasting. The BAJMC lab fosters creativity, teamwork, and technical proficiency, offering a platform for students to practice and hone their skills in a real-world media environment. This lab plays a crucial role in preparing students for careers in journalism, broadcasting, public relations, digital marketing, and other media-related fields."
          img1="/bajmc (5).JPG"
          // heading2="Biotechnology Lab"
          // paragraph2="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
          // img2="/biotechnology (2).jpg"
        />
      </div>
    </>
  );
}
