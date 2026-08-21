import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import products from "./product";

const categories = [
  {
    name: "Burger",
    emoji: "🍔",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
  },
  {
    name: "Pizza",
    emoji: "🍕",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300",
  },
  {
    name: "Pasta",
    emoji: "🍝",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300",
  },
  {
    name: "Salad",
    emoji: "🥗",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
  },
  {
    name: "Dessert",
    emoji: "🍰",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300",
  },
  {
    name: "Drinks",
    emoji: "🥤",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300",
  },
];

function Menu() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredItems =
    category === "All"
      ? products
      : products.filter(
          (item) => item.category === category
        );

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <section className="menu-section" id="menu">

     


      {/* ===========================
          CATEGORIES
      ============================ */}

      <div className="categories-section">

        <div className="section-heading-row">

          <div>

            <span className="section-label">
              DISCOVER
            </span>

            <h3>
              Categories
            </h3>

          </div>

          <button
            className={
              category === "All"
                ? "view-all active"
                : "view-all"
            }
            onClick={() => setCategory("All")}
          >
            View all →
          </button>

        </div>


        <div className="category-scroll">

          {categories.map((item) => (

            <button
              key={item.name}
              className={
                category === item.name
                  ? "category-card active"
                  : "category-card"
              }
              onClick={() =>
                setCategory(item.name)
              }
            >

              <div className="category-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              <span className="category-emoji">
                {item.emoji}
              </span>

              <span className="category-name">
                {item.name}
              </span>

            </button>

          ))}

        </div>

      </div>


      {/* ===========================
          POPULAR DISHES
      ============================ */}

      <div className="popular-section">

        <div className="section-heading-row">

          <div>

            <span className="section-label">
              OUR FAVORITES
            </span>

            <h3>
              Popular Dishes
            </h3>

          </div>

        </div>


        <div className="popular-grid">

          {filteredItems.map((item) => {

            const cartItem = cart.find(
              (cartItem) =>
                cartItem.id === item.id
            );

            return (

              <article
                className="dish-card"
                key={item.id}
              >

                {/* IMAGE */}

                <Link
                  to={`/product/${item.id}`}
                  className="dish-image-wrapper"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="dish-image"
                  />

                  <button
                    type="button"
                    className="favorite-button"
                    onClick={(e) =>
                      e.preventDefault()
                    }
                  >
                    ♡
                  </button>

                  <span className="dish-category">
                    {item.category}
                  </span>

                </Link>


                {/* CARD CONTENT */}

                <div className="dish-content">

                  <Link
                    to={`/product/${item.id}`}
                    className="dish-name-link"
                  >

                    <h4>
                      {item.name}
                    </h4>

                  </Link>


                  <p className="dish-description">
                    {item.description}
                  </p>


                  <div className="dish-bottom">

                    <div className="dish-price">

                      <small>
                        PRICE
                      </small>

                      <strong>
                        Rs. {item.price}
                      </strong>

                    </div>


                    {!cartItem ? (

                      <button
                        type="button"
                        className="dish-add-button"
                        onClick={() =>
                          addToCart(item)
                        }
                      >
                        <span>
                          +
                        </span>

                        Add
                      </button>

                    ) : (

                      <div className="dish-quantity">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {cartItem.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    )}

                  </div>

                </div>

              </article>

            );
          })}

        </div>

      </div>


      {/* ===========================
          CART OVERLAY
      ============================ */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() =>
            setCartOpen(false)
          }
        >

          <div
            className="cart-panel"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="cart-header">

              <div>

                <span>
                  YOUR ORDER
                </span>

                <h2>
                  My Cart
                </h2>

              </div>

              <button
                className="close-cart"
                onClick={() =>
                  setCartOpen(false)
                }
              >
                ×
              </button>

            </div>


            {cart.length === 0 ? (

              <div className="empty-cart">

                <div>
                  🛒
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add something delicious
                  from our menu.
                </p>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h4>
                          {item.name}
                        </h4>

                        <p>
                          Rs. {item.price}
                        </p>

                        <div className="cart-quantity">

                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(
                                item.id
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(
                                item.id
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>

                      <strong>
                        Rs.{" "}
                        {item.price *
                          item.quantity}
                      </strong>

                    </div>

                  ))}

                </div>


                <div className="cart-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    Rs. {cartTotal}
                  </strong>

                </div>


                <button
                  className="checkout-button"
                  type="button"
                >
                  Proceed to Order
                  <span>
                    →
                  </span>
                </button>

              </>

            )}

          </div>

        </div>

      )}


      {/* ===========================
          FLOATING CART
      ============================ */}

      {cartCount > 0 && (

        <button
          type="button"
          className="floating-cart"
          onClick={() =>
            setCartOpen(true)
          }
        >

          <span>
            🛒
          </span>

          <div>

            <small>
              {cartCount}{" "}
              {cartCount === 1
                ? "item"
                : "items"}
            </small>

            <strong>
              View Cart
            </strong>

          </div>

          <span>
            →
          </span>

        </button>

      )}

    </section>
  );
}

export default Menu;