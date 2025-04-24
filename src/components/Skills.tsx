import React from 'react';
import './Skills.css';

interface SkillCategory {
    category: string;
    skills: string[];
}

const skillsData: SkillCategory[] = [
    {
        category: 'Frontend',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux']
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express', 'Python', 'Java', 'SQL', 'MongoDB']
    },
    {
        category: 'Tools & Technologies',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Terraform']
    }
];

const Skills: React.FC = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skillsData.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3>{category.category}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills; 