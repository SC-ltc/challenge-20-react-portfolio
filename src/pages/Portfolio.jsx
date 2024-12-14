import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  const projects = [
    {
      title: 'Employee Payroll Tracker',
      description: 'Module 3 Challenge',
      link: 'https://sc-ltc.github.io/challenge-three-payroll/'
    },
    {
      title: 'Blog',
      description: 'A simple blog application created for the Module 4 challenge',
      link: 'sc-ltc.github.io/challenge-four-blog/'
    },
    {
      title: 'Note Taker',
      description: 'A note taking application that uses an Express.js back-end',
      link: 'https://github.com/SC-ltc/challenge-11-note-taker'
    },
  ];

  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};