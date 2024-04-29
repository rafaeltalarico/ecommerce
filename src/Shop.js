import React, { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import "./styles/shop.css";
import shopBanner from "../src/images/shop-banner.png";
import filtro from "../src/images/filtro.png";
import lista from "../src/images/lista.png";
import tela from "../src/images/tela.png";
import ProductList from "./product-list";
import Infs from "./infs";
import Footer from "./footer";
import productData from "./productData";


const ensureMinimumProducts = (products, minimum) => {
    const repeated = [...products];
    while (repeated.length < minimum) {
      repeated.push(...products);
    }
    return repeated.slice(0, minimum);
  };

const Shop = () => {
    const { category } = useParams(); 
    const [page, setPage] = useState(1);
    const itemsPerPage = 16;
    const [filteredProducts, setFilteredProducts] = useState(productData);

    
    useEffect(() => {
        if (category) {
            
            const categoryProducts = productData.filter(
                (product) => product.category === category
            );
            setFilteredProducts(categoryProducts);
        } else {
            
            const productsWithMinimum = ensureMinimumProducts(productData, itemsPerPage);
            setFilteredProducts(productsWithMinimum);
        }
    }, [category]);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    return (
        <div className="pag-shop">
            <div className="container-shop">
                <div className="shop-content">
                    <h3>Shop</h3>
                    <p>Home &gt; Shop</p>
                </div>
                <img src={shopBanner} alt="shopBanner" />
            </div>
            <div className="container-filter">
                <div className="faixa">
                    <div className="icon-filter" style={{ cursor: "pointer" }}>
                        <img src={filtro} alt="filtro" />
                    </div>
                    <p>Filter</p>
                    <div className="icon-filter">
                        <img src={lista} alt="lista" />
                    </div>
                    <div className="icon-filter">
                        <img src={tela} alt="tela" />
                    </div>                    
                    <p className="results">Showing 1-16 of 32 results</p>
                    <div className="showing">
                        <p>Show<span className="number-results">16</span></p>
                    </div>
                    <div className="shortBy">
                        <p>Short by<span className="default">Default</span></p>
                    </div>
                </div>
            </div>
            
            <ProductList products={productsToDisplay} />
            
            
            <div className="pag-numbers">
                <button className="pagination-button" onClick={() => setPage(1)}>1</button>
                <button className="pagination-button" onClick={() => setPage(2)}>2</button>
                <button className="pagination-button" onClick={() => setPage(3)}>3</button>
                <button className="pagination-button">Next</button>
            </div>
            <Infs />
            <Footer />
        </div>
    );
};

export default Shop;