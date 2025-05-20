import React from 'react';
import './TemplateStyles.css'; // Style file to be created

const TemplateOne = ({ formData }) => {
  const {
    personalInfo,
    workExperience = [],
    education = [],
    skills = {},
    projects = []
  } = formData;

  return (
    <div className="template-one">
      {/* Personal Info */}
      <div className="header">
        <h1>{personalInfo?.fullName || 'Your Name'}</h1>
        <p>{personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}</p>
      </div>

      {/* Work Experience */}
      <section>
        <h2>Work Experience</h2>
        {workExperience.map((work, index) => (
          <div key={index}>
            <h3>{work.position} - {work.company}</h3>
            <p>{new Date(work.startDate).toLocaleDateString()} - {new Date(work.endDate).toLocaleDateString()}</p>
            <p>{work.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree} - {edu.institution}</h3>
            <p><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>
            <p>{new Date(edu.startDate).toLocaleDateString()} - {new Date(edu.endDate).toLocaleDateString()}</p>
            {edu.description && <p><strong>Description / Achievements:</strong> {edu.description}</p>}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <p><strong>Technical Skills:</strong> {skills.technicalSkills?.join(', ')}</p>
        <p><strong>Soft Skills:</strong> {skills.softSkills?.join(', ')}</p>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        {projects.map((proj, index) => (
          <div key={index}>
            <h3>{proj.heading}</h3> {/* Project Heading */}
            <p>{proj.description}</p> {/* Project Description */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default TemplateOne;
