import { useState } from "react";
import Cart from "./Components/Cart/Cart";

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
    </div>
  );
}

export default App;
