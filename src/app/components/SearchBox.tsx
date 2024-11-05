const SearchBox: React.FC = () => (
  <section className="bg-gray-100 py-12 mt-16">
    <div className="container mx-auto">
      <form className="space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">Find and Book Your Perfect Stay</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700">Location</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Location" />
          </div>
          <div>
            <label className="block text-gray-700">Check In</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Check Out</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <button className="w-full bg-blue-600 text-white py-2 rounded mt-6">Search</button>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default SearchBox;
