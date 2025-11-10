"use client";
import { navLinks } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import NavLink from "./Navigation/NavLink";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setNavbarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll]);

  const isHomepage = pathname === "/";

  return (
    <header
      className={`fixed h-24 py-1 z-50 w-full  transition-all duration-300 lg:px-0 px-4 ${
        sticky ? "top-3 rounded-full bg-white" : "top-0"
      }`}
    >
      <nav
        className={`container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 ${
          sticky ? "" : "shadow-none top-0"
        }`}
      >
        <div className="flex justify-between items-center gap-2 w-full">
          <div>
            <Link href="/">
              <Image
                src={`images/logo/${
                  sticky ? `goldenicon.png` : `goldenicon.png`
                }`}
                alt="logo"
                width={sticky ? 50 : 80}
                height={40}
                unoptimized={true}
                className={`${
                  isHomepage
                    ? sticky
                      ? "block dark:hidden"
                      : "hidden"
                    : sticky
                    ? "block"
                    : "block"
                }`}
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <div className={`hidden md:block`}>
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 transition-colors duration-300
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }
                `}
              >
                About Us
              </Link>
            </div>

            <div className={`hidden md:block`}>
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 transition-colors duration-300
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }
                `}
              >
                 Contact Us
              </Link>
            </div>
            
            <div className={`hidden md:block`}>
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 transition-colors duration-300
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }
                `}
              >
                Vision
              </Link>
            </div>
            
            <div className={`hidden md:block`}>
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 transition-colors duration-300
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }
                `}
              >
                Amnities
              </Link>
            </div>
        
            <div className={`hidden md:block`}>
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 transition-colors duration-300
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }
                `}
              >
                Club
              </Link>
            </div>

             <div className={`hidden md:block`}>
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 transition-colors duration-300
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }
                `}
              >
                Contact US
              </Link>
            </div>

            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border
                  
                  ${
                    sticky
                      ? "text-black hover:text-primary border-black"
                      : "text-white hover:text-primary border-white"
                  }`}
                aria-label="Toggle mobile menu"
              >
                <span>
                  <Icon icon={"ph:list"} width={24} height={24} />
                </span>
                <span className="hidden sm:block">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
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
            <nav className="flex flex-col items-start gap-4">
              <ul className="w-full">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    item={item}
                    onClick={() => setNavbarOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
