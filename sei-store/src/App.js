import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import ProductCard from "./Components/ProductCard/ProductCard";

const sampleProduct = {
  title: "Small Bag",
  image:
    "https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_2.0,f_auto,g_face:center,h_422,q_auto,w_auto:26:338/v1/i/4ab043d5_1b24.jpg",
  price: 10,
  salePrice: 5,
};

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>SEIR Store</h1>
        <nav>
          <button onClick={() => setCartOpen(!cartOpen)}>
            <img
              width="30"
              src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
              alt="Shopping cart icon"
            />
          </button>
        </nav>
      </header>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;
