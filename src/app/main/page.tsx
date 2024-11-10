"use client";
import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Filters from '../components/Filters';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';
import { db } from "../firebase/config"; // Your Firebase config
import { collection, getDocs } from "firebase/firestore";

const Home: React.FC = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<any[]>([]);

  // Fetch hotels from Firebase
  const fetchHotels = async () => {
    const querySnapshot = await getDocs(collection(db, "hotels"));
    const hotelList: any[] = [];
    querySnapshot.forEach((doc) => {
      hotelList.push({ id: doc.id, ...doc.data() });
    });
    setHotels(hotelList);
    setFilteredHotels(hotelList); // Initially show all hotels
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // Handle search functionality
  const handleSearch = ({ name, location }: { name: string; location: string }) => {
    const searchResults = hotels.filter((hotel) => {
      const hotelNameMatch = hotel.title.toLowerCase().includes(name.toLowerCase());
      const locationMatch = hotel.location.toLowerCase().includes(location.toLowerCase());
      return hotelNameMatch && locationMatch;
    });
    setFilteredHotels(searchResults);
  };

  return (
    <>
      <Navbar />
      <main className="mt-20">
        <SearchBox onSearch={handleSearch} />
        <div className="container mx-auto flex flex-col md:flex-row gap- mt-8">
          <aside className="w-full md:w-1/4">
            <Filters />
          </aside>
          <section className="w-full md:w-3/4 space-y-4">
            {filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                title={hotel.title}
                location={hotel.location}
                price={hotel.price}
                rating={hotel.rating}
                image={hotel.image}
                onBookNow={() => console.log("Booking:", hotel.title)}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
