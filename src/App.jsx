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
  <div className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 border-b-2 border-purple-200">
    {/* FLEX CONTAINER for all elements */}
    <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between w-full px-4 sm:px-8 lg:px-16 pt-8 lg:pt-10 pb-6 lg:pb-8 relative">
      {/* Profile picture */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 flex justify-center md:block">
        <img
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758064216330-profile1.png"
          alt="Dr. Nazim A. Choudhury"
          className="object-cover rounded-full border-4 border-white shadow-xl w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
        />
      </div>
      {/* Title block */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900 leading-tight mb-1">
          Dr. Nazim A. Choudhury
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-purple-700 font-medium mb-0">
          Assistant Professor of Computer Science
        </p>
        <p className="text-xs sm:text-sm lg:text-base text-purple-600 font-normal">
          University of Wisconsin–Green Bay
        </p>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex flex-row items-center space-x-3 lg:space-x-8 mt-4 md:mt-0 ml-0 md:ml-12 lg:ml-24">
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
      <div className="md:hidden mt-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 text-purple-700 hover:text-purple-900 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
        </button>
      </div>
    </div>
    {/* Mobile Navigation Dropdown */}
    {isMenuOpen && (
      <div className="md:hidden w-full bg-white border-t border-purple-200 shadow-lg z-40">
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