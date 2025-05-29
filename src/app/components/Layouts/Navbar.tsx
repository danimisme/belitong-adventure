'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'VOYAGES', href: '#' },
  { label: 'JAGE LAUT', href: '#' },
  { label: 'CONTACT US', href: '#' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = mobileNavRef.current;
    if (el) {
      if (isMobileOpen) {
        el.style.maxHeight = el.scrollHeight + 'px';
        el.style.opacity = '1';
      } else {
        el.style.maxHeight = '0px';
        el.style.opacity = '0';
      }
    }
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-in-out font-judson ${
        scrolled
          ? 'md:bg-black/10 backdrop-blur-xs'
          : ''
      }`}
    >
      <div className={`${scrolled ? 'md:bg-black/40' : 'bg-black/0'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 bg-black/40 backdrop-blur-xs md:backdrop-blur-none md:bg-transparent">
          <div className="flex items-center justify-between h-20">
            {/* Logo mobile (kiri) */}
            <div className="md:hidden text-white text-2xl font-serif ">LOGO</div>

            {/* Left nav desktop */}
            <div className="hidden md:flex gap-28">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-blue-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Logo desktop (tengah) */}
            <div className="hidden md:block text-white text-2xl font-serif">
              LOGO
            </div>

            {/* Right nav + hamburger */}
            <div className="flex items-center space-x-10">
              <div className="hidden md:flex gap-28">
                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-blue-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className="text-white focus:outline-none text-2xl"
                  aria-label="Toggle menu"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile nav dengan animasi */}
        <div
          ref={mobileNavRef}
          className="md:hidden bg-black/40 backdrop-blur-xs px-4 pb-4 overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-white py-2 border-b border-gray-600"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
