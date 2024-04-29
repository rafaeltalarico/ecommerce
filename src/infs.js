import React from 'react';
import trofeu from "../src//images/trofeu.png";
import verificado from "../src//images/verificado.png";
import free from "../src//images/free.png";
import suporte from "../src//images/suporte.png";

const Infs = () => {
    return (
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
    );
};

export default Infs;