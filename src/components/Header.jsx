import { useState } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    return isActive 
      ? "font-bold text-red-500 transition-colors text-lg"
      : "text-teal-600 hover:text-red-500 transition-colors text-lg";
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="font-bold text-3xl select-none">
          <span className="text-[#4ade80]">Smart Meal </span>
          <span className="text-[#fb923c]">Planner</span>
        </h1>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={getNavLinkClass}>
            Login
          </NavLink>
          <NavLink to="/tentang" className={getNavLinkClass}>
            Tentang Kami
          </NavLink>
        </nav>

        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t p-4 flex flex-col space-y-3 z-50">
          <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
            Login
          </NavLink>
          <NavLink to="/tentang" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
            Tentang Kami
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;