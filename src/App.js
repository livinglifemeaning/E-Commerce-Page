import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    const cartItems = +sessionStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  const handleCartItems = (items, type) => {
    if (type === "delete") {
      setCartItems(0);
      sessionStorage.setItem("cartItems", 0);
    } else {
      setCartItems(items)
      sessionStorage.setItem("cartItems", items);
    }
  };
  return (
    <main>
      <Header handleCartItems={handleCartItems} cartItems={cartItems} />
      <ProductPage handleCartItems={handleCartItems} cartItems={cartItems} />
    </main>
  );
}

export default App;
