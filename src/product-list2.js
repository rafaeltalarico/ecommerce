import React from 'react';
import { Link } from 'react-router-dom';
import abajur from "../src/images/abajur.png";
import sofa from "../src/images/sofa.png";
import sofaGrande2 from "../src/images/sofa-grande2.png";
import sofaPequeno from "../src/images/sofa-pequeno.png";



const ProductList2 = () => {
    const products = [
      { id: 5, name: 'Grifo', image: abajur, description: 'Night lamp', price: 'Rp 1.500.000', category: 'Bedroom' },
      { id: 6, name: 'Muggo', image: sofa, description: 'Small mug', price: 'Rp 150.000', newProduct: true, category: 'Living' },
      { id: 7, name: 'Pingky', image: sofaGrande2, description: 'Cute bed set', price: 'Rp 7.000.000', discount: 50, category: 'Bedroom' },
      { id: 8, name: 'Potty', image: sofaPequeno, description: 'Minimalist flower pot', price: 'Rp 500.000', newProduct: true, category: 'Living' },
    ];


    return (
      <div className="image-products">
        {products.map((product) => (
          <div className="products" key={product.id}>
            
            <div className="image-wrapper">
              {product.newProduct ? ( 
                <div className="new-product">
                  <div className="new-label">New</div>
                  <img src={product.image} alt={product.name} />
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
              <p><span className="bolds">{product.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ProductList2;
        