import React, { useContext } from 'react';
import { FormContext } from '../Context/FormContext'; 
import './PreviewPage.css'; 

// Import your different templates
import TemplateOne from '../Components/templates/TemplateOne';
import TemplateTwo from '../Components/templates/TemplateTwo';
import TemplateThree from '../Components/templates/TemplateThree';

// Import html2pdf.js for PDF conversion
import html2pdf from 'html2pdf.js';

const PreviewPage = () => {
  const { formData, selectedTemplate } = useContext(FormContext);

  // Function to handle PDF download
  const handleDownload = () => {
    const element = document.getElementById('resume'); // Target the rendered resume element
    const options = {
      margin:       0.5,
      filename:     'resume.pdf', // The filename for the generated PDF
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { dpi: 192, letterRendering: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save(); // Convert to PDF and trigger the download
  };

  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <TemplateOne formData={formData} />;
      case 'template2':
        return <TemplateTwo formData={formData} />;
      case 'template3':
        return <TemplateThree formData={formData} />;
      default:
        return <div>Please select a template first.</div>;
    }
  };

  return (
    <div className="preview-page">
      <h1>Resume Preview</h1>

      {/* Render the selected template */}
      <div id="resume" className="resume-preview">
        {renderSelectedTemplate()}
      </div>

      {/* Button to download as PDF */}
      <button onClick={handleDownload} className="download-btn">
        Download Resume as PDF
      </button>
    </div>
  );
};

export default PreviewPage;
