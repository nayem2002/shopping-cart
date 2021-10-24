import React, { useEffect } from 'react';
import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getTotal } from '../features/CartSlice';

const Home = () => {
  const product = useSelector((store) => store.products.product);
  const getQuintity = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [getQuintity]);
  let count = product.length;

  return (
    <>
      <div className="container">
        <h2>
          There are <span>{count}</span> product :
        </h2>
        <div className="item-list">
          {product.map((val) => {
            const { id, title, price, image } = val;
            return (
              <div className="items-box" key={id}>
                <div className="image">
                  <img src={image} alt="image" />
                </div>
                <div className="content">
                  <div className="title-price">
                    <h3>{title}</h3>
                    <p>
                      Price : <small>$</small>
                      <strong>{price}</strong>
                    </p>
                  </div>
                </div>
                <div className="btn">
                  <button
                    type="submit"
                    onClick={() => dispatch(addToCart(val))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
