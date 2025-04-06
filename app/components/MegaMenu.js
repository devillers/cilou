'use client';

import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { title: 'Accueil', href: '/' },
  { title: 'Porfolio', href: '/portfolio' },
  {
    title: 'Blog',
    href: '/blog',
    submenu: [
      { title: 'reflexologie', items: ['article 1', 'article 2', 'article 3'] },
      { title: 'shiatsu assi', items: ['article 1', 'article 2', 'article 3'] },
      { title: 'relaxologie', items: ['article 1', 'article 2', 'article 3'] },
      { title: 'bien être', items: ['article 1', 'article 2', 'article 3'] },
      { title: 'autres ', items: ['article 1', 'article 2', 'article 3'] },
    ],
  },
  { title: 'prendre RDV', href: '/rdv' },
  { title: 'Contact', href: '/contact' },
];

export default function MegaMenu() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const menuContainerRef = useRef(null);

  const activeSubmenu = menuItems.find((m) => m.title === activeMenu)?.submenu;
  const colCount = activeSubmenu?.length ?? 0;
  const gridCols = colCount > 5 ? 'grid-cols-5' : `grid-cols-${colCount}`;

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
    setHideTimeout(timeout);
  };

  const handleMouseEnter = () => {
    if (hideTimeout) clearTimeout(hideTimeout);
  };

  return (
    <header className="shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <nav className="flex gap-8 items-center">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.title)}
                >
                  <Link
                    href={item.href || '#'}
                    className={`text-sm focus:outline-none uppercase leading-4 ${
                      isActive
                        ? 'text-[#006878] font-semibold'
                        : 'text-[#009992] hover:text-[#006878]'
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={menuContainerRef}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={`transition-all duration-500 ease-in-out ${
          activeMenu && activeSubmenu
            ? 'max-h-[500px] opacity-100 py-6 pointer-events-auto'
            : 'max-h-0 opacity-0 py-0 pointer-events-none'
        } bg-transparent overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid ${gridCols} gap-6`}>
            {activeSubmenu?.map((col, index) => (
              <div key={index}>
                {col.title && (
                  <div className="uppercase text-md mb-2 text-[#293d4c] select-none">
                    {col.title}
                  </div>
                )}
                <ul className="uppercase space-y-1">
                  {col.items.map((subItem, idx) => (
                    <li
                      key={idx}
                      className="uppercase text-[10px] cursor-pointer leading-6"
                    >
                      <button className="w-full text-left hover:text-[#009996] uppercase">
                        {subItem}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-sm fixed top-0 left-0 w-full h-full overflow-y-auto z-50">
          <div className="flex justify-end p-4">
            <div className="gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="absolute left-0 ml-4 h-10 w-auto"
              />
            </div>
            <button onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 px-4 pb-6 mt-10">
  {menuItems.map((item, i) => {
    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

    return (
      <div key={i}>
        <Link
          href={item.href || '#'}
          onClick={() => setMobileOpen(false)}
          className={`font-semibold text-md mb-3 uppercase ${
            isActive ? 'text-[#006878]' : 'hover:text-[#009996]'
          }`}
        >
          {item.title}
        </Link>
        {item.submenu && (
          <div className="grid grid-cols-2 gap-4 pl-4">
            {item.submenu.map((col, index) => (
              <div key={index}>
                {col.title && (
                  <div className="text-sm mb-1 font-semibold uppercase">
                    {col.title}
                  </div>
                )}
                <ul className="space-y-1">
                  {col.items.map((subItem, idx) => (
                    <li
                      key={idx}
                      className="text-[10px] uppercase hover:text-[#009996] cursor-pointer leading-7"
                    >
                      <button
                        className="w-full text-left"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  })}
</nav>

        </div>
      )}
    </header>
  );
}
