'use client';

import React, { useState } from "react";
import { addHotelBooking } from "@/app/firebase/hotelService";

const AddHotelPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newHotel = { title, location, price, rating, image };

    try {
      const bookingId = await addHotelBooking(newHotel);
      alert(`Hotel added! Booking ID: ${bookingId}`);
      console.log("Hotel added:", newHotel);

      // Reset
      setTitle("");
      setLocation("");
      setPrice(0);
      setRating(0);
      setImage("");
    } catch (error: any) {
      console.error("Error adding hotel:", error);
      alert(`Error: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-black mb-4">Add Hotel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            ["Hotel Name", title, setTitle],
            ["Location", location, setLocation],
            ["Image Link", image, setImage]
          ].map(([label, value, setter], idx) => (
            <div key={idx}>
              <label className="block text-sm text-black font-medium">{label}</label>
              <input
                type="text"
                value={value as string}
                onChange={(e) => (setter as any)(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-black">Price per Night</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
              min="1"
              max="5"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-blue-700"
          >
            Add Hotel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHotelPage;
