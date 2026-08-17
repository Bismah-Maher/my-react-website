import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Classic Royale",
    category: "Burgers",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  },
  {
    id: 2,
    name: "Cheese Lava",
    category: "Burgers",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
  },
  {
    id: 3,
    name: "Smoky BBQ Burger",
    category: "Burgers",
    price: 1050,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
  },
  {
    id: 4,
    name: "Pepperoni Blast",
    category: "Pizza",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
  },
  {
    id: 5,
    name: "Classic Margherita",
    category: "Pizza",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
  },
  {
    id: 6,
    name: "Loaded Fries",
    category: "Fries",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
  },
  {
    id: 7,
    name: "Cheese Fries",
    category: "Fries",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800",
  },
  {
    id: 8,
    name: "Classic Cola",
    category: "Drinks",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800",
  },
  {
    id: 9,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800",
  },
];

const categories = ["All", "Burgers", "Pizza", "Fries", "Drinks"];

function Menu() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredItems =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="menu-section" id="menu">

      {/* HEADER */}
      <div className="menu-heading">
        <div>
          <p className="menu-label">TASTE N HEALTH</p>

          <h2>
            Recommended
            <br />
            <span>for You</span>
          </h2>
        </div>

        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="category-row">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setCategory(item)}
          >
            {item === "All" && "🍽️ "}
            {item === "Burgers" && "🍔 "}
            {item === "Pizza" && "🍕 "}
            {item === "Fries" && "🍟 "}
            {item === "Drinks" && "🥤 "}

            {item}
          </button>
        ))}
      </div>

      {/* FOOD CARDS */}
      <div className="menu-grid">
        {filteredItems.map((item) => {
          const cartItem = cart.find(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <article className="food-card" key={item.id}>

              <div className="food-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="food-image"
                />

                <button className="heart-button">
                  ♡
                </button>
              </div>

              <div className="food-info">

                <p className="food-category">
                  {item.category}
                </p>

                <h3>{item.name}</h3>

                <div className="food-bottom">

                  <strong>
                    Rs. {item.price}
                  </strong>

                  {!cartItem ? (
                    <button
                      className="add-button"
                      onClick={() => addToCart(item)}
                    >
                      + Add
                    </button>
                  ) : (
                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
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

      {/* CART POPUP */}
      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">
              <div>
                <p>TASTE N HEALTH</p>
                <h2>Your Cart</h2>
              </div>

              <button
                className="close-cart"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div>🛒</div>
                <h3>Your cart is empty</h3>
                <p>
                  Add something delicious from the menu.
                </p>
              </div>
            ) : (
              <>
                <div className="cart-items">

                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <h4>{item.name}</h4>

                        <p>
                          Rs. {item.price}
                        </p>

                        <div className="cart-quantity">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>
                      </div>

                      <strong>
                        Rs.{" "}
                        {item.price * item.quantity}
                      </strong>

                    </div>
                  ))}

                </div>

                <div className="cart-total">
                  <span>Total</span>
                  <strong>
                    Rs. {cartTotal}
                  </strong>
                </div>

                <button className="checkout-button">
                  Proceed to Order →
                </button>
              </>
            )}

          </div>
        </div>
      )}

      {/* SMALL CART NOTIFICATION */}
      {cartCount > 0 && (
        <button
          className="floating-cart"
          onClick={() => setCartOpen(true)}
        >
          <span>🛒</span>

          <div>
            <small>{cartCount} item{cartCount > 1 ? "s" : ""} added</small>
            <strong>View Cart</strong>
          </div>

          <span>→</span>
        </button>
      )}

    </section>
  );
}

export default Menu;