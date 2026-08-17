import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BurgerStory from "./components/BurgerStory";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Menu />
        {/* Temporary space so scrolling works */}
        <BurgerStory />

        <section
          id="about"
          style={{
            minHeight: "100vh",
            background: "#161512",
            padding: "150px 8%",
          }}
        >
          <h2>About</h2>
        </section>

        <section
          id="reviews"
          style={{
            minHeight: "100vh",
            background: "#11100e",
            padding: "150px 8%",
          }}
        >
          <h2>Reviews</h2>
        </section>

        <section
          id="contact"
          style={{
            minHeight: "100vh",
            background: "#161512",
            padding: "150px 8%",
          }}
        >
          <h2>Contact</h2>
        </section>

      </main>

    </div>
  );
}

export default App;