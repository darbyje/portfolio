import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ProjectArticle from './components/ProjectArticle';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/shop/Shop';
import { CartProvider } from './context/CartContext';
import usePageTracking from './hooks/usePageTracking';

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

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  usePageTracking();

  const handleProjectSelect = (project: Project) => {
    navigate(`/portfolio/${encodeURIComponent(project.title)}`, { state: { project } });
  };

  const getPageTitle = () => {
    const project = location.state?.project as Project | undefined;
    if (project) {
      return project.title;
    }
    switch (location.pathname) {
      case '/':
        return 'Welcome';
      case '/about':
        return 'Jeff Darby';
      case '/portfolio':
        return 'Portfolio';
      case '/shop':
        return 'Digital Products';
      default:
        return 'Welcome';
    }
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.split('/')[1] || 'home';
  };

  return (
    <div className="App">
      <Header
        title={getPageTitle()}
        isHomePage={location.pathname === '/'}
      />
      <Breadcrumbs
        currentPage={getCurrentPage()}
        selectedProject={location.state?.project?.title || null}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio onProjectSelect={handleProjectSelect} />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/portfolio/:projectTitle"
            element={
              location.state?.project ? (
                <ProjectArticle project={location.state.project} />
              ) : (
                <div>Project not found</div>
              )
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
