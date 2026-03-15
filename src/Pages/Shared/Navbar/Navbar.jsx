import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable SVG Icon 
  const Icon = ({ path, className = "w-6 h-6", badge }) => (
    <div className="relative">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
      {badge !== undefined && (
        <span className="absolute -top-1 -right-2 bg-[#00a191] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
          {badge}
        </span>
      )}
    </div>
  );

  // SVG Paths
  const paths = {
    search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    heart: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    cart: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    menu: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    close: "M6 18 18 6M6 6l12 12",
    chevron: "m19.5 8.25-7.5 7.5-7.5-7.5"
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-[#00a191] rounded-full flex items-center justify-center text-white font-bold text-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">PharmaCare</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl border-2 border-[#00a191] rounded overflow-hidden">
          <button className="flex items-center px-4 bg-gray-50 text-gray-600 text-sm border-r">
            All Categories
            <Icon path={paths.chevron} className="w-3 h-3 ml-2" />
          </button>
          <input type="text" placeholder="Search product here..." className="flex-1 px-4 outline-none text-sm" />
          <button className="bg-[#00a191] p-3 text-white">
            <Icon path={paths.search} />
          </button>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right leading-tight">
            <p className="text-[10px] text-gray-400 uppercase font-semibold">Need Help?</p>
            <p className="text-[#00a191] font-bold">+8801XXXXXXXX</p>
          </div>
          <div className="flex gap-4 text-gray-600">
            <Icon path={paths.user} />
            <Icon path={paths.heart} badge={0} />
            <Icon path={paths.cart} badge={0} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Icon path={isOpen ? paths.close : paths.menu} className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4 space-y-4 border-t animate-in fade-in duration-200">
          <div className="flex border rounded overflow-hidden">
            <input type="text" className="w-full px-3 py-2 text-sm" placeholder="Search..." />
            <button className="bg-[#00a191] px-4 text-white"><Icon path={paths.search} className="w-5 h-5" /></button>
          </div>
          <div className="flex justify-around py-2">
            <Icon path={paths.user} />
            <Icon path={paths.heart} badge={0} />
            <Icon path={paths.cart} badge={0} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;