"use client";

import { useState } from "react";
import Image from "next/image";

export default function Sponsors() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/Refine_the_Jag_Motor.png"
                alt="USA FSAE Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h1 className="text-gray-800 text-xl font-bold">USA FSAE</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Home
                </a>
                <a
                  href="/calendar"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Calendar
                </a>
                <a
                  href="/resources"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Resources
                </a>
                <a
                  href="/sponsors"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Sponsors
                </a>
                <a
                  href="/contact"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-gray-300 hover:bg-gray-400 inline-flex items-center justify-center p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 min-h-[44px] min-w-[44px]"
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div id="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
              <a
                href="/resources"
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Resources
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a
                href="/sponsors"
                className="bg-blue-600 text-white block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Sponsors
              </a>
              <a
                href="/calendar"
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-200"
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
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are grateful for the support of our sponsors who make our Formula SAE program possible. 
            Their contributions help us build competitive race cars and develop the next generation of automotive engineers.
          </p>
        </div>

        {/* Sponsorship Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sponsorship Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Sponsor USA FSAE?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gain visibility among engineering students and faculty</li>
                <li>• Support hands-on engineering education</li>
                <li>• Connect with future automotive industry professionals</li>
                <li>• Showcase your company's commitment to education</li>
                <li>• Access to talented engineering students for internships and careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sponsorship Levels</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Gold Sponsor</h4>
                  <p className="text-gray-600">Logo on car, website, and promotional materials</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Silver Sponsor</h4>
                  <p className="text-gray-600">Logo on website and promotional materials</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Bronze Sponsor</h4>
                  <p className="text-gray-600">Logo on website</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Download Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sponsorship Package</h2>
          <p className="text-gray-600 mb-6">
            Download our comprehensive sponsorship package to learn more about partnership opportunities 
            and how your support can make a difference in our Formula SAE program.
          </p>
          <a
            href="/2025-2026 SAE JAGRACING FULL SPONSORSHIP PACKET .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Sponsorship Package (PDF)
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Sponsoring?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss sponsorship opportunities and how we can work together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
