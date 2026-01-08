import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-100 mt-auto flex justify-around items-center border-t border-gray-300 w-full">
      <NavLink 
        to="/bossHouse" 
        className={({ isActive }) => 
          `mx-5 px-3 py-2 text-lg font-bold block transition-colors duration-200 ${isActive ? 'text-blue-600 underline' : 'text-gray-900 no-underline hover:text-blue-500'}`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/bossHouse/about" 
        className={({ isActive }) => 
          `mx-5 px-3 py-2 text-lg font-bold block transition-colors duration-200 ${isActive ? 'text-blue-600 underline' : 'text-gray-900 no-underline hover:text-blue-500'}`
        }
      >
        About
      </NavLink>
      <NavLink 
        to="/bossHouse/tools" 
        className={({ isActive }) => 
          `mx-5 px-5 py-3 text-xl font-bold block rounded-md transition-all duration-200 ${isActive ? 'text-red-600 underline bg-yellow-300 hover:bg-yellow-400' : 'text-green-600 bg-yellow-200 hover:bg-yellow-300 no-underline'}`
        }
      >
        Tools
      </NavLink>
    </nav>
  );
};

export default NavBar;