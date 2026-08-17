import React, { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${showNavbar ? "navbar-visible" : ""}`}>
      <div className="navbar-inner">

        <button
          className="navbar-brand"
          onClick={() => goTo("home")}
        >
          <span className="brand-small">TASTE N</span>
          <span className="brand-main">HEALTH</span>
        </button>

        <div className="navbar-links">
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("menu")}>Menu</button>
          <button onClick={() => goTo("about")}>About</button>
          <button onClick={() => goTo("reviews")}>Reviews</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </div>

        <button
          className="navbar-order"
          onClick={() => goTo("contact")}
        >
          Order Now
          <span>↗</span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;