import React from 'react';
import './TemplateStyles.css';

const TemplateTwo = ({ formData }) => {
  const {
    personalInfo,
    workExperience = [],
    education = [],
    skills = {},
    projects = []
  } = formData;

  return (
    <div className="template-two">
      <aside className="sidebar">
        <h2>{personalInfo?.fullName || 'Your Name'}</h2>
        <p>{personalInfo?.email}</p>
        <p>{personalInfo?.phone}</p>
        <p>{personalInfo?.address}</p>
        <div className="skills">
          <h3>Technical Skills</h3>
          <p>{skills.technicalSkills?.join(', ')}</p> {/* Display technical skills */}
          <h3>Soft Skills</h3>
          <p>{skills.softSkills?.join(', ')}</p> {/* Display soft skills */}
        </div>
      </aside>

      <main className="main-content">
        {/* Work Experience */}
        <section>
          <h2>Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index}>
              <h3>{work.position} - {work.company}</h3>
              <p>{new Date(work.startDate).toLocaleDateString()} - {new Date(work.endDate).toLocaleDateString()}</p> {/* Display start and end dates */}
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
              <p>{edu.fieldOfStudy && <strong>Field of Study:</strong>} {edu.fieldOfStudy}</p>
              <p>{new Date(edu.startDate).toLocaleDateString()} - {new Date(edu.endDate).toLocaleDateString()}</p> {/* Display start and end dates */}
              {edu.description && <p><strong>Description / Achievements:</strong> {edu.description}</p>}
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2>Projects</h2>
          {projects.map((proj, index) => (
            <div key={index}>
              <h3>{proj.heading}</h3> {/* Display Project Heading */}
              <p>{proj.description}</p> {/* Display Project Description */}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TemplateTwo;
