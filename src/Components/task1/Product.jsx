import React from "react";

const Product = (product) => {
  //   console.log(product);
  return (
    <div className="my-card-body">
      <h3>{product.product.name}</h3>Product
      <img
        src={product.product?.api_featured_image}
        className="product-image"
      />
      <h2>{product.product.price}$</h2>
    </div>
  );
};

export default Product;
