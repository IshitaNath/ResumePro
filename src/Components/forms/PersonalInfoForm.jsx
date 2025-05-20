import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/FormContext';
import './PersonalInfoForm.css';

const PersonalInfoForm = () => {
  const { formData, setFormData } = useContext(FormContext);

  const [localData, setLocalData] = useState(formData.personalInfo || {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      personalInfo: localData,
    }));
    alert('✅ Personal Info Saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>Personal Information</h2>

      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={localData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={localData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={localData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={localData.address}
          onChange={handleChange}
        />
      </label>

      <label>
        Summary:
        <textarea
          name="summary"
          value={localData.summary}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default PersonalInfoForm;
