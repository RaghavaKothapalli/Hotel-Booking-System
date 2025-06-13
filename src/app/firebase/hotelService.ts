// src/firebase/hotelService.ts
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

interface HotelData {
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

export const addHotelBooking = async (hotelData: HotelData) => {
  try {
    const docRef = await addDoc(collection(db, "hotels"), hotelData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};
