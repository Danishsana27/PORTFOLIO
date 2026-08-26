import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-base">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {isHome && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {isHome && (
        <>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}
