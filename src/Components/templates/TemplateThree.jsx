import React from 'react';
import './TemplateStyles.css';

const TemplateThree = ({ formData }) => {
  const {
    personalInfo,
    workExperience = [],
    education = [],
    skills = {},
    projects = []
  } = formData;

  return (
    <div className="template-three">
      <div className="header">
        <h1>{personalInfo?.fullName || 'Your Name'}</h1>
        <p>{personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}</p>
      </div>

      <div className="section-group">
        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          {projects.map((proj, index) => (
            <div key={index}>
              <h3>{proj.heading}</h3> {/* Display Project Heading */}
              <p>{proj.description}</p> {/* Display Project Description */}
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2>Skills</h2>
          <p><strong>Technical Skills:</strong> {skills.technicalSkills?.join(', ')}</p> {/* Display technical skills */}
          <p><strong>Soft Skills:</strong> {skills.softSkills?.join(', ')}</p> {/* Display soft skills */}
        </section>

        {/* Work Experience Section */}
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

        {/* Education Section */}
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
      </div>
    </div>
  );
};

export default TemplateThree;
