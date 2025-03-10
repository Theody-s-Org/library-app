import React from "react";
import Hero from "./components/Hero";
import Recent from "./components/Recent";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recent />
      <Footer />
    </div>
  );
};

export default Landing;
