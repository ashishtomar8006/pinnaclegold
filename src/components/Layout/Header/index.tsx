"use client";

import { navLinks, towers } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Download } from "lucide-react";
import EnquireNowModal from "@/components/Layout/Header/EnquireNowModal";


// New: Verticals dropdown data (simple redirect links)
const verticals = [
  {
    label: "Mohali Citi Centre",
    href: "https://thestjgroup.com", // update to actual URL if different
  },
  {
    label: "Genesis Heights",
    href: "#",
  },
  {
    label: "Saraf The Jeweller",
    href: "https://www.sarafthejeweller.com",
  },
  {
    label: "Sunaar The Jeweller",
    href: "https://sunaarbystj.com",
  },
  {
    label: "Bazzar",
    href: "https://thebazaarhypermarket.com",
  },
];

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  const [isTowersOpen, setIsTowersOpen] = useState(false); // For sidebar accordion
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  const isHomepage = pathname === "/home";

  const closeMenu = () => {
    setNavbarOpen(false);
    setIsTowersOpen(false); // Also close towers when closing entire menu
    setIsVerticalsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setSticky(window.scrollY >= 50);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;

      if (
        sideMenuRef.current &&
        target &&
        !sideMenuRef.current.contains(target)
      ) {
        setNavbarOpen(false);
        setIsTowersOpen(false);
        setIsVerticalsOpen(false);
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

                {/* Towers Dropdown on Desktop */}
                <div className="relative group">
                  <button
                    type="button"
                    className={`text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-1 ${
                      !isHomepage
                        ? "text-gray-800 hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    aria-haspopup="true"
                  >
                    Towers
                    <Icon icon="ph:caret-down" width={16} height={16} />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top">
                    {towers.map((tower, idx) => (
                      <Link
                        key={idx}
                        href={tower.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium"
                      >
                        {tower.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Verticals Dropdown on Desktop */}
                <div className="relative group">
                  <button
                    type="button"
                    className={`text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-1 ${
                      !isHomepage
                        ? "text-gray-800 hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    aria-haspopup="true"
                  >
                    Verticals
                    <Icon icon="ph:caret-down" width={16} height={16} />
                  </button>

                  {/* Desktop Verticals Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top">
                    {verticals.map((vertical, idx) => (
                      <Link
                        key={idx}
                        href={vertical.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium"
                      >
                        {vertical.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div>
              <button
                onClick={() => setNavbarOpen((prev) => !prev)}
                className={`p-2.5 cursor-pointer rounded-full transition-colors ${
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

      {/* Floating CTA Buttons – Desktop (right side, rotated like screenshot) */}
      <div className="hidden md:flex fixed right-[20px] bottom-40 -translate-y-1/2 z-40 flex-col gap-4">
        {/* ENQUIRE NOW – gold */}
        <button
        onClick={() => {
        closeMenu();
        setEnquireOpen(true);
      }}
          className="origin-right -rotate-90 cursor-pointer mb-50 block text-center px-4 py-3 rounded-tl-lg rounded-tr-lg bg-[#c79a3a] text-white text-sm font-semibold tracking-[0.15em] shadow-lg hover:bg-[#b4892f] transition-colors"
        >
          ENQUIRE NOW
        </button>

    
        <Link
          href="/Brochure-minj.pdf"
          download
          target="_blank"
          onClick={closeMenu}
          className="origin-right -rotate-90 flex gap-2 text-center px-4 py-3 rounded-tl-lg rounded-tr-lg bg-[#4b4f54] text-white text-sm font-semibold tracking-[0.15em] shadow-lg hover:bg-[#3a3e42] transition-colors"
        >
          <Download className="rotate-90" /> DOWNLOAD BROCHURE
        </Link>
      </div>

      {/* Floating CTA Buttons – Mobile (bottom-right, non-rotated for usability) */}
      <div className="md:hidden fixed right-4 bottom-4 z-40 flex flex-col gap-2">
        <Link
          href="#"
          onClick={() => {
            closeMenu();
            setEnquireOpen(true);
          }}
          className="px-4 py-2 text-center rounded-full border border-primary bg-white/90 text-primary text-xs font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors"
        >
          Enquire Now
        </Link>

        <Link
          href="/Brochure-minj.pdf"
          download
          target="_blank"
          onClick={closeMenu}
          className="px-4 py-2 flex justify-center items-center gap-4 rounded-full bg-primary text-white text-xs font-semibold shadow-lg hover:bg-primary/90 transition-colors"
        >
          <Download /> Download Brochure
        </Link>
      </div>
      {/* Overlay for Sidebar */}
      {navbarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 w-[85%] sm:w-[400px] h-full bg-dark shadow-lg transition-transform duration-300 z-50 px-6 sm:px-10 overflow-y-auto no-scrollbar ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex items-center justify-start pt-10 pb-6">
            <button
              onClick={closeMenu}
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

          {/* Sidebar Navigation */}
          <nav className="flex flex-col space-y-6 mb-10">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="block text-white text-2xl font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Towers Accordion in Sidebar */}
            <div className="border-t border-gray-700 pt-6">
              <button
                type="button"
                onClick={() => setIsTowersOpen((prev) => !prev)}
                className="flex cursor-pointer items-center justify-between w-full text-white text-2xl font-medium hover:text-primary transition-colors"
                aria-expanded={isTowersOpen}
              >
                <span>Towers</span>
                <Icon
                  icon="ph:caret-down"
                  className={`transition-transform duration-300 ${
                    isTowersOpen ? "rotate-180" : ""
                  }`}
                  width={20}
                  height={20}
                />
              </button>

              {/* Animated Tower Links */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isTowersOpen
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-3 pl-2">
                  {towers.map((tower, idx) => (
                    <li key={idx}>
                      <Link
                        href={tower.href}
                        onClick={closeMenu}
                        className="block text-white text-xl font-medium hover:text-primary transition-colors"
                      >
                        {tower.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Verticals Accordion in Sidebar */}
            <div className="border-t border-gray-700 pt-6">
              <button
                type="button"
                onClick={() => setIsVerticalsOpen((prev) => !prev)}
                className="flex cursor-pointer items-center justify-between w-full text-white text-2xl font-medium hover:text-primary transition-colors"
                aria-expanded={isVerticalsOpen}
              >
                <span>Verticals</span>
                <Icon
                  icon="ph:caret-down"
                  className={`transition-transform duration-300 ${
                    isVerticalsOpen ? "rotate-180" : ""
                  }`}
                  width={20}
                  height={20}
                />
              </button>

              {/* Animated Verticals Links */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isVerticalsOpen
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-3 pl-2">
                  {verticals.map((vertical, idx) => (
                    <li key={idx}>
                      <Link
                        href={vertical.href}
                        onClick={closeMenu}
                        className="block text-white text-xl font-medium hover:text-primary transition-colors"
                      >
                        {vertical.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

         


          {/* Optional: Theme Toggle or Contact CTA at Bottom */}
          <div className="mt-auto pb-10">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} STJ Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

          <EnquireNowModal
            open={enquireOpen}
            onClose={() => setEnquireOpen(false)}
            verticalOptions={verticals.map(v => ({ label: v.label, value: v.label }))}
          />
    </>
  );
};

export default Header;
