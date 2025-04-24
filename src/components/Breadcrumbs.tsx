import React from 'react';
import './Breadcrumbs.css';

interface BreadcrumbsProps {
    currentPage: string;
    selectedProject?: string | null;
    onNavigate: (page: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, selectedProject, onNavigate }) => {
    return (
        <nav className="breadcrumbs">
            <ol>
                <li>
                    <button onClick={() => onNavigate('home')} className="breadcrumb-link">
                        Home
                    </button>
                </li>
                {currentPage === 'about' && (
                    <li>
                        <span className="separator">/</span>
                        <span className="current">About</span>
                    </li>
                )}
                {currentPage === 'portfolio' && (
                    <li>
                        <span className="separator">/</span>
                        {selectedProject ? (
                            <>
                                <button onClick={() => onNavigate('portfolio')} className="breadcrumb-link">
                                    Portfolio
                                </button>
                                <span className="separator">/</span>
                                <span className="current">{selectedProject}</span>
                            </>
                        ) : (
                            <span className="current">Portfolio</span>
                        )}
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumbs; 