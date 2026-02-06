import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../components/common/Loader"; 

const Layout = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  // 1. Handle VERY FIRST load of the website
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 2. TRIGGER LOADER ON EVERY NAVIGATION
  useEffect(() => {
    // Skip if it's the very first load (handled by initialLoad)
    if (isInitialLoad) return;

    setIsNavigating(true);
    // This creates the "flash" of the loader between pages
    const timer = setTimeout(() => {
      setIsNavigating(false);
      window.scrollTo(0, 0); // Reset scroll to top on new page
    }, 800); // Adjust speed: 800ms is perfect for luxury feel

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-[#050505] min-h-screen">
      <AnimatePresence mode="wait">
        {/* Show loader if it's the first visit OR if user clicked a link */}
        {(isInitialLoad || isNavigating) && (
          <Loader key="global-loader" />
        )}
      </AnimatePresence>

      {/* Main Content remains hidden while loading for a clean reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavigating || isInitialLoad ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;