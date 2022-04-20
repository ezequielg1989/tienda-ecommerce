import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {delCart} from '../../redux/action'

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const delProduct = (product) => {
    dispatch(delCart(product));
}

  const cartItems = (item) =>{
        return (
          <div className="card mb-3 col-sm-12 col-md-10 d-flex align-items-center" key={item.id}>
            <div className="row g-0 m-5">
              <div className="col-sm-4 col-md-2 ">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt="..."
                  width={100}
                />
              </div>
              <div className="col-sm-2 col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <p>{item.qty}</p>
                total: $ {item.price*item.qty}
              </div>
              <div className="col-md-2">
                <button className="btn btn-outline-primary mt-5 w-50">
                  <h3
                  onClick={()=>delProduct(item)}>x</h3>
                </button>
              </div>
            </div>

          </div>
        )
  }
  const cartEmpty = () => {
    return(
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>su carrito esta vacio</h3>
          </div>
        </div>
      </div>
    )
  }
  const buttonCheckout = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/Checkout" className="btn btn-outline-primary mb-5 w-25">
            checkout
          </NavLink>
        </div>
      </div>
    )
  }
  return(
    <div>
      {state.length === 0 && cartEmpty()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttonCheckout()}
    </div>
  )
  }

export default Cart;
