// src/components/Technologies.js
import React from 'react';
import './Technologies.css';

const technologies = [
  { name: 'C++', icon: '/assets/icons/cpp.png' },
  { name: 'C#', icon: '/assets/icons/c-sharp.png' },
  { name: '.Net', icon: '/assets/icons/net.png' },
  { name: 'Python', icon: '/assets/icons/python.png' },
  { name: 'Django', icon: '/assets/icons/django.png' },
  { name: 'SQLServer', icon: '/assets/icons/sql-server.png' },
  { name: 'Git', icon: '/assets/icons/git.png' },
];

const Technologies = () => (
  <div className="technologies">
    <h2>Tecnologías que Uso</h2>
    <div className="tech-list">
      {technologies.map((tech, index) => (
        <div key={index} className="tech-item">
          <img src={tech.icon} alt={`${tech.name} icon`} />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Technologies;
