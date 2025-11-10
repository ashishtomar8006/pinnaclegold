"use client";

import { navLinks, towers } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavLink from "./Navigation/NavLink";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isTowersOpen, setIsTowersOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const towersRef = useRef<HTMLDivElement | null>(null);

  const isHomepage = pathname === "/home";

  const closeMenu = () => setNavbarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setSticky(window.scrollY >= 50);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;

      // Close sidebar if click is outside it
      if (
        sideMenuRef.current &&
        target &&
        !sideMenuRef.current.contains(target)
      ) {
        setNavbarOpen(false);
      }

      // Close Towers dropdown if click is outside it
      if (towersRef.current && target && !towersRef.current.contains(target)) {
        setIsTowersOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          sticky ? "bg-white shadow-sm py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/images/logo/goldenicon.png"
                  alt="Logo"
                  width={sticky ? 70 : 80}
                  height={sticky ? 35 : 40}
                  unoptimized
                  className="transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation - ONLY shown when NOT scrolled */}
            {!sticky && (
              <div className="hidden md:flex items-center gap-2 lg:gap-6">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className={`text-sm lg:text-base font-medium px-3 py-2 rounded-md transition-all duration-300 relative group ${
                      !isHomepage
                        ? "text-gray-800 hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                ))}

                {/* Towers Dropdown - CLICK ONLY */}
                <div ref={towersRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTowersOpen((prev) => !prev)}
                    className={`text-sm lg:text-base font-medium px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-1 ${
                      !isHomepage
                        ? "text-gray-800 hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isTowersOpen}
                  >
                    Towers
                    <Icon
                      icon="ph:caret-down"
                      className={`transition-transform duration-300 ${
                        isTowersOpen ? "rotate-180" : ""
                      }`}
                      width={16}
                      height={16}
                    />
                  </button>

                  {isTowersOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                      {towers.map((tower, idx) => (
                        <Link
                          key={idx}
                          href={tower.href}
                          onClick={() => {
                            setIsTowersOpen(false);
                            closeMenu();
                          }}
                          className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium"
                        >
                          {tower.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Menu Button - Always Visible (opens sidebar) */}
            <div>
              <button
                onClick={() => setNavbarOpen((prev) => !prev)}
                className={`p-2.5 rounded-full transition-colors ${
                  sticky
                    ? "text-gray-800 hover:bg-gray-100"
                    : isHomepage
                    ? "text-white hover:bg-white/10"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                <Icon
                  icon={navbarOpen ? "ph:x" : "ph:list"}
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay for sidebar */}
      {navbarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* Sidebar (menu icon -> this opens) */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 w-[400px] h-full bg-dark shadow-lg transition-transform duration-300 max-w-4xl ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 px-6 sm:px-10 md:px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Close button */}
            <div className="flex items-center justify-start py-10">
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label="Close mobile menu"
                className="bg-white p-3 rounded-full hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Sidebar Nav */}
            <nav className="flex flex-col items-start gap-8">
              {/* <ul className="w-full space-y-4">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setNavbarOpen(false)}
                      className="block text-white text-2xl font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul> */}

              {/* Towers section inside sidebar (optional but useful) */}
              <div className="w-full mt-6">
                <h4 className="text-gray-400 uppercase tracking-wider text-xs font-semibold mb-3">
                  Towers
                </h4>
                <ul className="space-y-3">
                  {/* {towers.map((tower, idx) => (
                    <li key={idx}>
                      <Link
                        href={tower.href}
                        onClick={() => setNavbarOpen(false)}
                        className="block text-white text-lg font-medium hover:text-primary transition-colors"
                      >
                        {tower.label}
                      </Link>
                    </li>
                  ))} */}

                  {towers.map((item, index) => (
                    <NavLink
                      key={index}
                      item={item}
                      onClick={() => setNavbarOpen(false)}
                    />
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
