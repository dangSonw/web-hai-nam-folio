import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Engineering from './pages/Engineering.jsx';
import Community from './pages/Community.jsx';
import Research from './pages/Research.jsx';
import Hobby from './pages/Hobby.jsx';

function PageTransition({ children }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, position: 'absolute', top: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.4, 0, 0.2, 1] }}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence initial={false} mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/engineering" element={<PageTransition><Engineering /></PageTransition>} />
          <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
          <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
          <Route path="/hobby" element={<PageTransition><Hobby /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
