
const SearchBar = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 p-3 bg-white md:rounded-full rounded-3xl shadow-lg">
      
      {/* Search Box */}
      <div className="flex flex-col md:flex-row md:items-center bg-white rounded-3xl overflow-hidden">

        {/* Location */}
        <div className="flex-1 px-5 py-3">
          <p className="text-xs text-gray-400">Location</p>
          <input
            type="text"
            placeholder="Sector 62, Indrapuram"
            className="w-full outline-none font-medium"
          />
        </div>

        {/* Divider (desktop only) */}
        <div className="hidden md:block h-10 w-px bg-gray-200" />

        {/* Property Type */}
        <div className="flex-1 px-5 py-3 ">
          <p className="text-xs text-gray-400">Property Type</p>
          <select className="w-full outline-none font-medium bg-transparent cursor-pointer">
            <option>Room</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>Shop</option>
          </select>
        </div>

        {/* Divider (desktop only) */}
        <div className="hidden md:block h-10 w-px bg-gray-200" />

        {/* Budget */}
        <div className="flex-1 px-5 py-3 ">
          <p className="text-xs text-gray-400">Budget</p>
          <select className="w-full outline-none font-medium bg-transparent cursor-pointer">
            <option>Under ₹10,000</option>
            <option>Under ₹20,000</option>
            <option>Under ₹30,000</option>
            <option>Under ₹50,000</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="
          bg-[#346fb3] text-white 
          px-6 py-4 
          flex items-center justify-center gap-2 
          rounded-full md:rounded-tl-none md:rounded-bl-none
          mt-3 md:mt-0
          hover:bg-[#144a87]
          cursor-pointer
        ">
          <span className="text-xl">🔍</span>
          Search
        </button>

      </div>
    </div>
  );
};

export default SearchBar;
