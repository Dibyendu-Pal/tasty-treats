import React, { useState } from 'react'

function AdminItems() {
    const [items, setItems] = useState([])
    fetch("/api/item")
        .then(res => res.json())
        .then(data => setItems(data))
    return (
        <>
            <div className="titlepage mx-1" style={{ "padding-bottom": "30px" }}>
                <h2> Our <strong className="llow">Vegetables</strong> </h2>
            </div>
            <div>
                <form className="d-flex pb-5 justify-content-center" role="search">
                    <input className="front-page-from-searchbar form-control me-2" type="search" placeholder="Search Vegitables" aria-label="Search" />
                    <button className="btn btn-dark px-4" type="submit">Search</button>
                </form>
            </div>
            <div>
                <div className="col">
                    <div className="container">
                        <div className="row my-2">
                            {
                                items.map(item => {
                                    return (
                                        <div className="col">
                                            <div className="card mx-auto my-2">
                                                <div>
                                                    <img className="card-img" src="images/v1.jpg" alt="Vans" />
                                                </div>
                                                <div>
                                                    <div className="card-body">
                                                        <div className='d-flex'>
                                                            <h4 className="card-title">{item.name}</h4>
                                                        </div>
                                                        <div className="buy d-flex justify-content-between align-items-center">
                                                            <div className="price text-success"><h5 className="mt-4">₹{item.price}</h5></div>
                                                            <button id={item._id} className="btn btn-danger mt-3" onClick={addCartOnClick} style={{ fontSize: "smaller" }}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                                                            <Link id={`goToCart${item._id}`} to="/cart" className="btn btn-danger mt-3 d-none" style={{ fontSize: "smaller" }}><i className="fas fa-shopping-cart"></i> Go to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminItems