import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import ProjectArticle from './components/ProjectArticle';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './components/Home';
import About from './components/About';

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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const getPageTitle = () => {
    if (selectedProject) {
      return selectedProject.title;
    }
    switch (currentPage) {
      case 'home':
        return 'Welcome';
      case 'about':
        return 'Jeff Darby';
      case 'portfolio':
        return 'Portfolio';
      default:
        return 'Welcome';
    }
  };

  return (
    <div className="App">
      <Menu onNavigate={setCurrentPage} />
      <Header
        title={getPageTitle()}
        isHomePage={currentPage === 'home'}
      />
      <Breadcrumbs
        currentPage={currentPage}
        selectedProject={selectedProject?.title || null}
        onNavigate={setCurrentPage}
      />
      <main>
        {selectedProject ? (
          <ProjectArticle project={selectedProject} />
        ) : currentPage === 'home' ? (
          <Home onNavigate={handleNavigate} />
        ) : currentPage === 'about' ? (
          <About />
        ) : (
          <Portfolio onProjectSelect={handleProjectSelect} />
        )}
      </main>
    </div>
  );
}

export default App;
