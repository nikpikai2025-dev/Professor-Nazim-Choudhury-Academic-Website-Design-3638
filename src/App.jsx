import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Contact from './pages/Contact';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX } = FiIcons;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      {/* Banner Background */}
      <div className="relative bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 border-b-2 border-purple-200">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="relative flex justify-between items-center h-32 sm:h-36 lg:h-40 w-full">
            {/* Left Side - Circular Profile Image with Absolute Positioning */}
            <div className="absolute bottom-0 z-20" style={{ left: '80px' }}>
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758064216330-profile1.png" 
                alt="Dr. Nazim A. Choudhury" 
                className="object-cover rounded-full border-4 border-white shadow-xl profile-pic-overlap"
                style={{ 
                  width: '130px',
                  height: '130px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(10%)' // 10% below the banner line, 90% above
                }}
              />
            </div>

            {/* Center - Text Block with Better Typography */}
            <div className="flex-1 text-center px-4 sm:px-6 lg:px-8" style={{ marginLeft: '160px', marginRight: '120px' }}>
              <div className="max-w-2xl mx-auto">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900 leading-tight mb-2">
                  Dr. Nazim A. Choudhury
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-purple-700 font-medium mb-1">
                  Assistant Professor of Computer Science
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-purple-600 font-normal">
                  University of Wisconsin–Green Bay
                </p>
              </div>
            </div>

            {/* Right Side - Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 absolute right-6 sm:right-8 lg:right-12 top-1/2 transform -translate-y-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg hover:bg-white/50 hover:shadow-sm ${
                    isActive(item.path)
                      ? 'text-purple-900 bg-white shadow-md border-b-2 border-purple-600'
                      : 'text-purple-700 hover:text-purple-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2 z-30">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 text-purple-700 hover:text-purple-900 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-purple-200 shadow-lg z-40">
            <div className="py-4 space-y-2 px-6 sm:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-purple-900 bg-purple-50 border-l-4 border-purple-600'
                      : 'text-purple-700 hover:text-purple-900 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        {/* Increased padding-top to account for profile image extending below banner */}
        <main className="pt-40 sm:pt-44 lg:pt-48">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;