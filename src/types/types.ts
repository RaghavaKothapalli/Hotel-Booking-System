export interface Hotel {
    id: number;
    name: string;
    rating: number;
    location: string;
    imageUrl: string;
    pricePerNight: number;
  }
  
  export interface City {
    name: string;
    popularLocalities: string[];
  }
  
  export interface SearchParams {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }
  