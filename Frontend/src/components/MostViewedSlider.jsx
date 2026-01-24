

import CardSlider from "./CardSlider";

const MostViewedSlider = () => {
  return (
    <section className="px-4 sm:px-6 mt-14">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8 gap-3">
        
        <h1 className="text-[#346fb3] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Most Viewed
        </h1>

        <p className="text-sm sm:text-base text-gray-600">
          Top rented and most searched properties nearby.
        </p>

        <p className="text-sm sm:text-base text-gray-600">
          Call now for latest availability.
        </p>

      </div>

      {/* Slider */}
      <CardSlider />

    </section>
  );
};

export default MostViewedSlider;
