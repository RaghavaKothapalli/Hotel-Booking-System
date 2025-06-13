"use client";
import React, { useState } from "react";

type SearchBoxProps = {
  onSearch: (query: { name: string; location: string }) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ name: hotelName, location });
  };

  return (
    <section className="bg-gray-100 py-4 w-full sticky top-[4rem] z-20"> {/* Adjust for navbar height */}
      <div className="container-fluid mx-4 px-4">
        
      <h1 className="text-3xl font-bold text-center mb-6">Find and Book Your Perfect Stay</h1>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Hotel Name</label>
            <input
              type="text"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Hotel Name"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-black">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Location"
            />
          </div>
          
          <div className="flex-1 min-w-[150px] flex items-end">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
