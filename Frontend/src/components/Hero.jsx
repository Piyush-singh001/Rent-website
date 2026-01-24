

import Search from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative px-4">
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Finding Your New Home <br className="hidden sm:block" />
          Is Simple
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
          ShreeRadhaKirpa.com is your go-to destination for finding the
          perfect rental home to suit your needs.
          <br className="hidden sm:block" />
          With thousands of property listings across Indirapuram.
        </p>

        <Search />
      </div>
    </div>
  );
};

export default Hero;

