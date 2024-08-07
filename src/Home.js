import React, { useContext } from "react";
import Book from "./Book";
import booksData from "./booksData";
import first from "./Assets/first.jpg";
import six from "./Assets/six.jpg";
import { PageContext } from './UserContext';

const Home = () => {
  const { handleAddToCart } = useContext(PageContext);

  return (

    
    <div className="grid-container">
      <div className="container">
        <div className="content">
          <img src={first} alt="First Book" />
          <div className="text">
            <h5>Kiss me Quick <br /> Limited Edition</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt adipiscing</p>
            <button className="btn2">Click here</button>
          </div>
        </div>
      </div>

      <div className="container1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit Sed do eiusmod tempor incididunt adipiscing</p>
      </div>

      
      <div className="book-grid">
        {booksData.slice(0, 5).map((book,) => (
          <Book
            key={book.id} 
            imageSrc={book.imageSrc}
            title={book.title}
            price={book.price}
            onAddToCart={() => handleAddToCart(book)}
          />
        ))}
      </div>

      
      <div className="container">
        <div className="content1">
          <img src={six} alt="Second Book" />
          <div className="text">
            <h5>A Man that Flies from his fear that<br />he has only taken a short cut to meet it</h5>
            <button className="btn22">Click here</button>
          </div>
        </div>
      </div>

      <div className="featured">
        <h4>FEATURED BOOKS</h4>
      </div>

     
      <div className="book-grid">
        {booksData.slice(5, 10).map((book) => (
          <Book
            key={book.id} 
            imageSrc={book.imageSrc}
            title={book.title}
            price={book.price}
            onAddToCart={() => handleAddToCart(book)}
          />
        ))}
      </div>

      <div className="book-grid">
        {booksData.slice(10, 15).map((book) => (
          <Book
            key={book.id} 
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
