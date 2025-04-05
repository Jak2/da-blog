import { useState } from 'react';

function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState({
    gettingStarted: true,
    tutorials: false,
    compatibility: false
  });

  const toggleMenu = (menu) => {
    setExpandedMenus({
      ...expandedMenus,
      [menu]: !expandedMenus[menu]
    });
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:block overflow-y-auto">
      <div className="px-4 py-5">
        <div className="mb-4">
          <button className="px-3 py-1 text-xs font-medium text-white bg-orange-500 rounded-full">
            What's New
          </button>
        </div>
        
        <nav className="space-y-1">
          <div className="py-2">
            <h2 className="text-gray-500 uppercase text-xs font-semibold tracking-wide mb-2">
              GETTING STARTED
            </h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="block px-3 py-1 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Community vs. Enterprise
                </a>
              </li>
            </ul>
          </div>
          
          <div className="py-2">
            <button 
              onClick={() => toggleMenu('tutorials')}
              className="flex items-center justify-between w-full px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <span className="font-medium">Tutorials</span>
              <svg 
                className={`w-4 h-4 transition-transform ${expandedMenus.tutorials ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedMenus.tutorials && (
              <ul className="mt-1 pl-6 space-y-1">
                <li>
                  <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Creating a Basic Grid
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Testing
                  </a>
                </li>
              </ul>
            )}
          </div>
          
          <div className="py-2">
            <button 
              onClick={() => toggleMenu('compatibility')}
              className="flex items-center justify-between w-full px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <span className="font-medium">Compatibility & Security</span>
              <svg 
                className={`w-4 h-4 transition-transform ${expandedMenus.compatibility ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedMenus.compatibility && (
              <ul className="mt-1 pl-6 space-y-1">
                <li>
                  <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Browser Support
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Security Practices
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;