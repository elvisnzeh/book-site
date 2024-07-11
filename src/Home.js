import React, { useContext, useState } from "react";
import Book from "./Book";
import booksData from "./booksData";
import first from "./Assets/first.jpg";
import six from "./Assets/six.jpg";
import { PageContext } from './UserContext';  

const Home = () => {
  const { cart, handleAddToCart } = useContext(PageContext);
  

  

  return (
    <div>
      <div className="container">
        <div className="first">
          <img src={first} alt="First Book" />
          <div>
            <h4>
              Kiss me Quick <br /> Limited Edition
              <br />
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br />
              elit Sed do eiusmod tempor incididunt adipiscing
            </p>
            <br />
            <button className="btn2">Click here</button>
          </div>
        </div>
      </div>

      <div className="release">
        <h3>New Release Book</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit Sed do eiusmod tempor incididunt adipiscing
        </p>
      </div>
      <br />

      <div className="container1">
        {booksData.slice(0, 5).map((book, index) => (
          <Book
            key={index}
            imageSrc={book.imageSrc}
            title={book.title}
            price={book.price}
            onAddToCart={() => handleAddToCart(book)}
          />
        ))}
      </div>

      <div className="container2">
        <div className="first2">
          <img src={six} alt="First Book" />
          <div>
            <h4>
              A Man that Flies from his fear that <br />
              he has only taken a short cut to meet it
              <br />
            </h4>
            <br />
            <button className="btn22">Click here</button>
          </div>
        </div>
      </div>
      <div className="release1">
        <h3>Featured Books</h3>
      </div>
      <br />

      <div className="container3">
        {booksData.slice(5, 10).map((book, index) => (
          <Book
            key={index + 5}
            imageSrc={book.imageSrc}
            title={book.title}
            price={book.price}
            onAddToCart={() => handleAddToCart(book)}
          />
        ))}
      </div>

      <div className="container4">
        {booksData.slice(10, 15).map((book, index) => (
          <Book
            key={index + 10}
            imageSrc={book.imageSrc}
            title={book.title}
            price={book.price}
            onAddToCart={() => handleAddToCart(book)}
          />
        ))}
      </div>
      </div>
  );
};

export default Home;
