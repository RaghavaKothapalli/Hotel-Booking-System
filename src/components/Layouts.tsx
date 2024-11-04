'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-3xl font-bold text-oyo-red">OYO</Link>
          
          <div className="flex space-x-4">
            <Link href="#" className="nav-link">Home</Link>
            <Link href="#" className="nav-link">Offers</Link>
            <Link href="#" className="btn bg-oyo-red text-white px-4 py-2 rounded">
              Login / Signup
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {children}
      </main>
      
      <footer className="bg-oyo-dark text-white py-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <p>We provide the best hotel booking experience with great deals and offers.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#" className="block hover:text-oyo-red">Privacy Policy</Link>
              <Link href="#" className="block hover:text-oyo-red">Terms & Conditions</Link>
              <Link href="#" className="block hover:text-oyo-red">Contact Us</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p>Have Queries? Call for any assistance</p>
            <p className="font-bold">0124-6201600</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout