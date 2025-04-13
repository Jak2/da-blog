// src/components/SidebarItem.js
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const SidebarItem = ({ item, currentPath, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  
  // Determine if this item or any of its children is active
  const isActive = currentPath === item.path;
  const isChildActive = hasChildren && item.children.some(
    child => currentPath.includes(child.path) || 
    (child.children && child.children.some(grandchild => currentPath.includes(grandchild.path)))
  );

  // Auto-expand if this item or its children are active
  useEffect(() => {
    if (isActive || isChildActive) {
      setIsOpen(true);
    }
  }, [isActive, isChildActive]);

  // Calculate padding based on nesting level
  const paddingLeft = `${level * 0.75 + 0.75}rem`;

  return (
    <div className="sidebar-item">
      <div
        className={`flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition-colors ${
          isActive ? "bg-blue-500 text-white" : 
          isChildActive ? "bg-blue-100 text-blue-800" : "hover:bg-gray-200"
        }`}
        style={{ paddingLeft }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <Link
          to={item.path}
          className="flex-grow"
          onClick={(e) => hasChildren && e.preventDefault()}
        >
          {item.title}
        </Link>
        {hasChildren && (
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>

      {/* Render children if they exist and the item is open */}
      {hasChildren && isOpen && (
        <div className="ml-2">
          {item.children.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              currentPath={currentPath}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;