import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import './ResumeBuilder.css';
import PersonalInfoForm from '../Components/forms/PersonalInfoForm';
import WorkExperienceForm from '../Components/forms/WorkExperienceForm';
import EducationForm from '../Components/forms/EducationForm';
import SkillsForm from '../Components/forms/SkillsForm';
import ProjectsForm from '../Components/forms/ProjectForm';

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const navigate = useNavigate(); 

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleProceedToTemplate = () => {
    navigate('/templates'); 
  };

  return (
    <>
      <Navbar />

      <div className="resume-builder">
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />

        {/* Main Content Area */}
        <div className="resume-content">

          {activeSection === 'personal' && <PersonalInfoForm />}
          {activeSection === 'work' && <WorkExperienceForm />}
          {activeSection === 'education' && <EducationForm />}
          {activeSection === 'skills' && <SkillsForm />}
          {activeSection === 'projects' && <ProjectsForm />}

          {/* Proceed to Template Button */}
          <div className="proceed-to-template">
            <button onClick={handleProceedToTemplate}>
              Proceed to Choose Template
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
