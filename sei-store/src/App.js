import { useState, useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import ProductCard from "./Components/ProductCard/ProductCard";

const useProductsApi = () => {
  const [products, setProducts] = useState([]);

  const updateProducts = () => {
    fetch("https://run.mocky.io/v3/8f6209d6-f1db-482c-9599-4e79af45adbf")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(`Oops! There was an error: ${error}`));
  };

  useEffect(() => {
    updateProducts();
  }, []);

  return products;
};

function App() {
  const products = useProductsApi();
  console.log(products);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
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

      <main>
        <ul>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </main>
    </>
  );
}

export default App;
