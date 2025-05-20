// src/pages/TemplatePage.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../Context/FormContext'; 
import './TemplatePage.css';

const templates = [
  {
    id: 'template1',
    name: 'Classic',
    image: '/assets/template1.png',
  },
  {
    id: 'template2',
    name: 'Modern',
    image: '/assets/template2.png',
  },
  {
    id: 'template3',
    name: 'Creative',
    image: '/assets/template3.png',
  },
];

const TemplatePage = () => {
  const { setSelectedTemplate } = useContext(FormContext);
  const [selectedId, setSelectedId] = useState('');
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handleProceed = () => {
    if (selectedId) {
      setSelectedTemplate(selectedId);
      navigate('/preview');
    }
  };

  return (
    <div className="template-page">
      <h1>Choose Your Resume Template</h1>
      <div className="template-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${selectedId === template.id ? 'selected' : ''}`}
            onClick={() => handleSelect(template.id)}
          >
            <img src={template.image} alt={template.name} />
            <h3>{template.name}</h3>
          </div>
        ))}
      </div>

      <button 
        className="proceed-button" 
        onClick={handleProceed}
        disabled={!selectedId}
      >
        Proceed to Preview
      </button>
    </div>
  );
};

export default TemplatePage;
