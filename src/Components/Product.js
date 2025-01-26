import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    // Check if the item already exists in the cart
    const isItemInCart = cart.some((item) => item.id === id);

    if (isItemInCart) {
      toast.warning('Item is already in the cart', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      return;
    }

    const newCartItem = { id, price, title, description, imgSrc };
    setCart((prevCart) => [...prevCart, newCartItem]);

    toast.success('Item added to cart', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  };

  if (!Array.isArray(items) || items.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container my-5 my-3">
        <div className="row">
          {items.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
              <div className="card" style={{ width: '18rem' }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>

                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price} ₹
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
