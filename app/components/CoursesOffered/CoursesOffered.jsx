import React from 'react'

export default function CoursesOffered() {
  const courses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "Bachelor of Commerce (B.Com. - Plain)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "B.Sc. (Chemistry- Mathematics – Physics)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "B.Sc. (Computer Science – Mathematics – Physics)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "BA (History-Hindi-English)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "BA (Economics-English-Psychology)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "Bachelor of Commerce (B.Com. - Tax)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "BJMC – (Print Journalism, Broadcast (Radio and TV) Journalism and Web Journalism)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
    {
      course: "B.Sc. (BioTechnology-Chemistry-Pharmaceutical Chemistry)",
      duration: "67 gh",
      eligibilty: "vbn"
    },
  ]
  return (
    <div>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 py-4">Course</th>
            <th className="w-1/5 py-4">Duration</th>
            <th className="w-1/5 py-4">Eligibilty</th>

          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.course} className="text-center border-b">
              <td className="py-4">{course.course}</td>
              <td className="py-4">{course.duration}</td>
              <td className="py-4">{course.eligibilty}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
