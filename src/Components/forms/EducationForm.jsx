import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/FormContext';
import './EducationForm.css'; // Don't forget to import CSS!

const EducationForm = () => {
  const { formData, setFormData } = useContext(FormContext);

  const [localData, setLocalData] = useState([
    ...(formData.education || [])
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...localData];
    updatedData[index][name] = value;
    setLocalData(updatedData);
  };

  const handleAddEducation = () => {
    setLocalData([
      ...localData,
      { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedData = [...localData];
    updatedData.splice(index, 1);
    setLocalData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      education: localData,
    }));
    alert('✅ Education Details Saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>Education Details</h2>

      {localData.map((education, index) => (
        <div key={index} className="education-block">
          <label>
            Institution Name:
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            Field of Study:
            <input
              type="text"
              name="fieldOfStudy"
              value={education.fieldOfStudy}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            Start Date:
            <input
              type="month"
              name="startDate"
              value={education.startDate}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>

          <label>
            End Date:
            <input
              type="month"
              name="endDate"
              value={education.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            Description / Achievements:
            <textarea
              name="description"
              value={education.description}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {/* ❌ Remove Button */}
          <button
            type="button"
            className="remove-button"
            onClick={() => handleRemoveEducation(index)}
          >
            Remove This Education
          </button>

          <hr />
        </div>
      ))}

      <button type="button" onClick={handleAddEducation}>
         Add Another Education
      </button>

      <button type="submit">Save</button>
    </form>
  );
};

export default EducationForm;
