import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'LAST STAND',
    description: 'Descripción del Proyecto 1',
    image: '/assets/images/last.png',
    video: '/assets/videos/lastStandVideo.mp4',
  },
  {
    title: 'Dibu vs Kolo Muani',
    description: 'Descripción del Proyecto 2',
    image: '/assets/images/DIBUVSKOLO1.png',
    video: '/assets/videos/atajada.mp4',
  },
  {
    title: 'HOME BANKING "ITBANK" ',
    description: 'Descripción del Proyecto 1',
    image: '/assets/images/logo-itbank.png',
    video: '/assets/videos/videoItbank.mp4',
  },
  // Agrega más proyectos según sea necesario
];

const ProjectList = () => (
  <div className="project-list">
    {projects.map((project, index) => (
      <Project
        key={index}
        title={project.title}
        description={project.description}
        image={project.image}
        video={project.video}
      />
    ))}
  </div>
);

export default ProjectList;
