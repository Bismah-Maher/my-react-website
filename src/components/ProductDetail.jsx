import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css";
import products from "./product";

function ProductDetail() {
  const { id } = useParams();

  // Find the EXACT product clicked from Menu.jsx
  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [favorite, setFavorite] = useState(false);

  if (!product) {
    return (
      <main className="product-not-found">
        <div className="not-found-box">
          <span>404</span>
          <h1>Dish Not Found</h1>
          <p>
            Sorry, this delicious item couldn't be found.
          </p>

          <Link to="/#menu">
            ← Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  const totalPrice = product.price * quantity;

  // Optional original price
  const originalPrice = Math.round(
    product.price * 1.2
  );

  const handleInstructions = (e) => {
    const value = e.target.value.slice(0, 120);
    setInstructions(value);
  };

  const handleAddToCart = () => {
    alert(
      `${quantity} × ${product.name} added to cart!`
    );
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out ${product.name} at Taste N Health!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Product link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  return (
    <main className="product-page">

      {/* =====================================
          BACKGROUND / MODAL OVERLAY
      ====================================== */}

      <div className="product-modal-backdrop">

        {/* =================================
            PRODUCT MODAL
        ================================== */}

        <section className="product-modal">

          {/* =================================
              LEFT — IMAGE
          ================================== */}

          <div className="product-visual">

            <img
              src={product.image}
              alt={product.name}
              className="product-hero-image"
            />

            <div className="product-image-gradient" />

            <div className="product-image-content">

              <span className="product-number">
                0{product.id}
              </span>

              <span className="product-category">
                {product.category}
              </span>

              <h1>
                {product.name}
              </h1>

            </div>

          </div>


          {/* =================================
              RIGHT — DETAILS
          ================================== */}

          <div className="product-details-panel">

            {/* TOP ACTIONS */}

            <div className="product-actions">

              <button
                type="button"
                className="share-button"
                onClick={handleShare}
                aria-label="Share product"
              >
                <span>↗</span>
                Share
              </button>


              <Link
                to="/#menu"
                className="product-close"
                aria-label="Close product"
              >
                ×
              </Link>

            </div>


            {/* PRODUCT INFO */}

            <div className="product-info">

              <span className="product-kicker">
                {product.category}
              </span>

              <h2 className="mobile-product-title">
                {product.name}
              </h2>


              {/* PRICE */}

              <div className="product-pricing">

                <strong>
                  Rs. {product.price}
                </strong>

                <span>
                  Rs. {originalPrice}
                </span>

              </div>


              {/* DESCRIPTION */}

              <p className="product-description">

                {product.description}

              </p>


              {/* EXTRA DETAILS */}

              <div className="product-meta">

                <span>
                  ✦ Freshly prepared
                </span>

                <span>
                  ✦ Made to order
                </span>

              </div>


              {/* =================================
                  SPECIAL INSTRUCTIONS
              ================================== */}

              <div className="instructions-section">

                <div className="instructions-heading">

                  <label htmlFor="instructions">
                    Special Instructions
                  </label>

                  <span>
                    OPTIONAL
                  </span>

                </div>


                <div className="textarea-wrapper">

                  <textarea
                    id="instructions"
                    value={instructions}
                    onChange={handleInstructions}
                    maxLength={120}
                    placeholder="Please enter instructions about this item"
                  />

                  <span className="character-count">
                    {instructions.length}/120
                  </span>

                </div>

              </div>

            </div>


            {/* =================================
                BOTTOM ORDER BAR
            ================================== */}

            <div className="product-order-bar">


              {/* QUANTITY */}

              <div className="quantity-wrapper">

                <span className="quantity-title">
                  QUANTITY
                </span>


                <div className="quantity-stepper">

                  <button
                    type="button"
                    className="quantity-trash"
                    onClick={() =>
                      setQuantity(1)
                    }
                    aria-label="Reset quantity"
                  >
                    🗑
                  </button>


                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        Math.max(
                          1,
                          quantity - 1
                        )
                      )
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>


                  <span>
                    {quantity}
                  </span>


                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                </div>

              </div>


              {/* ADD TO CART */}

              <button
                type="button"
                className="product-cart-button"
                onClick={handleAddToCart}
              >

                <div>

                  <small>
                    TOTAL
                  </small>

                  <strong>
                    Rs. {totalPrice}
                  </strong>

                </div>

                <span>
                  Add to Cart
                </span>

                <b>
                  →
                </b>

              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

export default ProductDetail;