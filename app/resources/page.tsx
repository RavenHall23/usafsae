"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Resources() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('button[aria-controls="mobile-menu"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-gray-200 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/Refine_the_Jag_Motor.png"
                  alt="Jag Racing Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h1 className="text-gray-800 text-xl font-bold">Jag Racing</h1>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div>
              <button
                type="button"
                onClick={toggleMenu}
                className="bg-gray-300 hover:bg-gray-400 inline-flex items-center justify-center p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 transition-all duration-200 min-h-[44px] min-w-[44px]"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div id="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-200 border-t border-gray-300 shadow-lg">
              <a
                href="/resources"
                className="bg-gray-400 text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Resources
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:bg-gray-300 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a
                href="/sponsors"
                className="text-gray-600 hover:bg-gray-300 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Sponsors
              </a>
              <a
                href="/calendar"
                className="text-gray-600 hover:bg-gray-300 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Resources</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Technical Resources */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Resources</h2>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">FSAE Rules & Regulations</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Design Guidelines</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">CAD Software Access</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Simulation Tools</a></li>
                  </ul>
                </div>

                {/* Team Documents */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Team Documents</h2>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Meeting Minutes</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Design Reports</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Budget Planning</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Safety Protocols</a></li>
                  </ul>
                </div>

                {/* External Links */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">External Links</h2>
                  <ul className="space-y-2">
                    <li><a href="https://www.fsaeonline.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">FSAE Online</a></li>
                    <li><a href="https://www.sae.org" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">SAE International</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Competition Results</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-800">Sponsor Information</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
