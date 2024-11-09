// src/components/Hotels.tsx
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query } from 'firebase/firestore';

interface Hotel {
  id?: string;
  title: string;
  location: string;
  price: number;
}

const Hotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [newHotel, setNewHotel] = useState<Hotel>({
    title: '',
    location: '',
    price: 0
  });

  // Add a new hotel
  const handleAddHotel = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'hotels'), newHotel);
      console.log('Hotel added with ID:', docRef.id);
      // Reset form
      setNewHotel({ title: '', location: '', price: 0 });
      // Refresh hotels list
      fetchHotels();
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  // Fetch all hotels
  const fetchHotels = async () => {
    try {
      const q = query(collection(db, 'hotels'));
      const querySnapshot = await getDocs(q);
      const hotelsList: Hotel[] = [];
      querySnapshot.forEach((doc) => {
        hotelsList.push({ id: doc.id, ...doc.data() } as Hotel);
      });
      setHotels(hotelsList);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  // Fetch hotels on component mount
  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleAddHotel}>
        <input
          type="text"
          placeholder="Hotel Title"
          value={newHotel.title}
          onChange={(e) => setNewHotel({ ...newHotel, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newHotel.location}
          onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newHotel.price}
          onChange={(e) => setNewHotel({ ...newHotel, price: Number(e.target.value) })}
        />
        <button type="submit">Add Hotel</button>
      </form>

      <h2>Hotels List</h2>
      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h3>{hotel.title}</h3>
            <p>Location: {hotel.location}</p>
            <p>Price: ${hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;