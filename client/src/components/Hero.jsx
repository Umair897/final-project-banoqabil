import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";
// import Home from "../../src/components/Home/Home"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          tenetur doloremque molestias repellat minus asperiores in aperiam
          dolor, quaerat praesentium.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
      
    </section>
    // <Home/>
    );
};

export default Hero;
