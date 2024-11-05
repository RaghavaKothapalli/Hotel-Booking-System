import React, { useState } from 'react';

const RoomGuestSelector: React.FC = () => {
  const [rooms, setRooms] = useState<number>(2);
  const [guests, setGuests] = useState<number>(3);

  const handleRoomChange = (type: 'increment' | 'decrement') => {
    setRooms(prevRooms => type === 'increment' ? prevRooms + 1 : Math.max(1, prevRooms - 1));
  };

  const handleGuestChange = (type: 'increment' | 'decrement') => {
    setGuests(prevGuests => type === 'increment' ? prevGuests + 1 : Math.max(1, prevGuests - 1));
  };

  return (
    <div className="flex items-center justify-between bg-white border rounded-md p-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span>Rooms</span>
          <button
            onClick={() => handleRoomChange('decrement')}
            className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-300"
          >
            -
          </button>
          <span>{rooms}</span>
          <button
            onClick={() => handleRoomChange('increment')}
            className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-300"
          >
            +
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span>Guests</span>
          <button
            onClick={() => handleGuestChange('decrement')}
            className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-300"
          >
            -
          </button>
          <span>{guests}</span>
          <button
            onClick={() => handleGuestChange('increment')}
            className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomGuestSelector;
