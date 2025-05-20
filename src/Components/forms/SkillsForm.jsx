import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/FormContext';
import './SkillsForm.css'; // Small CSS for styling

const SkillsForm = () => {
  const { formData, setFormData } = useContext(FormContext);

  const [technicalInput, setTechnicalInput] = useState(
    (formData.skills?.technicalSkills || []).join(', ')
  );
  const [softInput, setSoftInput] = useState(
    (formData.skills?.softSkills || []).join(', ')
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const technicalSkills = technicalInput.split(',').map(skill => skill.trim()).filter(Boolean);
    const softSkills = softInput.split(',').map(skill => skill.trim()).filter(Boolean);

    setFormData((prev) => ({
      ...prev,
      skills: {
        technicalSkills,
        softSkills,
      },
    }));

    alert('✅ Skills Saved Successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>Skills</h2>

      <label>
        Technical Skills (comma separated):
        <input
          type="text"
          value={technicalInput}
          onChange={(e) => setTechnicalInput(e.target.value)}
          placeholder="e.g. HTML, CSS, JavaScript, React"
          required
        />
      </label>

      <label>
        Soft Skills (comma separated):
        <input
          type="text"
          value={softInput}
          onChange={(e) => setSoftInput(e.target.value)}
          placeholder="e.g. Teamwork, Communication, Problem-Solving"
          required
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default SkillsForm;
