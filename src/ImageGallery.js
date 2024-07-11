// import React from "react";
// import PropTypes from 'prop-types';
// import CartButton from "./booksData";

// const ImageGallery = ({ images, onAddToCart }) => {
//   return (
//     <div className="image-gallery">
//       {images.map((image, index) => (
//         <div key={index} className="image-item">
//           <img src={image.src} alt={image.alt} />
//           <h3>{image.title}</h3>
//           <CartButton title={image.title} onAddToCart={onAddToCart} />
//         </div>
//       ))}
//     </div>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.shape({
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   })).isRequired,
//   onAddToCart: PropTypes.func.isRequired,
// };

// export default ImageGallery;
