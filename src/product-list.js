import React from 'react';
import { Link } from 'react-router-dom';
import mesa from "../src/images/mesa.png";
import cadeira from "../src/images/cadeira.png";
import sofaGrande from "../src/images/sofa-grande.png";
import sofaSala from "../src/images/sofa-sala.png";



const ProductList = ({ products = [    
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: mesa, category: 'Dining', discount: 30 },
    { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: cadeira, category: 'Dining' },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', image: sofaGrande, category: 'Living', discount: 50},
    { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', image: sofaSala, category: 'Living', newProduct: true},     

      ] }) => { 
  return (
      <div className="image-products">
          {products.map((product) => (
              <div className="products" key={product.id}>
                  <div className="image-wrapper">
                    {product.newProduct ? (
                      <div className="new-product">
                        <div className="new-label">New</div>
                        <img src={product.image} alt={product.name} />
                        <Link to={`/product/${product.id}`}>
                          <button className="see-details">See Details</button>
                        </Link>
                      </div>
                    ) : (
                          product.discount ? (
                              <div className="product-with-discount">
                                  <div className="discount-label">-{product.discount}%</div>
                                  <img src={product.image} alt={product.name} />
                              </div>
                          ) : (
                              <img src={product.image} alt={product.name} />
                          )
                    )}
                      <Link to={`/product/${product.id}`}>
                          <button className="see-details">See Details</button>
                      </Link>
                  </div>
                  <div className="product-details">
                      <p><span className="bolds">{product.name}</span></p>
                      <p>{product.description}</p>
                      <p><span classname="bolds">{product.price}</span></p>
                  </div>
              </div>
          ))}
      </div>
  );
};

export default ProductList;
        