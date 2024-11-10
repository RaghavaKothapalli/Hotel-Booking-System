import { db } from './config'; // Assuming Firebase is set up correctly
import { collection, addDoc } from 'firebase/firestore';

export const addHotelBooking = async (hotel: { title: string; location: string; price: number; rating: number; image: string }) => {
  try {
    const docRef = await addDoc(collection(db, 'hotels'), hotel);
    return docRef.id;
  } catch (error: unknown) {
    // Type guard for the 'error' to make sure it's an instance of Error
    if (error instanceof Error) {
      throw new Error("Error adding hotel: " + error.message);
    } else {
      // If it's not an instance of Error, handle it gracefully
      throw new Error("An unknown error occurred while adding the hotel.");
    }
  }
};
