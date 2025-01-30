import React from "react";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative w-full h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('https://your-image-link.jpg')" }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-10">
    <div className="text-center max-w-xl">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
        Hello, I'm Pankaj
      </h1>
      <p className="text-lg sm:text-xl mb-8">
        I am a passionate developer with keen insterest on building web projects.
      </p>
    </div>
  </div>

  {/* Wave border */}
  <div className="absolute bottom-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
      <path
        fill="#1e1e1e"
        fillOpacity="1"
        d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,133.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>

  );
};

export default Hero;
