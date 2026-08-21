import React, { useEffect, useState } from "react";
import "./Reviews.css";

const reviews = [
    {
        name: "Sarah Khan",
        image: "https://i.pravatar.cc/150?img=47",
        review:
            "Absolutely loved the burger! Everything tasted fresh, juicy and perfectly balanced.",
    },
    {
        name: "Ahmed Raza",
        image: "https://i.pravatar.cc/150?img=12",
        review:
            "One of the best burgers I've had. The ingredients were fresh and the flavors were amazing!",
    },
    {
        name: "Maham Ali",
        image: "https://i.pravatar.cc/150?img=32",
        review:
            "The food was delicious and the presentation was beautiful. Definitely coming back!",
    },
    {
        name: "Hamza Malik",
        image: "https://i.pravatar.cc/150?img=11",
        review:
            "The signature burger was incredible. You can actually taste the freshness in every bite.",
    },
    {
        name: "Ayesha Noor",
        image: "https://i.pravatar.cc/150?img=44",
        review:
            "Such a cozy experience! Great food, amazing flavors and everything felt really fresh.",
    },
    {
        name: "Danish Ahmed",
        image: "https://i.pravatar.cc/150?img=68",
        review:
            "Taste N Health has completely changed my expectations for burgers. Highly recommended!",
    },
];

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    /*
      We add the first 3 reviews again at the end.
      This allows the slider to smoothly move forward
      and then jump back to the beginning.
    */
    const sliderReviews = [...reviews, ...reviews.slice(0, 3)];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        /*
          When we reach the duplicated reviews,
          wait for the animation to finish and
          silently jump back to the beginning.
        */
        if (currentIndex === reviews.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);

                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 700);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <section className="reviews-section" id="reviews">

            {/* TOP LABEL */}
            <div className="reviews-label">
                <span>WHAT PEOPLE SAY</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="reviews-title">
                Happy <span>Customers</span>
            </h2>

            <p className="reviews-subtitle">
                Good food tastes even better when our customers love it too.
            </p>

            {/* SLIDER */}
            <div className="reviews-slider">

                <div
                    className="reviews-track"
                    style={{
                        transform: `translateX(-${currentIndex *
                            (window.innerWidth <= 600
                                ? 100
                                : window.innerWidth <= 900
                                    ? 50
                                    : 100 / 3)
                            }%)`,
                        transition: isTransitioning
                            ? "transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)"
                            : "none",
                    }}
                >

                    {sliderReviews.map((review, index) => (
                        <div className="review-card" key={`${review.name}-${index}`}>

                            {/* PROFILE */}
                            <div className="review-top">

                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="review-avatar"
                                />

                                <div className="review-person">

                                    <h3>{review.name}</h3>

                                    <div className="review-stars">
                                        ★★★★★
                                    </div>

                                </div>

                            </div>

                            {/* REVIEW */}
                            <p className="review-text">
                                "{review.review}"
                            </p>

                            {/* SMALL DECORATION */}
                            <div className="review-mark">
                                ”
                            </div>

                        </div>
                    ))}

                </div>

            </div>

            {/* DOTS */}

            <div className="review-dots">

                {reviews.map((_, index) => (
                    <button
                        key={index}
                        className={`review-dot ${currentIndex % reviews.length === index
                                ? "active"
                                : ""
                            }`}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(index);
                        }}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}

            </div>

        </section>
    );
}

export default Reviews;