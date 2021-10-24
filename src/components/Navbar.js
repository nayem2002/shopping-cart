import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartTotalQuintity = useSelector(
    (state) => state.cart.cartTotalQuintity
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="Nav-Brand">
            <Link to="/">
              <img src="image/logo.jpg" alt="image" />
            </Link>
          </div>
          <div className="basket">
            <Link to="/checkout">
              <i className="fas fa-shopping-cart style"></i>
              <span>{cartTotalQuintity}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
