"use client";
import Login from './components/LoginForm';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar1';
import { auth } from './firebase/config';

interface CityPopup {
  title: string;
  localities: string[];
}

interface City {
  name: string;
  slug: string;
  popup: CityPopup;
}

const cities: City[] = [
  {
    name: 'Bangalore',
    slug: 'bangalore',
    popup: {
      title: 'Popular Localities',
      localities: ['Koramangala', 'MG Road', 'Rajaji Nagar']
    }
  },
  {
    name: 'Chennai',
    slug: 'chennai',
    popup: {
      title: 'Popular Localities',
      localities: ['T. Nagar', 'Adyar', 'Egmore']
    }
  },
  {
    name: 'Delhi',
    slug: 'delhi',
    popup: {
      title: 'Popular Localities',
      localities: ['Rohini', 'Saket', 'Janakpuri']
    }
  },
  {
    name: 'Gurgaon',
    slug: 'gurgaon',
    popup: {
      title: 'Popular Localities',
      localities: ['Sector 14', 'Sikanderpur', 'Sector 38']
    }
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    popup: {
      title: 'Popular Localities',
      localities: ['Ameerpet', 'Madhapur', 'Kukatpally']
    }
  },
  {
    name: 'Kolkata',
    slug: 'kolkata',
    popup: {
      title: 'Popular Localities',
      localities: ['Chinar Park', 'Barasat', 'New Town']
    }
  },
  {
    name: 'Mumbai',
    slug: 'mumbai',
    popup: {
      title: 'Popular Localities',
      localities: ['Colaba', 'Bandra', 'Thane']
    }
  },
  {
    name: 'Pune',
    slug: 'pune',
    popup: {
      title: 'Popular Localities',
      localities: ['Baner', 'Wakad', 'Kharadi']
    }
  },
  {
    name: 'Noida',
    slug: 'noida',
    popup: {
      title: 'Popular Localities',
      localities: ['Greater Noida', 'Khora Colony', 'Noida City Centre']
    }
  }
];

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link href={href} className="nav-link text-center">
    {children}
  </Link>
);

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState('1 Room, 1 Guest');

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Navigation */}
      <Navbar />

      {/* Cities Grid */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-0 py-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-1">
          {cities.map((city) => (
            <div 
              key={city.slug}
              className="relative"
              onMouseEnter={() => setSelectedCity(city.slug)}
              onMouseLeave={() => setSelectedCity(null)}
            >
              <button className="w-full p-4 text-left flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{city.name}</h2>
                  <span>›</span>
              </button>
              
              {selectedCity === city.slug && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md p-4 z-10">
                  <strong>{city.popup.title}</strong>
                  {city.popup.localities.map((locality) => (
                    <Link
                      key={locality}
                      href={`/${city.slug}/${locality.toLowerCase().replace(' ', '-')}`}
                      className="block mt-2 hover:text-red-500"
                    >
                      {locality}
                    </Link>
                  ))}
                  <Link
                    href={`/${city.slug}`}
                    className="block mt-4 text-red-500 hover:text-red-600"
                  >
                    All of {city.name}
                  </Link>
                </div>
              )}
            </div>
          ))}
          
          <Link 
            href="/all-cities"
            className="p-4 text-left"
          >
            <h2 className="text-xl font-semibold">All Cities</h2>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gray-900  sm:h-auto">
        <div className="w-auto mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Over 174,000+ hotels and homes across 35+ countries
          </h1>
          
          {/* Search Widget */}
          <div className="bg-white rounded-lg p-4 mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by city, hotel, or neighborhood"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div className="relative">
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div className="relative">
                <select 
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option>1 Room, 1 Guest</option>
                  <option>1 Room, 2 Guests</option>
                  <option>2 Rooms, 4 Guests</option>
                </select>
              </div>
              
              <button className="w-full bg-red-500 text-white p-2 rounded-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <div>
            <Image
              src="/images/Banner1.avif"
              alt="OYO Promotion"
              width={1200}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <Image
              src="/images/Banner2.avif"
              alt="OYO Promotion"
              width={1200}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Subscription Box */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#FF4B4B" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z" />
                <path fill="#FFB6B6" d="M12 4.5c-2.75 3.5-4.5 5.5-4.5 8.25 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2.75-1.75-4.75-4.5-8.25z" />
              </svg>
            </div>
            
            <div className="md:w-1/3">
              <h2 className="text-xl font-bold">Get access to exclusive deals</h2>
              <p className="text-gray-600">Only the best deals reach your inbox</p>
            </div>
            
            <div className="flex-1">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 border rounded-md"
                />
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                  Notify me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}