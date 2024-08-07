import React from "react";

const Book = ({ imageSrc, title, onAddToCart, price }) => {
  return (
    <div className="book">
      <img  className="img1" src={imageSrc} alt={title} />
      <h5 className="title">{title}</h5> <p className="price">${price}</p>
      <button onClick={onAddToCart} className="btn1">
        Add To Cart
      </button>
    </div>
  );
};

export default Book;

