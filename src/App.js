import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from "./pages/productDetails/productDetails";
import About from "./pages/About"; // Correct import path for the About component
import { ShopContextProvider } from "./context/shop-context";
import { Nav } from 'react-bootstrap'; // Import Nav from react-bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';

import "./App.css";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} /> {/* Corrected path to "/about" */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <footer>
            <p>Created by Huma Rukshan</p>
            <a href="https://github.com/HumaRukshan25/React-Ecommerce-Site">
              <img className="github-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" />
            </a>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.youtube.com" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Nav.Link>
              <Nav.Link href="https://www.spotify.com" target="_blank">
                <FontAwesomeIcon icon={faSpotify} size="lg" />
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Nav.Link>
            </Nav>
          </footer>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
