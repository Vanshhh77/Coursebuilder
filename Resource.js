// Resource.js
import React, { useState } from 'react';
import './Resource.css'; // Import the CSS file

const Resource = ({ resource, module, modules, setModules }) => {
  const [resourceType, setResourceType] = useState(resource.type); // 'file' or 'link'
  const [resourceName, setResourceName] = useState(resource.name);
  const [resourceUrl, setResourceUrl] = useState(resource.url);

  const handleResourceNameChange = (e) => {
    setResourceName(e.target.value);
    updateResource({ name: e.target.value });
  };

  const handleResourceUrlChange = (e) => {
    setResourceUrl(e.target.value);
    updateResource({ url: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResourceName(file.name);
      setResourceUrl(URL.createObjectURL(file));
      updateResource({ name: file.name, url: URL.createObjectURL(file), type: 'file' });
    }
  };

  const updateResource = (updatedFields) => {
    const updatedModule = {
      ...module,
      resources: module.resources.map(res =>
        res.id === resource.id ? { ...res, ...updatedFields } : res
      )
    };
    const updatedModules = modules.map(mod =>
      mod.id === module.id ? updatedModule : mod
    );
    setModules(updatedModules);
  };

  const deleteResource = () => {
    const updatedModule = {
      ...module,
      resources: module.resources.filter(res => res.id !== resource.id)
    };
    const updatedModules = modules.map(mod =>
      mod.id === module.id ? updatedModule : mod
    );
    setModules(updatedModules);
  };

  return (
    <div className="resource">
      <input type="text" value={resourceName} onChange={handleResourceNameChange} />
      {resourceType === 'file' ? (
        <div>
          <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} />
          {resourceUrl && <a href={resourceUrl} target="_blank" rel="noopener noreferrer">View File</a>}
        </div>
      ) : (
        <div>
          <input type="text" value={resourceUrl} onChange={handleResourceUrlChange} />
        </div>
      )}
      <button onClick={deleteResource}>Delete Resource</button>
      <button onClick={() => setResourceType('link')}>Set as Link</button>
      <button onClick={() => setResourceType('file')}>Set as File</button>
    </div>
  );
};

export default Resource;






