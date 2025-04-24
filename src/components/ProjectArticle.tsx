import React from 'react';
import './ProjectArticle.css';

interface ProjectArticleProps {
    project: {
        title: string;
        description: string;
        technologies: string[];
        imageUrl: string;
        githubUrl?: string;
        liveUrl?: string;
        detailedDescription: string;
        features: string[];
        challenges: string[];
        solutions: string[];
    };
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({ project }) => {
    return (
        <article className="project-article">
            <header className="project-header">
                <h1>{project.title}</h1>
                <div className="project-meta">
                    <div className="technologies">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-button">
                                View on GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-button">
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="project-content">
                <img src={project.imageUrl} alt={project.title} className="project-hero" />

                <section className="project-section">
                    <h2>Overview</h2>
                    <p>{project.detailedDescription}</p>
                </section>

                <section className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="project-section">
                    <h2>Challenges & Solutions</h2>
                    <div className="challenges-solutions">
                        <div className="challenges">
                            <h3>Challenges</h3>
                            <ul>
                                {project.challenges.map((challenge, i) => (
                                    <li key={i}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="solutions">
                            <h3>Solutions</h3>
                            <ul>
                                {project.solutions.map((solution, i) => (
                                    <li key={i}>{solution}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default ProjectArticle; 