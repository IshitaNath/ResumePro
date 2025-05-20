// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ResumeBuilder from './pages/ResumeBuilder';
import { FormProvider } from './Context/FormContext'; 
import TemplatePage from './pages/TemplatePage'; 
import PreviewPage from './pages/PreviewPage';
function App() {
  return (
    <Router>
      <FormProvider> 
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/builder" element={<ResumeBuilder />} />
              <Route path="/templates" element={<TemplatePage />} /> 
              <Route path="/preview" element={<PreviewPage />} /> 
            </Routes>
          </main>
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;
