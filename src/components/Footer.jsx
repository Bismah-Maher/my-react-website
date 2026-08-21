import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="taste-footer">

      {/* TOP FOOTER */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            TASTE N <span>HEALTH</span>
          </div>

          <p>
            Fresh ingredients, bold flavors, and food made with care.
            Because every craving deserves something delicious.
          </p>

          <div className="footer-follow">
            <span>FOLLOW US</span>

            <div className="footer-socials">
              <a href="#instagram" aria-label="Instagram">
                <span>ig</span>
              </a>

              <a href="#facebook" aria-label="Facebook">
                <span>f</span>
              </a>

              <a href="#tiktok" aria-label="TikTok">
                <span>♪</span>
              </a>
            </div>
          </div>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>EXPLORE</h3>

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("menu")}>
            Menu
          </button>

          <button onClick={() => scrollToSection("burger-story")}>
            Our Story
          </button>

          <button onClick={() => scrollToSection("reviews")}>
            Reviews
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>


        {/* FOOD */}
        <div className="footer-column">
          <h3>DISCOVER</h3>

          <button onClick={() => scrollToSection("menu")}>
            Burgers
          </button>

          <button onClick={() => scrollToSection("menu")}>
            Pizzas
          </button>

          <button onClick={() => scrollToSection("menu")}>
            Deals
          </button>

          <button onClick={() => scrollToSection("menu")}>
            Special
          </button>

          <button onClick={() => scrollToSection("menu")}>
            Order Now
          </button>
        </div>


        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h3>STAY HUNGRY.</h3>

          <p>
            Get fresh updates, special deals and delicious
            news from Taste N Health.
          </p>

          <form
            className="footer-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button type="submit">
              →
            </button>
          </form>

          <div className="footer-contact-mini">
            <p>
              <span>✦</span> Freshly made. Always.
            </p>

            <p>
              <span>✦</span> Taste the difference.
            </p>
          </div>
        </div>

      </div>


     


      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Taste N Health. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <span>•</span>

          <button onClick={() => scrollToSection("menu")}>
            Menu
          </button>

          <span>•</span>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>

      </div>

    </footer>
  );
}

export default Footer;