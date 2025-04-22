import React from 'react';
import './Experience.css';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: 'Senior Software Engineer',
        company: 'Tech Company Inc.',
        period: '2020 - Present',
        description: [
            'Led development of scalable web applications using React and Node.js',
            'Implemented CI/CD pipelines reducing deployment time by 40%',
            'Mentored junior developers and conducted code reviews'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Startup Solutions',
        period: '2018 - 2020',
        description: [
            'Developed and maintained front-end applications using React',
            'Collaborated with UX team to implement responsive designs',
            'Optimized application performance by 30%'
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section className="experience">
            <h2>Work Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.title}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="period">{exp.period}</p>
                        <ul>
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience; 