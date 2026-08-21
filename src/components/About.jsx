import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">

            <div className="about-label">
                <span>01</span>
                OUR STORY
            </div>

            <div className="about-content">

                <div className="about-heading">
                    <p>GOOD FOOD. GOOD MOOD.</p>

                    <h2>
                        Made with taste.
                        <br />
                        Made with <span>care.</span>
                    </h2>
                </div>

                <div className="about-text">
                    <p>
                        At Taste N Health, we believe great food should feel as good
                        as it tastes. We bring together fresh ingredients, bold
                        flavors, and simple recipes to create food worth craving.
                    </p>

                    <p>
                        From our signature burgers to delicious sides and refreshing
                        favorites, everything is prepared with one thing in mind —
                        making every bite count.
                    </p>

                    <div className="about-stats">
                        <div>
                            <strong>100%</strong>
                            <span>Fresh Ingredients</span>
                        </div>

                        <div>
                            <strong>01</strong>
                            <span>Simple Philosophy</span>
                        </div>

                        <div>
                            <strong>∞</strong>
                            <span>Good Cravings</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="about-bottom">
                <span>TASTE N HEALTH</span>
                <span>FRESH • BOLD • DELICIOUS</span>
            </div>

        </section>
    );
}

export default About;