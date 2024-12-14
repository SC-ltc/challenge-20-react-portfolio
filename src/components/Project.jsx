import React from 'react';

export default function Project({ title, description, image, link }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};