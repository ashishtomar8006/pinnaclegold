"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Subtle background pattern */}
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

      <div className="container mx-auto max-w-7xl pt-16 px-6 sm:px-12 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
            
            {/* Left Column - CTA + Newsletter */}
            <div className="md:col-span-7 col-span-12 space-y-10">
              
              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                  Begin Your Path to Success
                </h2>
                <p className="text-xl text-white/80 max-w-2xl">
                  Let’s build something extraordinary together. Reach out today.
                </p>
              </div>

              {/* CTA Button */}
              {/* <Link
                href="/contactus"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 w-max group"
              >
                Get In Touch
                <Icon icon="ph:arrow-right-bold" className="group-hover:translate-x-1 transition-transform" width={20} height={20} />
              </Link> */}

              {/* Newsletter Form */}
              <div className="max-w-md">
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder=" "
                    className="w-full rounded-full py-4 px-6 bg-white/5 backdrop-blur-sm border border-white/10 placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all peer"
                    required
                  />
                  <label className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 text-sm pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary">
                    Enter your email address
                  </label>
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-dark px-6 py-2.5 font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Subscribe"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <Icon icon="ph:paper-plane-tilt-fill" className="sm:hidden" width={20} height={20} />
                  </button>
                </form>
              </div>

              {/* Social & Contact Info */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8">
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/thepinnaclebystj/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transform hover:scale-110 transition-all duration-300"
                  >
                    <Icon icon="ph:instagram-logo-fill" width={32} height={32} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61565598643707"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transform hover:scale-110 transition-all duration-300"
                  >
                    <Icon icon="ph:facebook-logo-fill" width={32} height={32} />
                  </Link>
                </div>

                <div className="h-8 w-px bg-white/20"></div>

                <Link
                  href="mailto:thepinnacle@thestjgroup.com"
                  className="text-white/80 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Icon icon="ph:envelope-simple-fill" className="text-primary group-hover:scale-110 transition-transform" width={20} height={20} />
                  thepinnacle@thestjgroup.com
                </Link>

                <div className="h-8 w-px bg-white/20"></div>

                <span className="flex items-center gap-2 text-white/80">
                  <Icon icon="ph:phone-fill" className="text-primary" width={20} height={20} />
                  83445-83445
                </span>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="md:col-span-2 col-span-6">
              <h3 className="font-semibold text-lg mb-5 tracking-wide text-white">Explore</h3>
              <div className="flex flex-col gap-3">
                {FooterLinks.slice(0, 3).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 font-medium relative pl-1 before:content-[''] before:absolute  before:left-0 before:top-1/2 before:h-1 before:w-0 before:bg-primary before:rounded-full before:transition-all before:duration-300 hover:before:w-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 col-span-6">
              <h3 className="font-semibold text-lg mb-5 tracking-wide text-white">Legal & Support</h3>
              <div className="flex flex-col gap-3">
                {FooterLinks.slice(3, 6).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 font-medium relative pl-1 before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-1 before:w-0 before:bg-primary before:rounded-full before:transition-all before:duration-300 hover:before:w-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 font-medium text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Real State. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary hover:underline underline-offset-4 decoration-primary/30 decoration-2 transition-all">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary hover:underline underline-offset-4 decoration-primary/30 decoration-2 transition-all">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;