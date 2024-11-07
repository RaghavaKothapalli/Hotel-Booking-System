// src/app/components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import LoginForm from './LoginForm';

export default function Navbar() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="main" className="flex items-center">
                <span className="text-2xl font-bold text-red-500">OYO</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {/* Other Nav Links */}
              <button
                onClick={() => setIsLoginFormOpen(true)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isLoginFormOpen && <LoginForm onClose={() => setIsLoginFormOpen(false)} />}
    </>
  );
}
