import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

interface BreadcrumbsProps {
    currentPage: string;
    selectedProject?: string | null;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, selectedProject }) => {
    return (
        <nav className="breadcrumbs">
            <ol>
                <li>
                    <Link to="/" className="breadcrumb-link">
                        Home
                    </Link>
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
                                <Link to="/portfolio" className="breadcrumb-link">
                                    Portfolio
                                </Link>
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