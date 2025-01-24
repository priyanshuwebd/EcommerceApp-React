import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Find the product by ID
    const filteredProduct = items.find((prod) => prod.id === parseInt(id));
    setProduct(filteredProduct);

    // Find related products based on category
    if (filteredProduct) {
      const related = items.filter(
        (item) =>
          item.category === filteredProduct.category && item.id !== filteredProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt={product.title || 'Product'} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
            {product.price} ₹
          </button>
          <button className="btn btn-warning">Add To Cart</button>
        </div>
      </div>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
