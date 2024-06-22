// Module.js
import React, { useState } from 'react';
import Resource from './Resource';
import './Module.css'; // Import the CSS file

const Module = ({ module, modules, setModules }) => {
  const [moduleName, setModuleName] = useState(module.name);

  const handleModuleNameChange = (e) => {
    setModuleName(e.target.value);
    const updatedModules = modules.map(mod =>
      mod.id === module.id ? { ...mod, name: e.target.value } : mod
    );
    setModules(updatedModules);
  };

  const deleteModule = () => {
    const updatedModules = modules.filter(mod => mod.id !== module.id);
    setModules(updatedModules);
  };

  const addResource = () => {
    const newResource = {
      id: Date.now(),
      name: `Resource ${module.resources.length + 1}`,
      type: 'link', // Default type as 'link'
      url: ''
    };
    const updatedModule = {
      ...module,
      resources: [...module.resources, newResource]
    };
    const updatedModules = modules.map(mod =>
      mod.id === module.id ? updatedModule : mod
    );
    setModules(updatedModules);
  };

  return (
    <div className="module">
      <input type="text" value={moduleName} onChange={handleModuleNameChange} />
      <button onClick={deleteModule}>Delete Module</button>
      <button onClick={addResource}>Add Resource</button>
      <div className="resources-container">
        {module.resources.map(resource => (
          <Resource
            key={resource.id}
            resource={resource}
            module={module}
            modules={modules}
            setModules={setModules}
          />
        ))}
      </div>
    </div>
  );
};

export default Module;



