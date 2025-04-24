import React from 'react';
import './Portfolio.css';

interface Project {
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
}

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'A brief description of your first project. You can update this later with your actual project details. ',
        technologies: ['React', 'TypeScript', 'CSS'],
        imageUrl: 'https://dhqbrvplips7x.cloudfront.net/architect/13509-13509/build/assets/Adaptive-G_Digital-Vector-Orange.svg',
        githubUrl: 'https://github.com/yourusername/project1',
        liveUrl: 'https://project1-demo.com',
        detailedDescription: 'A comprehensive description of your first project, including its purpose, goals, and impact.',
        features: [
            'Feature 1: Description of the first key feature',
            'Feature 2: Description of the second key feature',
            'Feature 3: Description of the third key feature'
        ],
        challenges: [
            'Challenge 1: Description of the first challenge faced',
            'Challenge 2: Description of the second challenge faced'
        ],
        solutions: [
            'Solution 1: How you overcame the first challenge',
            'Solution 2: How you overcame the second challenge'
        ]
    },
    {
        title: 'Project 2',
        description: 'A brief description of your second project. You can update this later with your actual project details.',
        technologies: ['Node.js', 'Express', 'MongoDB'],
        imageUrl: 'https://via.placeholder.com/400x300',
        githubUrl: 'https://github.com/yourusername/project2',
        liveUrl: 'https://project2-demo.com',
        detailedDescription: 'A comprehensive description of your second project, including its purpose, goals, and impact.',
        features: [
            'Feature 1: Description of the first key feature',
            'Feature 2: Description of the second key feature',
            'Feature 3: Description of the third key feature'
        ],
        challenges: [
            'Challenge 1: Description of the first challenge faced',
            'Challenge 2: Description of the second challenge faced'
        ],
        solutions: [
            'Solution 1: How you overcame the first challenge',
            'Solution 2: How you overcame the second challenge'
        ]
    },
    {
        title: 'Project 3',
        description: 'A brief description of your third project. You can update this later with your actual project details.',
        technologies: ['Python', 'Django', 'PostgreSQL'],
        imageUrl: 'https://via.placeholder.com/400x300',
        githubUrl: 'https://github.com/yourusername/project3',
        liveUrl: 'https://project3-demo.com',
        detailedDescription: 'A comprehensive description of your third project, including its purpose, goals, and impact.',
        features: [
            'Feature 1: Description of the first key feature',
            'Feature 2: Description of the second key feature',
            'Feature 3: Description of the third key feature'
        ],
        challenges: [
            'Challenge 1: Description of the first challenge faced',
            'Challenge 2: Description of the second challenge faced'
        ],
        solutions: [
            'Solution 1: How you overcame the first challenge',
            'Solution 2: How you overcame the second challenge'
        ]
    }
];

interface PortfolioProps {
    onProjectSelect: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect }) => {
    return (
        <div className="portfolio">
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => onProjectSelect(project)}
                    >
                        <div className="project-image-container">
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio; 