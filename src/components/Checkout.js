import React, { useEffect } from 'react';
import './checkout.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  decrementQuintity,
  removeCart,
  removeAllProduct,
  getTotal,
} from '../features/CartSlice';

const Checkout = () => {
  const checkOutProduct = useSelector((state) => state.cart.cartItem);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [checkOutProduct]);

  return (
    <>
      <div className="containner">
        <h2>Shopping Cart</h2>
      </div>
      {checkOutProduct.length === 0 ? (
        <div className='empty-cart'>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="check-row">
            <div className="product-list-name">
              <ul>
                <li>Items</li>
                <li>Title</li>
                <li>Price</li>
                <li>Quintity</li>
                <li>Continue</li>
              </ul>
            </div>
            <hr />
            {checkOutProduct?.map((val) => {
              const { id, image, title, price, cartQuintity } = val;
              return (
                <div>
                  <div className="product" key={id}>
                    <div className="images">
                      <img src={image} alt="image" />
                    </div>
                    <div className="title">
                      <p>{title}</p>
                    </div>
                    <div className="price">
                      <p>
                        <small>$</small>
                        <strong>{price}</strong>
                      </p>
                    </div>
                    <div className="quantity">
                      <i
                        onClick={() => dispatch(decrementQuintity(val))}
                        className="fas fa-minus add-style"
                      ></i>

                      <input type="" value={cartQuintity} disabled />
                      <i
                        onClick={() => dispatch(addToCart(val))}
                        className="fas fa-plus add-style"
                      ></i>
                    </div>
                    <div className="button">
                      <button
                        type="submit"
                        onClick={() => dispatch(removeCart(val))}
                      >
                        Remove to cart
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="btn-group">
            <div className="button">
              <button
                type="submit"
                onClick={() => dispatch(removeAllProduct())}
              >
                Clear all product
              </button>
            </div>
            <div className="total-amount">
              <p>
                Total : <small>$</small>
                <strong>{Math.round(cartTotalAmount)}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
