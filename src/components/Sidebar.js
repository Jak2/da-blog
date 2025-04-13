// src/components/Sidebar.js
import React from "react";
import SidebarItem from "./SidebarItem";
import sidebarData from "../data/sidebarData";

const Sidebar = ({ location }) => {
  // Get the current path from location
  const currentPath = location?.pathname || "";

  return (
    <aside className="bg-gray-100 w-64 flex-shrink-0 min-h-screen p-4 border-r border-gray-200">
      <div className="py-2">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Navigation</h2>
        <div className="space-y-1">
          {sidebarData.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              currentPath={currentPath}
              level={0}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;