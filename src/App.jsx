import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX } = FiIcons;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/teaching', label: 'Teaching' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50">
      {/* Mobile Profile Picture */}
      <div className="md:hidden flex justify-center py-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border-b-2 border-gray-300">
        <img 
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759468272401-tight_circular_crop.png" 
          alt="Dr. Nazim A. Choudhury" 
          className="w-24 h-24 rounded-full shadow-xl" 
        />
      </div>

      {/* Floating Profile Picture - Desktop/Tablet Only */}
      <div className="hidden md:block absolute left-8 top-2 z-20">
        <img 
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759468272401-tight_circular_crop.png" 
          alt="Dr. Nazim A. Choudhury" 
          className="w-40 h-40 lg:w-48 lg:h-48 rounded-full border-2 border-white shadow-xl" 
        />
      </div>

      {/* Compact Banner - Only Title + Navigation */}
      <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 md:border-b-2 md:border-gray-300 h-20 md:h-28 lg:h-32">
        <div className="flex justify-between items-center h-full px-6 lg:px-12">
          {/* Title Block - With proper left margin for profile pic */}
          <div className="flex-1 text-center mx-4 md:ml-48 md:mr-4 lg:ml-56">
            <h1 className="text-xl lg:text-2xl font-bold text-black leading-tight">
              Dr. Nazim A. Choudhury
            </h1>
            <p className="text-sm lg:text-base text-gray-700 font-medium">
              Associate Professor of Computer Science
            </p>
            <p className="text-xs lg:text-sm text-gray-600">
              University of Wisconsin–Green Bay
            </p>
          </div>

          {/* Navigation Tabs - Right */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`px-3 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/50 ${
                  isActive(item.path) 
                    ? 'text-black bg-white shadow-md border-b-2 border-gray-600' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-700 hover:text-black bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-300 shadow-lg">
          <div className="py-3 space-y-1 px-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'text-black bg-gray-50 border-l-4 border-gray-600' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;