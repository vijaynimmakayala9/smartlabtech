// src/pages/NotFound.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle, Compass } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found | Smart Labtech';
  }, []);

  return (
    <>
      <FontLink />
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50 flex items-center justify-center px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 15 }}
            className="relative"
          >
            <div className="text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none tracking-tighter select-none"
                 style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                4
              </span>
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mx-2 sm:mx-4">
                0
              </span>
              <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                4
              </span>
            </div>
            
            {/* Decorative circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-r from-blue-200/30 to-sky-200/30 blur-3xl -z-10"
            />
          </motion.div>

          {/* Icon and Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center">
                <Compass size={40} className="text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Oops! Page Not Found
            </h1>
            
            <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto mb-8"
               style={{ fontFamily: "'Outfit', sans-serif" }}>
              The page you are looking for might have been moved, deleted, 
              or never existed in the first place.
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-blue-200" />
              <AlertTriangle size={14} className="text-blue-400" />
              <div className="w-12 h-px bg-blue-200" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  to="/"
                  className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Home size={16} />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-blue-200 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <ArrowLeft size={16} />
                  Go Back
                </button>
              </motion.div>
            </div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-blue-100"
            >
              <p className="text-slate-400 text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Need help? <a href="mailto:info@smartlabtech.net" className="text-blue-600 hover:text-blue-700 transition-colors">Contact Support</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;