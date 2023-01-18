// ProductCard.js
// ProductCard.js
import { useReducer } from "react";

function Product({ product }) {
  return (
    <li className="card">
      <img src={`${product.image}`} alt="" />
      <div className="description">
        <h2>{product.title}</h2>
        <div className={`price ${!!product.salePrice ? "sale" : ""}`}>
          <span className="reg"> {`$${product.price}`}</span>
          {product.salePrice && `$${product.salePrice}`}
        </div>
      </div>
      <div className="quantity">
        <button className="quantity-increase">+</button>
        Quantity: 0<button className="quantity-decrease">-</button>
      </div>
    </li>
  );
}

export default Product;
