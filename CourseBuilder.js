// CourseBuilder.js
import React, { useState } from 'react';
import Module from './Module';
import './CourseBuilder.css'; // Import the CSS file

const CourseBuilder = () => {
  const [modules, setModules] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('default-background.jpg'); // Default background image

  const addModule = () => {
    const newModule = {
      id: modules.length + 1,
      name: `Module ${modules.length + 1}`,
      resources: []
    };
    setModules([...modules, newModule]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBackgroundImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="course-builder" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Course Builder</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={addModule}>Add Module</button>
      <div className="modules-container">
        {modules.map(module => (
          <Module key={module.id} module={module} modules={modules} setModules={setModules} />
        ))}
      </div>
    </div>
  );
};

export default CourseBuilder;




