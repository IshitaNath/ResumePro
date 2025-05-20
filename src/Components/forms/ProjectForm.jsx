import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/FormContext';
import './ProjectForm.css'; // Don't forget CSS!

const ProjectsForm = () => {
  const { formData, setFormData } = useContext(FormContext);

  const [localData, setLocalData] = useState([
    ...(formData.projects || [])
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...localData];
    updatedProjects[index][name] = value;
    setLocalData(updatedProjects);
  };

  const handleAddProject = () => {
    setLocalData([
      ...localData,
      { heading: '', description: '' }
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = [...localData];
    updatedProjects.splice(index, 1);
    setLocalData(updatedProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      projects: localData,
    }));
    alert('✅ Project Details Saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>Projects</h2>

      {localData.map((project, index) => (
        <div key={index} className="project-block">
          <label>
            Project Heading:
            <input
              type="text"
              name="heading"
              value={project.heading}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          {/* ❌ Remove Button */}
          <button
            type="button"
            className="remove-button"
            onClick={() => handleRemoveProject(index)}
          >
            Remove This Project
          </button>

          <hr />
        </div>
      ))}

      <button type="button" onClick={handleAddProject}>
        Add Another Project
      </button>

      <button type="submit">Save</button>
    </form>
  );
};

export default ProjectsForm;
