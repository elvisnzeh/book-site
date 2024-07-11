import React from "react";

const Book = ({ imageSrc, title, onAddToCart, price }) => {
  return (
    <div className="book">
      <img  className="img1" src={imageSrc} alt={title} />
      <h5>{title}</h5> <p>${price}</p>
      <button onClick={onAddToCart} className="btn1">
        Add To Cart
      </button>
    </div>
  );
};

export default Book;

