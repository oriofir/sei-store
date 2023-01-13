// Cart.js
const Cart = ({ cartOpen, setCartOpen }) => {
  return (
    <div className={`cart ${cartOpen === true ? "open" : "closed"}`}>
      <div className="cart-header">
        <h4>Your Cart</h4>
        <button className="btn" onClick={() => setCartOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
