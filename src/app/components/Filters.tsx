// components/Filters.tsx
type FiltersProps = {
  selectedPrice: string;
  setSelectedPrice: (value: string) => void;
  selectedRating: string;
  setSelectedRating: (value: string) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (value: string[]) => void;
};

const Filters: React.FC<FiltersProps> = ({
  selectedPrice,
  setSelectedPrice,
  selectedRating,
  setSelectedRating,
  selectedAmenities,
  setSelectedAmenities,
}) => {
  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow text-black">
      <h5 className="font-bold text-lg mb-4">Filters</h5>
      <hr className="mb-4" />

      <div className="mb-4">
        <label className="block font-semibold mb-1">Price</label>
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">All</option>
          <option value="low">Under ₹1000</option>
          <option value="mid">₹1000 - ₹3000</option>
          <option value="high">Above ₹3000</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Rating</label>
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">All</option>
          <option value="4">4★ and above</option>
          <option value="3">3★ and above</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Amenities</label>
        <div className="space-y-2">
          {["AC", "WiFi", "Breakfast"].map((amenity) => (
            <label key={amenity} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
