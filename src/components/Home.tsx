import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Welcome to My Portfolio</h1>
                <div className="navigation-links">
                    <Link
                        to="/about"
                        className="nav-button"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/portfolio"
                        className="nav-button"
                    >
                        View My Work
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home; 