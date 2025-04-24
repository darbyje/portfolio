import React from 'react';
import './Home.css';

interface HomeProps {
    onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Welcome to My Portfolio</h1>
                <div className="navigation-links">
                    <button
                        className="nav-button"
                        onClick={() => onNavigate('about')}
                    >
                        About Me
                    </button>
                    <button
                        className="nav-button"
                        onClick={() => onNavigate('portfolio')}
                    >
                        View My Work
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home; 