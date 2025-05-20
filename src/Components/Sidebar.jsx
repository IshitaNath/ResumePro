import React from 'react';
import { FaUser, FaBriefcase, FaBook, FaTools, FaStar } from 'react-icons/fa';
import './Sidebar.css';

// Define all sidebar sections in an array
const sections = [
  { id: "personal", label: "Personal Info", icon: <FaUser className="sidebar-icon" /> },
  { id: "work", label: "Work Experience", icon: <FaBriefcase className="sidebar-icon" /> },
  { id: "education", label: "Education", icon: <FaBook className="sidebar-icon" /> },
  { id: "skills", label: "Skills", icon: <FaTools className="sidebar-icon" /> },
  { id: "projects", label: "Projects", icon: <FaStar className="sidebar-icon" /> },
];

const Sidebar = ({ activeSection, onSectionClick }) => {
  return (
    <div className="sidebar">
      {sections.map((section) => (
        <button
          key={section.id}
          className={activeSection === section.id ? "active" : ""}
          onClick={() => onSectionClick(section.id)}
        >
          {section.icon}
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
