import React from 'react';
import Image from "next/legacy/image";
import { Hotel } from '@/types/types';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{hotel.name}</h3>
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            {hotel.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;