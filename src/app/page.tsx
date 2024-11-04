'use client'

import React, { useState } from 'react'
import Layout from '../components/Layouts'
import HotelCard from '../components/HotelCard'
import { Hotel, City } from '../types/types'

const mockHotels: Hotel[] = [
  {
    id: 1,
    name: 'Luxury Hotel & Spa',
    rating: 4.5,
    location: 'Downtown Area, City Center',
    imageUrl: '/images/hotel2.avif' ,
    pricePerNight: 2999
  },
  // Add more mock hotels...
]

const mockCities: City[] = [
  { 
    name: 'Bangalore', 
    popularLocalities: ['Koramangala', 'MG Road', 'Rajaji Nagar'] 
  },
  // Add more cities...
]

const HomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  return (
    <Layout>
      <div className="bg-gradient-overlay bg-cover bg-center text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Over 174,000+ hotels and homes across 35+ countries</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <input 
                type="text" 
                placeholder="Location" 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="p-3 border rounded"
              />
              <input 
                type="date" 
                placeholder="Check In" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="p-3 border rounded"
              />
              <input 
                type="date" 
                placeholder="Check Out" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="p-3 border rounded"
              />
              <button className="bg-green-500 text-white p-3 rounded hover:bg-green-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-12">
        <div className="grid md:grid-cols-3 gap-6">
          {mockHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>

      <div className="container mx-auto my-12">
        <h2 className="text-2xl font-bold mb-6">Popular Cities</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {mockCities.map(city => (
            <div 
              key={city.name} 
              className="border p-4 rounded hover:shadow-lg transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{city.name}</h3>
              <div className="mt-2 text-gray-600">
                {city.popularLocalities.map(locality => (
                  <p key={locality} className="text-sm">{locality}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage