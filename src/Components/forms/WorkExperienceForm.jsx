import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/FormContext';
import './WorkExperienceForm.css'; // Don't forget CSS!

const WorkExperienceForm = () => {
  const { formData, setFormData } = useContext(FormContext);

  const [localData, setLocalData] = useState([
    ...(formData.workExperience || [])
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...localData];
    updatedData[index][name] = value;
    setLocalData(updatedData);
  };

  const handleAddExperience = () => {
    setLocalData([
      ...localData,
      { company: '', position: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedData = [...localData];
    updatedData.splice(index, 1); // Remove 1 item at that index
    setLocalData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      workExperience: localData,
    }));
    alert('✅ Work Experience Saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>Work Experience</h2>

      {localData.map((experience, index) => (
        <div key={index} className="experience-block">
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              name="position"
              value={experience.position}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            Start Date:
            <input
              type="month"
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            End Date:
            <input
              type="month"
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={experience.description}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {/* 🚀 Remove Button */}
          <button type="button" className="remove-button"
            onClick={() => handleRemoveExperience(index)}
          >
             Remove This Experience
          </button>

          <hr />
        </div>
      ))}

      <button type="button" onClick={handleAddExperience}>
         Add Another Experience
      </button>

      <button type="submit">Save</button>
    </form>
  );
};

export default WorkExperienceForm;
