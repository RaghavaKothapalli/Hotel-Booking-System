"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link href={href} className="nav-link text-center">
    {children}
  </Link>
);

export default function Navbar() {
  // State to control the visibility of the login form and dropdown menu
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for the dropdown menu

  // Toggle the dropdown menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/main" className="flex items-center">
                <span className="text-2xl font-bold text-red-500">Hotel Booking</span>
              </Link>
            </div>

            {/* Hamburger Menu Icon for Mobile (Three Line Icon) */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={toggleMenu} 
                className="flex flex-col justify-between items-center space-y-1"
              >
                <div className="w-6 h-1 bg-red-500"></div> {/* Top line */}
                <div className="w-6 h-1 bg-red-500"></div> {/* Middle line */}
                <div className="w-6 h-1 bg-red-500"></div> {/* Bottom line */}
              </button>
            </div>

            {/* Menu Items (Desktop and Tablet view) */}
            <div className="hidden lg:flex items-center space-x-4">
              <NavLink href="/membership">
                <div>
                  <span className="font-bold text-black">Become a Member</span>
                  <span className="block text-sm text-black">10% off on stays</span>
                </div>
              </NavLink>
              <NavLink href="/business">
                <div>
                  <span className="font-bold text-black">OYO for Business</span>
                  <span className="block text-sm text-black">Trusted by 5000 Corporates</span>
                </div>
              </NavLink>
              <NavLink href="/list-property">
                <div>
                  <span className="font-bold text-black">List your property</span>
                  <span className="block text-sm text-black">Start earning in 30 mins</span>
                </div>
              </NavLink>
              <NavLink href="tel:0123-6201611">
                <div>
                  <span className="font-bold text-black">0123-6201611</span>
                  <span className="block text-sm text-black">Call us to Book now</span>
                </div>
              </NavLink>
              <button 
                className="bg-red-500 text-black px-4 py-2 rounded-md"
              >
                <Link href='/Sign-in'>Sign-in</Link>
              </button>
              <button 
                className="bg-red-500 text-black px-4 py-2 rounded-md"
              >
                <Link href='/Sign-up'>Sign-up</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black shadow-md absolute top-16 left-0 w-full p-4 flex flex-col space-y-4 z-50">
            <NavLink href="/membership">Become a Member</NavLink>
            <NavLink href="/business">HB for Business</NavLink>
            <NavLink href="/list-property">List your property</NavLink>
            <NavLink href="tel:0123-6201611">0123-6201611</NavLink>
            <NavLink href='/Sign-in'>Sign-in</NavLink>
            <NavLink href='/Sign-up'>Sign-up</NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
