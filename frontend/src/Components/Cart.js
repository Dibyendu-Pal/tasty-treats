import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Items from './Items';

function Cart() {
  const [cartItems, setCartItems] = useState([])
  fetch("/api/user", {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem("auth-token")
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.user);
      setCartItems(data.user.cartItem)
      console.log(cartItems);
    })


  const plusNumber = (e) => {
    const id = e.currentTarget.previousElementSibling.id;
    console.log(id);
    fetch(`/api/user/increaseitemquantity/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem("auth-token")
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  const minusNumber = (e) => {
    const id = e.currentTarget.nextElementSibling.id;
    console.log(id);
    fetch(`/api/user/decreaseitemquantity/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem("auth-token")
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const deleteItemFromCart = (e) => {
    const id = e.currentTarget.name;
    console.log(id);
    fetch(`/api/user/deleteitemfromcart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem("auth-token")
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  // ------------------------------------------------

  // ------------------------------------------------


  console.log(cartItems);

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="cart-card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />

                      {
                        cartItems.map(cartItem => {
                          return (
                            <div key={cartItem.id}>
                              <div className="row mb-4 d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src="images/v1.jpg"
                                    className="img-fluid rounded-3" alt="Tomato" />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-black">{cartItem.item.name}</h6>
                                  <h6 className="text-muted">500g</h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button id={`minus${cartItems.indexOf(cartItem)}`} className="btn btn-link px-2"
                                    onClick={minusNumber}>
                                    <i className="fas fa-minus"></i>
                                  </button>

                                  <input id={cartItem.id} min="0" name="quantity" value={cartItem.quantity} type="number"
                                    className="form-control form-control-sm" style={{ width: "3.5rem" }} />

                                  <button id={`plus${cartItems.indexOf(cartItem)}`} className="btn btn-link px-2"
                                    onClick={plusNumber}>
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0">₹ <span className='cart-item-price'>{(cartItem.item.price) * (cartItem.quantity)}</span></h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <button name={cartItem.id} className="text-muted" onClick={deleteItemFromCart}><i className="fas fa-times"></i></button>
                                </div>
                              </div>
                              <hr className="my-4" />
                            </div>
                          )
                        })
                      }
                      <div className="pt-5">
                        <h6 className="mb-0"><Link to="/items" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-5 bg-grey">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>300</h5>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <h6 className="text-uppercase">Delivery Charges</h6>
                        <h5>₹ 50</h5>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>₹ 182.00</h5>
                      </div>

                      <button type="button" className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark">Buy Now</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart