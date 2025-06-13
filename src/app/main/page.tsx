"use client";
import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Filters from '../components/Filters';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Home: React.FC = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<any[]>([]);

  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<string>("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const fetchHotels = async () => {
    const querySnapshot = await getDocs(collection(db, "hotels"));
    const hotelList: any[] = [];
    querySnapshot.forEach((doc) => {
      hotelList.push({ id: doc.id, ...doc.data() });
    });
    setHotels(hotelList);
    setFilteredHotels(hotelList);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const applyFilters = () => {
    let results = hotels;

    if (selectedPrice) {
      results = results.filter((hotel) => {
        if (selectedPrice === "low") return hotel.price < 1000;
        if (selectedPrice === "mid") return hotel.price >= 1000 && hotel.price <= 3000;
        if (selectedPrice === "high") return hotel.price > 3000;
        return true;
      });
    }

    if (selectedRating) {
      results = results.filter((hotel) => hotel.rating >= Number(selectedRating));
    }

    if (selectedAmenities.length > 0) {
      results = results.filter((hotel) =>
        selectedAmenities.every((a) => hotel.amenities?.includes(a))
      );
    }

    setFilteredHotels(results);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPrice, selectedRating, selectedAmenities]);

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
        <div className="container mx-auto flex p-4 flex-col md:flex-row gap-8 mt-8">
          <aside className="w-full md:w-1/4">
            <Filters
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              selectedAmenities={selectedAmenities}
              setSelectedAmenities={setSelectedAmenities}
            />
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
