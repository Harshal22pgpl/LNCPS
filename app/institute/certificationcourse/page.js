import CampusMap from "@/app/components/CampusMap/CampusMap";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <>
      {/* <SliderMain images={images} heading="Certification Courses" /> */}
      <div
        className="w-full h-32 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor: "#78c7ff",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Certification Courses</h1>
      </div>

      <div className="p-8">
        <CampusMap
          heading1="Tax Planning Course "
          paragraph1="The Tax Planning Certification Course offers a comprehensive understanding of tax regulations, strategies, and best practices to optimize financial planning and compliance. Designed for professionals, business owners, and individuals keen on mastering tax strategies, the course covers key areas including income tax, corporate tax, deductions, credits, and legal tax-saving opportunities. Through real-world case studies and practical exercises, participants gain insights into minimizing tax liabilities while adhering to legal requirements. This course empowers learners with the skills needed to make informed tax-related decisions, maximize financial efficiency, and stay current with evolving tax laws and regulations "
          img1="/course1.jpg"
          heading2="Smart Speaking English Course"
          paragraph2="The Smart Speaking English Certification Course is designed to enhance spoken English proficiency with a focus on clarity, fluency, and confidence in real-life situations. Tailored for non-native speakers, this course covers essential aspects of effective communication, including pronunciation, vocabulary building, sentence structure, and conversational skills. Participants will engage in interactive sessions, practical exercises, and role-playing activities that mirror everyday and professional interactions. By the end of the course, learners will be equipped to express themselves more effectively in English, gaining confidence and finesse in their communication skills, whether for personal growth or career advancement. "
          img2="/course2.jpg"
        />
        <CampusMap
          heading1="Introductory Mathematical Physics Course "
          paragraph1="The Introductory Mathematical Physics Certification Course offers a comprehensive dive into the mathematical frameworks that underpin physical theories and applications, providing essential tools and techniques that are foundational for understanding the complex nature of the universe. Covering topics such as vector calculus, differential equations, linear algebra, Fourier analysis, and complex variables, the course takes a systematic approach to the mathematics needed to navigate fields like classical mechanics, electromagnetism, statistical mechanics, and quantum physics. Participants will learn how to rigorously formulate and solve equations that describe physical laws, interpret physical scenarios mathematically, and tackle real-world physics problems with confidence.
                      This course is ideal for physics and engineering students, aspiring scientists, and professionals looking to reinforce their mathematical skills in the context of physical sciences. Through interactive lectures, guided practice, and application-based assignments, learners will develop the critical thinking and analytical abilities essential for advanced studies or research in physics. By the end of the course, participants will not only have acquired mathematical proficiency but also a deeper understanding of how these concepts reveal the intricate structure of physical phenomena, paving the way for future explorations in theoretical or applied physics."
          img1="/course3.jpg"
          heading2="Accounting and Tally ERP 9 Course"
          paragraph2="The Certification Course on Accounting and Tally ERP 9 is designed to equip learners with practical knowledge and skills in accounting principles and Tally ERP 9, a widely used software for financial management and accounting. This course covers fundamental accounting concepts, such as bookkeeping, financial statements, ledgers, and payroll, while providing hands-on training in Tally ERP 9 for accurate data entry, inventory management, GST calculations, and report generation. Learners will gain valuable experience with Tally ERP 9's various features, including voucher and order processing, cost center management, and tax handling, enabling them to streamline financial processes efficiently.
                      Ideal for accounting students, business owners, and professionals, this course combines theoretical knowledge with real-world applications, helping participants to confidently manage finances and analyze financial data in diverse business settings. By the end of the course, participants will have the expertise to maintain comprehensive financial records, ensure compliance with accounting standards, and make informed financial decisions using Tally ERP 9. This certification opens pathways to roles in accounting, finance, and business management, providing a strong foundation for career growth in these fields. "
          img2="/course4.jpg"
        />
        <CampusMap
          heading1="Advanced Excel Course "
          paragraph1="The Advanced Excel Certification Course is designed to elevate Excel skills for professionals who seek to leverage this powerful tool for data analysis, business insights, and efficient workflow management. Covering essential and advanced functionalities, the course dives into data organization, complex formulas, pivot tables, data validation, conditional formatting, and dynamic charting. Additionally, learners will explore automation techniques using macros and VBA (Visual Basic for Applications) to streamline repetitive tasks, boosting productivity and accuracy. Through real-life business scenarios and hands-on exercises, participants will learn to extract insights, model data, and present findings effectively.
                      Ideal for finance professionals, data analysts, business managers, and anyone looking to master Excel, this course will enable participants to harness Excel’s full potential, transforming raw data into actionable information. By the end of the program, learners will have the expertise to handle complex data sets, perform advanced analysis, create dashboards, and generate customized reports with confidence, making them invaluable assets to any data-driven organization. This certification is a stepping stone toward roles in data analysis, financial modeling, and decision support, providing skills that are highly valued across industries. "
          img1="/course5.jpg"
          heading2="Basics of Non-Verbal Communication Course "
          paragraph2="The Basics of Non-Verbal Communication Certification Course is designed to help participants understand and harness the power of non-verbal cues to enhance personal and professional interactions. Non-verbal communication plays a critical role in how messages are received and interpreted, encompassing body language, facial expressions, gestures, eye contact, posture, and even the use of personal space. This course teaches foundational skills to recognize and utilize these elements effectively, helping learners convey confidence, empathy, and clarity without speaking a word.
                      Through engaging lessons, practical activities, and observational exercises, participants will develop the ability to interpret non-verbal signals in others, adapt their own body language to foster trust and rapport, and better navigate social and professional situations. Ideal for students, professionals, and anyone interested in improving their communication skills, this course equips learners to build stronger connections, minimize misunderstandings, and enhance their overall interpersonal effectiveness. By mastering the basics of non-verbal communication, participants will gain a valuable skill set that complements verbal communication, contributing to personal growth and improved interactions in any setting. "
          img2="/course6.jpg"
        />
        {/* <CampusMap
          heading1="Certification Course 7"
          paragraph1="Course Deatils "
          img1="/baggi.jpg"
          heading2="Certification Course 8"
          paragraph2="Course Deatils "
          img2="/baggi.jpg"
        /> */}
      </div>
    </>
  );
}
