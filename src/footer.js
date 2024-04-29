import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;