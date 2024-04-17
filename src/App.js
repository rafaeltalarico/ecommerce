import React from "react";
import "./App.css";
import banner1 from "../src/banner1.svg";
import bedroom from "../src/bedroom.svg";
import living from "../src/living.svg";
import dining from "../src/dining.svg";
import mesa from "../src/mesa.png";
import cadeira from "../src/cadeira.png";
import sofaGrande from "../src/sofa-grande.png";
import sofaSala from "../src/sofa-sala.png";
import abajur from "../src/abajur.png";
import sofa from "../src/sofa.png";
import sofaGrande2 from "../src/sofa-grande2.png";
import sofaPequeno from "../src/sofa-pequeno.png";
import trofeu from "../src/trofeu.png";
import verificado from "../src/verificado.png";
import free from "../src/free.png";
import suporte from "../src/suporte.png";



const NavigationMenu = () => {
  return (
    <div>
      <div className="navigation-menu">
        <div className="left-side">
          <h2 className="store-name">Furniro</h2>
        </div>
        <div className="center">
          <ul className="menu-list">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right-side">
          <span className="icon">👤</span>
          <span className="icon">❤️</span>
          <span className="icon">🔍</span>
          <span className="icon">🛒</span>
        </div>
      </div>
      <img src={banner1} alt="Banner" />
      <h3>Browse the range</h3>
      <div className="image-container">
        <div className="image-item">
          <img src={bedroom} alt="Bedroom" />
          <p>Bedroom</p>
        </div>
        <div className="image-item">
          <img src={living} alt="Living" />
          <p>Living</p>
        </div>
        <div className="image-item">
          <img src={dining} alt="Dining" />
          <p>Dining</p>
        </div>
        
      </div>
      <h3>Our Products</h3>
      <div className="container-sales">
        <div className="image-products">
          <div className="products">
            <div className="product-with-discount"> {/* Produto com desconto */}
              <div className="discount-label">-30%</div> {/* Etiqueta de desconto */}
              <img src={mesa} alt="Mesa" />
            </div>
            <div className="product-details">
              <p><span className="bolds">Syltherine</span></p>
              <p>Stylish cafe chair</p>
              <p><span className="bolds">Rp 2.5000.000</span> <span className="risk">Rp 3.500.000</span></p>
            </div>
          </div>
          <div className="products">
            <img src={cadeira} alt="Cadeira" />
            <div className="product-details">
              <p><span className="bolds">Leviosa</span></p>
              <p>Stylish cafe chair</p>
              <p><span className="bolds">Rp 2.5000.000</span></p>
            </div>
          </div>
          <div className="products">
            <div className="product-with-discount"> {/* Produto com desconto */}
              <div className="discount-label">-50%</div> {/* Etiqueta de desconto */}
              <img src={sofaGrande} alt="sofaGrande" />
            </div>
            <div className="product-details">
              <p><span className="bolds">Lolito</span></p>
              <p>Luxury big sofa</p>
              <p><span className="bolds">Rp 7.000.000</span> <span className="risk">Rp 14.000.000</span></p>
            </div>
          </div>
          <div className="products">
            <div className="new-product"> {/* Produtos novos */}
              <div className="new-label">New</div> {/* Etiqueta de produto novo */}
              <img src={sofaSala} alt="sofaSala" />
            </div>
            <div className="product-details">
              <p><span className="bolds">Respira</span></p>
              <p>Outdoor bar table and stool</p>
              <p><span className="bolds">Rp 500.000</span></p>
            </div>
          </div>
        </div>
        <div className="image-products">
          <div className="products">
            <img src={abajur} alt="Abajur" />
            <div className="product-details">
              <p><span className="bolds">Grifo</span></p>
              <p>Night lamp</p>
              <p><span className="bolds">Rp 1.500.000</span></p>
            </div>
          </div>
          <div className="products">
            <div className="new-product"> {/* Produtos novos */}
              <div className="new-label">New</div> {/* Etiqueta de produto novo */}
              <img src={sofa} alt="Sofa" />
            </div>
            <div className="product-details">
              <p><span className="bolds">Muggo</span></p>
              <p>Small mug</p>
              <p><span className="bolds">Rp 150.000</span></p>
            </div>
          </div>
          <div className="products">
            <div className="product-with-discount"> {/* Produto com desconto */}
              <div className="discount-label">-50%</div> {/* Etiqueta de desconto */}
              <img src={sofaGrande2} alt="sofaGrande2" />
            </div> 
            <div className="product-details">
              <p><span className="bolds">Pingky</span></p>
              <p>Cute bed set</p>
              <p><span className="bolds">Rp 7.000.000</span> <span className="risk">Rp 14.000.000</span></p>
            </div>
          </div>
          <div className="products">
            <div className="new-product"> {/* Produtos novos */}
              <div className="new-label">New</div> {/* Etiqueta de produto novo */}
              <img src={sofaPequeno} alt="sofaPequeno" />
            </div>
            <div className="product-details">
              <p><span className="bolds">Potty</span></p>
              <p>Minimalist flower pot</p>
              <p><span className="bolds">Rp 500.000</span></p>
            </div>
          </div> 
        </div>
        <div className="button-container">
              <button className="botao">Show More</button>
        </div>
      </div>
      <div className="container-infs">
        <div className="describes-infs">
          <div className="quality">
            <div className="icone">
              <img src={trofeu} alt="Trofeu" />
            </div>
            <div className="mkt">
              <p><span className="title">High Quality</span></p>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="protection">
            <div className="icone">
              <img src={verificado} alt="Verificado" />
            </div>
            <div className="mkt">
              <p><span className="title">Warranty Protection</span></p>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="shipping">
            <div className="icone">
              <img src={free} alt="Free" />
            </div>
            <div className="mkt">
              <p><span className="title">Free Shipping</span></p>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className="support">
            <div className="icone">
              <img src={suporte} alt="Suporte" />
            </div>
            <div className="mkt">
              <p><span className="title">24 / 7 Support</span></p>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="rodape">
          <div className="principal">
            <div className="funiro">
              <p className="title">Funiro.</p>
              <p className="gray-text-normal">400 University Drive Suite 200 Coral <br />Gables, <br />FL 33134 USA</p>
            </div>
            <div className="links">
              <p className="gray-text">Links</p>
              <p className="negrito">Home</p>
              <p className="negrito">Shop</p>
              <p className="negrito">About</p>
              <p className="negrito">Contact</p>
            </div>
            <div className="help">
              <p className="gray-text">Help</p>
              <p className="negrito">Payment Options</p>
              <p className="negrito">Returns</p>
              <p className="negrito">Privacy Policies</p>
            </div>
            <div className="newsletter">
              <p className="gray-text">Newsletter</p>
              <div class="subscribe-container">
                <p className="gray-text-normal">Enter Your Email Address</p>
                <p className="negrito">SUBSCRIBE</p>
              </div>
            </div>
          </div>
          <div className="reserved">
            <p>2023 furino. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>

  );
};


// Rest of the code...
  

  export default NavigationMenu;