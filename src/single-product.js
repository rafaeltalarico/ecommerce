import React, { useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import productData from './productData';
import "./styles/single-product.css";
import Footer from "./footer";
import miniatura1 from "../src/images/miniatura1-sofa.png";
import miniatura2 from "../src//images/miniatura2-sofa.png";
import miniatura3 from "../src//images/miniatura3-sofa.png";
import miniatura4 from "../src//images/miniatura4-sofa.png";
import estrela from "../src//images/estrela.png";
import facebook from "../src//images/facebook.png";
import linkedin from "../src//images/linkedin.png";
import twitter from "../src//images/twitter.png";

const SingleProduct = () => {
    const { productId } = useParams(); 
    const navigate = useNavigate(); 
    const product = productData.find((p) => p.id === parseInt(productId)); 

    const [mainImage, setMainImage] = useState(product.image);
    if (!product) {
        return <div>Product not found.</div>; 
    }
    const changeMainImage = (newImage) => {
        setMainImage(newImage);
    };
    const relatedProducts = productData.filter(p => p.category === product.category && p.id !== product.id);
    
    const handleShowMoreClick = () => {
        navigate(`/shop/${product.category}`);
    };
    return (
        <div>
            <div className="container-path">
                <div className="content-details">
                    <p className="gray">Home</p>
                    <p>&gt;</p>
                    <p className="gray">Shop</p>
                    <p>&gt;</p>
                    <p><strong>{product.name}</strong></p>
                </div>
            </div>
            <div className="product-detailings">
                <div className="secundary-images">
                    <img src={miniatura1} alt="miniatura1" onClick={() => changeMainImage(miniatura1)} />
                    <img src={miniatura2} alt="miniatura2" onClick={() => changeMainImage(miniatura2)} />
                    <img src={miniatura3} alt="miniatura3" onClick={() => changeMainImage(miniatura3)} />
                    <img src={miniatura4} alt="miniatura4" onClick={() => changeMainImage(miniatura4)} />
                </div>
                <div className="main-image">
                    <img src={mainImage} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1 className="name">{product.name}</h1>
                    <p className="price">{product.price}</p>
                    <div className="rating">
                        <img src={estrela} alt="estrela" />
                        <img src={estrela} alt="estrela" />
                        <img src={estrela} alt="estrela" />
                        <img src={estrela} alt="estrela" />
                        <p>5 Customers Review</p>
                    </div>
                    <p>Setting the bar as one of the loudest speakers in its class, the <br />Kilburn
                    is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a 
                    clear midrange and extended highs for a <br /> sound.</p>
                    <div className="size">
                        <p>Size</p>
                        <button>L</button>
                        <button>XL</button>
                        <button>XS</button>
                    </div>
                    <div className="cor">
                        <p>Color</p>
                        <button className="purple">c</button>
                        <button className="black">c</button>
                        <button className="brown">c</button>
                    </div>
                    <div className="options">
                        <div className="quantity">
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                        <button className="add-cart">Add To Cart</button>
                        <button className="compare">+ Compare</button>
                    </div>
                    <div className="infs-add">
                        <p>SKU: 00{product.id}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Tags: Sofa, Chair, Home, Shop</p>
                        <p>Share:
                            <img src={facebook} alt="facebook" />
                            <img src={linkedin} alt="linkedin" />
                            <img src={twitter} alt="twitter" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-description">
                <div className="desc-and-infs">
                    <p className="descript">Description</p>
                    <p className="additional-information">Additional Information</p>
                </div>
                <div className="text-description">
                    <p>Embodying the raw, wayward spirit of rock'n roll, the Kilburn portable
                    active stereo speaker takes the unmistakable look and <br />sound of Marshall,
                    unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
                    styled engineering. Setting the bar as one of the loudest <br />speakers in its
                    class, the Kilburn is a compact, stout-hearted hero with a well-balanced
                    audio which boasts a clear midrange <br />and extended highs for a sound 
                    is both articulate and pronounced. The analogue knobs allow you to fine
                    tune the controls <br />to your personal preferences while the guitar-influenced
                    leather strap enables easy and stylish travel.</p>
                </div>
            </div>
            <div className="container-related">
                <h3>Related Products</h3>
                <div className="image-products">
                    {relatedProducts.map((relatedProduct) => (
                        <div className="products" key={relatedProduct.id}>
                            <div className="image-wrapper">
                                <div className="related-product" onClick={() => changeMainImage(relatedProduct.image)}>
                                    {relatedProduct.newProduct ? (
                                        <div className="new-product">
                                            <div className="new-label">New</div>
                                            <img src={relatedProduct.image} alt={relatedProduct.name} />
                                            <Link to={`/product/${relatedProduct.id}`}>
                                                    <button className="see-details">See Details</button>
                                            </Link>
                                        </div>
                                    ) : (
                                    relatedProduct.discount ? (
                                        <div className="product-with-discount">
                                            <div className="discount-label">-{relatedProduct.discount}%</div>
                                            <img src={relatedProduct.image} alt={relatedProduct.name} />
                                            <Link to={`/product/${relatedProduct.id}`}>
                                                <button className="see-details">See Details</button>
                                            </Link>
                                        </div>
                                    ) : (
                                        <>
                                            <img src={relatedProduct.image} alt={relatedProduct.name} />
                                            <Link to={`/product/${relatedProduct.id}`}>
                                                <button className="see-details">See Details</button>
                                            </Link>
                                        </>
                                    )
                                )}
                                </div>
                            </div>
                            <div className="product-details">
                                <p><span className="bolds">{relatedProduct.name}</span></p>
                                <p>{relatedProduct.description}</p>
                                <p><span className="bolds">{relatedProduct.price}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className="botao" onClick={handleShowMoreClick}>Show More</button> 
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SingleProduct;