// src/app/components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link href={href} className="nav-link text-center">
    {children}
  </Link>
);

export default function Navbar() {
  // State to control the visibility of the login form
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-red-500">OYO</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="/membership">
                <div>
                  <span className="font-bold">Become a Member</span>
                  <span className="block text-sm text-gray-500">10% off on stays</span>
                </div>
              </NavLink>
              <NavLink href="/business">
                <div>
                  <span className="font-bold">OYO for Business</span>
                  <span className="block text-sm text-gray-500">Trusted by 5000 Corporates</span>
                </div>
              </NavLink>
              <NavLink href="/list-property">
                <div>
                  <span className="font-bold">List your property</span>
                  <span className="block text-sm text-gray-500">Start earning in 30 mins</span>
                </div>
              </NavLink>
              <NavLink href="tel:0123-6201611">
                <div>
                  <span className="font-bold">0123-6201611</span>
                  <span className="block text-sm text-gray-500">Call us to Book now</span>
                </div>
              </NavLink>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
