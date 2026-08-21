import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BurgerStory from "./components/BurgerStory";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";


/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <Menu />

        <BurgerStory />

        <About />

        <Reviews />

        <Contact />

        <Footer />

      </main>

    </div>
  );
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter basename="/my-react-website">

      <Routes>

        {/* ================================
            HOME
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================================
            PRODUCT DETAIL
        ================================= */}

        <Route
          path="/product/:id"
          element={
            <div className="app">

              <Navbar />

              <main>

                <ProductDetail />

                <Footer />

              </main>

            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;