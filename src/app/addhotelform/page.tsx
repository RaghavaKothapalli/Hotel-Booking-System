"use client";
import React, { useState } from "react";
import { addHotelBooking } from "../firebase/hotelService"; // Assuming you already have this service

const AddHotelPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create hotel data
    const newHotel = {
      title,
      location,
      price,
      rating,
      image,
    };

    try {
      // Assuming addHotelBooking stores data in Firebase and returns a booking ID
      const bookingId = await addHotelBooking(newHotel);
      alert(`Hotel added successfully! Your booking ID is ${bookingId}`);
      console.log("New hotel added:", newHotel); // Logs to the console

      // Reset form fields after submission
      setTitle("");
      setLocation("");
      setPrice(0);
      setRating(0);
      setImage("");
    } catch (error) {
      console.error("Error adding hotel: ", error);
      alert("Failed to add hotel. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Hotel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Hotel Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter hotel name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter location"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Price per Night</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter rating"
              min="1"
              max="5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image Link</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter image URL"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-4"
          >
            Add Hotel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHotelPage;
