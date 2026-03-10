import React from 'react';
import { toolsList } from '../config/servicePricing';

const Tools = () => {
  // Duplicate tools for seamless infinite loop
  const allTools = [...toolsList, ...toolsList];

  const handleImageError = (e, toolName) => {
    e.target.src = `https://via.placeholder.com/100/0cf/000?text=${toolName.split(' ')[0]}`;
  };

  return (
    <section className="tools" id="tools">
      <h2 className="heading">Our <span>Clients</span></h2>
      <div className="tools-container">
        <div className="tools-track">
          {allTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="tool-item"
              data-tool={tool.name.toLowerCase()}
              title={tool.name}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="tool-logo"
                onError={(e) => handleImageError(e, tool.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

