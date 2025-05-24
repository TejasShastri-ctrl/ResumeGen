import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";


function RTemplate2({data}) {
    return (
        <div className="w-full flex justify-center">
          <div className="w-[1000px] bg-white rounded-lg overflow-hidden p-8">
            {/* Header Section */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">{data.personalInformation.fullName}</h1>
              <p className="text-gray-600">{data.personalInformation.location}</p>
              <div className="mt-2 text-gray-500">
                <p>{data.personalInformation.email || "N/A"}</p>
                <p>{data.personalInformation.phoneNumber || "N/A"}</p>
              </div>
            </div>
            
            {/* Summary */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-2">Summary</h2>
              <p className="text-gray-700 mt-2">{data.summary || "No summary available."}</p>
            </section>
            
            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
              <ul className="mt-2 text-gray-700 grid grid-cols-2 gap-2">
                {data.skills.length > 0 ? (
                  data.skills.map((skill, index) => (
                    <li key={index} className="text-sm">{skill.title} - {skill.level}</li>
                  ))
                ) : (
                  <li className="text-sm">No skills listed</li>
                )}
              </ul>
            </section>
            
            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>
              {data.experience.length > 0 ? (
                data.experience.map((exp, index) => (
                  <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{exp.jobTitle}</h3>
                    <p className="text-gray-500">{exp.company} | {exp.location}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                    <p className="text-gray-700 mt-2">{exp.responsibility}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No experience listed.</p>
              )}
            </section>
            
            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
              {data.education.length > 0 ? (
                data.education.map((edu, index) => (
                  <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-500">{edu.university}, {edu.location}</p>
                    <p className="text-gray-400 text-sm">🎓 Graduation Year: {edu.graduationYear}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No education details available.</p>
              )}
            </section>
            
            {/* Projects */}
            <section>
              <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>
              {data.projects.length > 0 ? (
                data.projects.map((proj, index) => (
                  <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                    <p className="text-gray-700">{proj.description}</p>
                    <p className="text-gray-500">Technologies: {Array.isArray(proj.technologiesUsed) ? proj.technologiesUsed.join(", ") : String(proj.technologiesUsed || "N/A")}</p>
                    {proj.githubLink && (
                      <a
                        href={proj.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        🔗 GitHub Link
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No projects listed.</p>
              )}
            </section>
          </div>
        </div>
      );
      
}

export default RTemplate2;