import "./App.css";
import { Row, Col, Button, Container, Nav } from "react-bootstrap";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/Shop/Shop";
import NotFound from "./Components/NotFound/NotFound";
import CustomLink from "./Components/CustomLink/CustomLink";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
library.add(fab, fas);

function App() {
  return (
    <div className="Container">
      <nav className="main-menu">
        <ul>
          <li>
            <CustomLink to="/">
              Home <FontAwesomeIcon icon={["fab", "apple"]} /> 
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/about">
              About <FontAwesomeIcon icon={["fas", "coffee"]} />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/shop">
              Shop <FontAwesomeIcon icon={["fas", "coffee"]} />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">
              Contact <FontAwesomeIcon icon={["fas", "coffee"]} />
            </CustomLink>
          </li>
        </ul>
      </nav>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:productID" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    
    </div>
  );
}

export default App;
