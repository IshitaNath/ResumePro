import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    workExperience: [],
    education: [],
    skills: [],
    projects: [],
  });

  const [selectedTemplate, setSelectedTemplate] = useState(''); 

  return (
    <FormContext.Provider value={{ 
      formData, 
      setFormData, 
      selectedTemplate,      
      setSelectedTemplate     
    }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };

