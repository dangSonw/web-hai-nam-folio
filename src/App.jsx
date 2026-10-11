import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Engineering from './pages/Engineering.jsx';
import Community from './pages/Community.jsx';
import Research from './pages/Research.jsx';
import Hobby from './pages/Hobby.jsx';
import PortfolioHero from './components/PortfolioHero.jsx';
import SidebarNav from './components/SidebarNav.jsx';
import './components/SubpageLayout.css';

function PageTransition({ children, className }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  const home = location.pathname === '/';
  const pageClass = home ? 'home-page' : 'portfolio-page';

  return (
    <main className={`subpage-canvas ${pageClass}`} id="main-content" data-page={location.pathname.slice(1)}>
      <a className="skip-link" href={home ? '#about' : '#projects'}>{home ? 'Skip to About Me' : 'Skip to page content'}</a>
      <div className="subpage-navigation"><SidebarNav /></div>
      <PortfolioHero showNavigation={false} />
      <div className="page-content" style={{ position: 'relative' }}>
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition className="home-body"><Home /></PageTransition>} />
            <Route path="/engineering" element={<PageTransition className="engineering-page"><Engineering /></PageTransition>} />
            <Route path="/community" element={<PageTransition className="community-page"><Community /></PageTransition>} />
            <Route path="/research" element={<PageTransition className="research-page"><Research /></PageTransition>} />
            <Route path="/hobby" element={<PageTransition className="hobby-page"><Hobby /></PageTransition>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
}
