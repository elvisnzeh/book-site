import React, { useContext } from "react";
import { PageContext } from "./UserContext";
import { TiShoppingCart } from "react-icons/ti";
import { RiChatDeleteLine } from "react-icons/ri";

const Modals = () => {
  const { modals, SetModals, cart, setCart, setTotalPrice } = useContext(PageContext);

  const updateModals = () => {
    SetModals(!modals);
  };

  const clearAllTasks = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const deleteItem = (index) => {
    const newCart = [...cart];
    const deletedItemPrice = newCart[index].price;
    newCart.splice(index, 1);
    setCart(newCart);
    setTotalPrice(prevTotal => prevTotal - deletedItemPrice);
  };

  return (
    <div>
      <button className="cart_btn" onClick={updateModals}>
         <TiShoppingCart /> 
      </button>

      {modals &&
        (cart.length === 0 ? (
          <p className="no_item">No item</p>
        ) : (
          <div className="cart-modal">
            <ul>
              <h5 className="h5">Your Items</h5> <br />
              {cart.map((book, index) => (
                <li key={index}>
                  <div className="book-title">{book.title}</div>
                  <img className='imgg' src={book.imageSrc} alt={book.title} />
                  <div className="book-price">${book.price}</div>
                  <button className="delete-btn" onClick={() => deleteItem(index)}>
                  <RiChatDeleteLine />
                  </button>
                </li>
              ))}
              <button onClick={clearAllTasks} className="clearAllTasks">
                clearAll
              </button>
              <button className="Tasks">
                Check out
              </button>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Modals;
