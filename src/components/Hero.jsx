import React, { useEffect, useState } from "react";


function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const burgerTransform = `translateY(${scrollY * 0.18}px) scale(${
    1 + Math.min(scrollY * 0.00015, 0.12)
  })`;

  const textTransform = `translateY(${scrollY * -0.08}px)`;

  return (
    <section className="hero" id="home">

      {/* LEFT CONTENT */}
      <div
        className="hero-content"
        style={{
          transform: textTransform,
        }}
      >
        <p className="hero-kicker">
          TASTE N HEALTH
        </p>

        <h1>
          Ab taste bhi
          <br />
          aur <span>Health</span> bhi.
        </h1>

        <p className="hero-description">
          Big flavors, fresh ingredients and food made with care.
          From juicy burgers and cheesy pizzas to crispy chicken
          and loaded wraps — your cravings are covered.
        </p>

        <div className="hero-buttons">

          <button
            className="hero-primary"
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Menu
            <span>↗</span>
          </button>

          <button
            className="hero-secondary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Order Now
          </button>

        </div>
      </div>

      {/* BURGER AREA */}
      <div className="hero-food-wrapper">

        <div className="food-shadow"></div>

        
     <img
  className="hero-burger"
  src="/images/hero-burger.png"
  alt="Taste n Health burger"
  style={{
    transform: burgerTransform,
  }}
/>

      </div>

      {/* SCROLL */}
      <div className="scroll-indicator">
        <span>SCROLL</span>

        <div className="scroll-line">
          <span></span>
        </div>
      </div>

    </section>
  );
}

export default Hero;