"use client";
import React from "react";

type HotelCardProps = {
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities?: string[];
  onBookNow: (hotel: {
    title: string;
    location: string;
    price: number;
    rating: number;
  }) => void;
};

const HotelCard: React.FC<HotelCardProps> = ({
  title,
  location,
  price,
  rating,
  image,
  amenities,
  onBookNow,
}) => (
  <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
    <div className="flex flex-col md:flex-row">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 object-cover h-48 md:h-auto"
      />
      <div className="p-4 w-full md:w-2/3">
        <div className="flex justify-between items-start">
          <h5 className="text-xl font-semibold text-black">{title}</h5>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">
            {rating} ⭐
          </span>
        </div>
        <p className="text-gray-600 mb-2">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
        {amenities && amenities.length > 0 && (
          <p className="text-sm text-gray-600 mb-2">
            Amenities: {amenities.join(", ")}
          </p>
        )}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-lg font-bold text-black">₹{price}</span>
            <small className="text-gray-500"> / night</small>
          </div>
          <button
            onClick={() => onBookNow({ title, location, price, rating })}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HotelCard;
