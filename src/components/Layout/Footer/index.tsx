"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";
import { towers } from "@/app/api/navlink";

const Footer = () => {
  const verticals = [
    { label: "Mohali Citi Centre", href: "https://thestjgroup.com" },
    { label: "Genesis Heights", href: "#" },
    { label: "Saraf The Jeweller", href: "https://www.sarafthejeweller.com" },
    { label: "Sunaar The Jeweller", href: "https://sunaarbystj.com" },
    { label: "Bazzar", href: "https://thebazaarhypermarket.com" },
  ];

  return (
    <footer className="relative z-10 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
        {/* Main Content */}
        <div className="border-b border-white/10 py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              {/* Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#c8ac6e] via-primary to-[#c8ac6e] bg-clip-text text-transparent">
                  Begin Your Path to Success
                </h2>
                <p className="text-base text-white/80 sm:text-lg lg:text-xl max-w-2xl">
                  Let’s build something extraordinary together. Reach out today.
                </p>
              </div>

              {/* Newsletter */}
              <div className="w-full max-w-md">
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder=" "
                    className="peer w-full rounded-full border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-sm placeholder-transparent transition-all
                               focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <label className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sm text-white/60 transition-all
                                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
                                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary">
                    Enter your email address
                  </label>

                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white px-5 py-2.5 font-semibold text-dark
                               shadow-md transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg
                               sm:px-6"
                    aria-label="Subscribe"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <Icon
                      icon="ph:paper-plane-tilt-fill"
                      className="sm:hidden"
                      width={20}
                      height={20}
                    />
                  </button>
                </form>
              </div>

              {/* Social & Contact */}
              <div className="flex flex-col gap-4 pt-2 sm:pt-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  {/* social */}
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://www.instagram.com/thepinnaclebystj/"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-all duration-300 hover:text-primary hover:scale-110"
                    >
                      <Icon icon="ph:instagram-logo-fill" width={30} height={30} />
                    </Link>

                    <Link
                      href="https://www.facebook.com/profile.php?id=61565598643707"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-all duration-300 hover:text-primary hover:scale-110"
                    >
                      <Icon icon="ph:facebook-logo-fill" width={30} height={30} />
                    </Link>
                  </div>

                  {/* divider - only on sm+ */}
                  <div className="hidden h-8 w-px bg-white/20 sm:block" />

                  <Link
                    href="mailto:sales@thepinnacle.live"
                    className="group flex items-center gap-2 text-white/80 transition-colors hover:text-primary"
                  >
                    <Icon
                      icon="ph:envelope-simple-fill"
                      className="text-primary transition-transform group-hover:scale-110"
                      width={20}
                      height={20}
                    />
                    <span className="break-all sm:break-normal">sales@thepinnacle.live</span>
                  </Link>

                  <div className="hidden h-8 w-px bg-white/20 sm:block" />

                  <span className="flex items-center gap-2 text-white/80">
                    <Icon icon="ph:phone-fill" className="text-primary" width={20} height={20} />
                    83445-83445
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - links */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Explore */}
                <div>
                  <h3 className="mb-5 text-lg font-semibold tracking-wide text-[#c8ac6e]">
                    Explore
                  </h3>
                  <div className="flex flex-col gap-3">
                    {FooterLinks.slice(0, 6).map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="relative pl-1 text-sm font-medium text-white/70 transition-all duration-200
                                   hover:text-white hover:translate-x-1
                                   before:absolute before:left-0 before:top-1/2 before:h-1 before:w-0 before:-translate-y-1/2
                                   before:rounded-full before:bg-primary before:transition-all before:duration-300
                                   hover:before:w-3"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Towers */}
                <div>
                  <h3 className="mb-5 text-lg font-semibold tracking-wide text-[#c8ac6e]">
                    Towers
                  </h3>
                  <ul className="space-y-3 pl-2">
                    {towers.map((tower, idx) => (
                      <li key={idx}>
                        <Link
                          href={tower.href}
                          className="relative pl-1 text-sm font-medium text-white/70 transition-all duration-200
                                     hover:text-white hover:translate-x-1 capitalize
                                     before:absolute before:left-0 before:top-1/2 before:h-1 before:w-0 before:-translate-y-1/2
                                     before:rounded-full before:bg-primary before:transition-all before:duration-300
                                     hover:before:w-3"
                        >
                          {tower.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verticals */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <h3 className="mb-5 text-lg font-semibold tracking-wide text-[#c8ac6e]">
                    Verticals
                  </h3>
                  <ul className="space-y-3 pl-2">
                    {verticals.map((v, idx) => (
                      <li key={idx}>
                        <Link
                          href={v.href}
                          className="relative pl-1 text-sm font-medium text-white/70 transition-all duration-200
                                     hover:text-white hover:translate-x-1
                                     before:absolute before:left-0 before:top-1/2 before:h-1 before:w-0 before:-translate-y-1/2
                                     before:rounded-full before:bg-primary before:transition-all before:duration-300
                                     hover:before:w-3"
                        >
                          {v.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 py-6 text-sm font-medium text-white/50 sm:flex-row sm:items-center sm:py-8">
          <p>© {new Date().getFullYear()} Real State. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="#"
              className="transition-all hover:text-primary hover:underline underline-offset-4 decoration-primary/30 decoration-2"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="transition-all hover:text-primary hover:underline underline-offset-4 decoration-primary/30 decoration-2"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-secondary/5 blur-3xl sm:h-96 sm:w-96" />
    </footer>
  );
};

export default Footer;
