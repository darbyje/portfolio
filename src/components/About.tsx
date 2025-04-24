import React from 'react';
import './About.css';
import Experience from './Experience';
import Skills from './Skills';

const About: React.FC = () => {
    return (
        <div className="about">
            <Experience />
            <Skills />
        </div>
    );
};

export default About; 