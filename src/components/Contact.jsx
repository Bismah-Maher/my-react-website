import React from "react";
import "./Contact.css";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon">
      <path
        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="9"
        r="2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon">
      <path
        d="M7.2 3.5 9.5 3c.7-.2 1.4.2 1.6.9l1 3c.2.6 0 1.2-.5 1.6l-1.7 1.3a13.8 13.8 0 0 0 5.3 5.3l1.3-1.7c.4-.5 1-.7 1.6-.5l3 1c.7.2 1.1.9.9 1.6l-.5 2.3c-.2 1-1.1 1.7-2.1 1.7C10.5 19.5 4.5 13.5 4.5 6.1c0-1 .7-1.9 1.7-2.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* TOP LABEL */}
      <div className="contact-heading">
        <span className="contact-eyebrow">GET IN TOUCH</span>

        <h2>
          Let&apos;s make your
          <br />
          next <span>craving</span>.
        </h2>

        <p>
          Have a question, want to place an order, or simply craving
          something delicious? We&apos;d love to hear from you.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="contact-grid">

        <div className="contact-card">
          <div className="contact-icon-box">
            <LocationIcon />
          </div>

          <div>
            <span>FIND US</span>
            <h3>Taste N Health</h3>
            <p>
              Your city, Pakistan
              <br />
              Come enjoy something delicious.
            </p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon-box">
            <PhoneIcon />
          </div>

          <div>
            <span>CALL US</span>
            <h3>
              <a href="tel:+923001234567">
                +92 300 1234567
              </a>
            </h3>
            <p>
              Mon – Sun
              <br />
              11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon-box">
            <MailIcon />
          </div>

          <div>
            <span>MAIL US</span>
            <h3>
              <a href="mailto:tastenhealth@gmail.com">
                tastenhealth@gmail.com
              </a>
            </h3>
            <p>
              We&apos;ll get back to you
              <br />
              as soon as possible.
            </p>
          </div>
        </div>

      </div>

      {/* CONTACT CTA */}
      <div className="contact-cta">
        <div>
          <span>READY TO ORDER?</span>

          <h3>
            Good food is
            <br />
            just a message away.
          </h3>
        </div>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          ORDER NOW
          <span>↗</span>
        </a>
      </div>

    </section>
  );
}

export default Contact;