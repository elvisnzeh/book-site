import React, { useContext } from "react";
import { PageContext } from "./UserContext";
import { TiShoppingCart } from "react-icons/ti";
import { RiChatDeleteLine } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";
import './Modal.css'

const Modals = () => {
  const { modals, SetModals, cart, setCart, setTotalPrice } =
    useContext(PageContext);
  // const modalRef = useRef(null);
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
    setTotalPrice((prevTotal) => prevTotal - deletedItemPrice);
  };

  const exitModals = () => {
    SetModals(false);
  };

  const overall = () => {
    SetModals(false);
  };

  return (
    <div>
      <button className="cart_btn" onClick={updateModals}>
        <TiShoppingCart />
      </button>
      {modals && (
        <div onClick={overall} className="overall">
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <ul>
              {cart.length === 0 ? (
                <h1 className="no_item">No item</h1>
              ) : (
                <>
                  <p className="your-items">Your Items </p>
                  <button className="exit" onClick={exitModals}>
                    <IoMdExit />
                  </button>
                  {cart.map((book, index) => (
                    <li key={index}>
                      <div className="book-title">{book.title}</div>
                      <img
                        className="imgg"
                        src={book.imageSrc}
                      />
                      <div className="book-price">${book.price}</div>
                      <button
                        className="delete-btn"
                        onClick={() => deleteItem(index)}
                      >
                        <RiChatDeleteLine />
                      </button>
                    </li>
                  ))}
                  <li>
                    <button onClick={clearAllTasks} className="clearAllTasks">
                      Delete All
                    </button>

                    <button className="Tasks">
                      Check out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
