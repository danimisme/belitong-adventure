'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'VOYAGES', href: '#' },
  { label: 'JAGE LAUT', href: '#jage' },
  { label: 'CONTACT US', href: '#contact' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Navbar visible or hidden
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ref untuk mobile nav height animasi
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear timer kalau ada scroll baru
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      const currentScrollY = window.scrollY;

      // Set scrolled true jika scroll lebih dari 100px (untuk styling)
      setScrolled(currentScrollY > 100);

      // Jika posisi scroll di atas, navbar selalu ditampilkan
      if (currentScrollY === 0) {
        setShowNavbar(true);
        return;
      }

      // Kalau scroll di bawah top, navbar muncul saat scroll
      setShowNavbar(true);

      // Set timer 2 detik untuk sembunyikan navbar kalau scroll berhenti
      hideTimeoutRef.current = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Handle animasi maxHeight dan opacity untuk mobile nav
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
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out font-judson ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'md:bg-primary/80 backdrop-blur-xs' : ''
      }`}
    >
      <div className={`${scrolled ? 'md:bg-primary/80' : 'bg-primary/0'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 bg-primary/80 backdrop-blur-xs md:backdrop-blur-none md:bg-transparent">
          <div className="flex items-center justify-between h-16">
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
          className="md:hidden bg-primary/80 backdrop-blur-xs px-4 pb-4 overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-white py-2 border-white border-b hover:text-blue-300 w-fit"
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
