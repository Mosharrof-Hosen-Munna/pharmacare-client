import React, { useState } from 'react';
import pharmacareLogo from '../../../assets/pharmacare1.png';
import { NavLink } from 'react-router';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [login,setLogin] = useState(false);

  // Reusable SVG Icon Component
  const Icon = ({ path, className = "w-6 h-6", badge }) => (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
      {badge !== undefined && (
        <span className="absolute -top-1 -right-2 bg-[#b400dd] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
          {badge}
        </span>
      )}
    </div>
  );

  const paths = {
    search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    heart: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    cart: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    menu: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    close: "M6 18 18 6M6 6l12 12"
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-8">
        
        {/* Logo */}
            <div className="flex items-center shrink-0">
          <img cl src={pharmacareLogo} alt="PharmaCare Logo" className="w-12 " />
           <span className="text-2xl font-bold text-[#b400dd]">Medinexa</span>
        </div>

        {/* 2. Left NavLinks & Search Area (Flex-1 grows to fill space) */}
        <div className="hidden md:flex items-center flex-1 gap-10">
          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} className="text-gray-600 font-medium hover:text-[#b400dd] whitespace-nowrap">
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Search Input (Next to links) */}
          <div className="relative ml-auto w-full max-w-xs group">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-[#b400dd] transition-all outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#b400dd]">
              <Icon path={paths.search} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3. Right Icons & Mobile Toggle */}
        <div className="flex items-center gap-5 text-gray-600">
          <div className="hidden lg:flex flex-col text-right leading-tight mr-2">
            <p className="text-[10px] text-gray-400 uppercase font-semibold">Help</p>
            <p className="text-[#b400dd] font-bold text-xs whitespace-nowrap">+8801XXXXXXXX</p>
          </div>
          
          {login &&<><button className="hover:text-[#b400dd] transition-colors"><Icon path={paths.user} /></button>
          <button className="hover:text-[#b400dd] transition-colors"><Icon path={paths.heart} badge={0} /></button>
          <button className="hover:text-[#b400dd] transition-colors"><Icon path={paths.cart} badge={0} /></button>
            </>}
            {!login &&<>
            <button className="hover:text-white bg-[#b400dd] text-white p-2 font-semibold hover:bg-black transition-duration-300 px-6  cursor-pointer uppercase rounded-3xl transition-colors">Login</button>
            </>}

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Icon path={isOpen ? paths.close : paths.menu} className="w-8 h-8 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.href} className="block font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              {link.name}
            </NavLink>
          ))}
          <div className="relative border rounded-full overflow-hidden">
            <input type="text" className="w-full px-4 py-2 text-sm bg-gray-50" placeholder="Search..." />
            <button className="absolute right-3 top-2 text-[#b400dd]"><Icon path={paths.search} className="w-5 h-5" /></button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;