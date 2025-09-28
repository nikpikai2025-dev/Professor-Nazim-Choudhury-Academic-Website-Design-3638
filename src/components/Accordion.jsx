import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiChevronUp } = FiIcons;

function AccordionSection({ title, icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-purple-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-purple-50 hover:bg-purple-100 transition-colors flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          {icon && <SafeIcon icon={icon} className="w-5 h-5 text-purple-600" />}
          <h2 className="text-xl font-medium text-purple-900">{title}</h2>
        </div>
        <SafeIcon 
          icon={isOpen ? FiChevronUp : FiChevronDown} 
          className="w-5 h-5 text-purple-600 transition-transform duration-200" 
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-6 bg-white border-t border-purple-100">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionSection;