import React from "react";

const Item = ({product}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{"✨".repeat(product.rating)}</p>
      <button>Detalle</button>
    </div>
  );
};

export default Item;
