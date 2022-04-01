import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product, cart }) => {
  const { id, name, price, img } = product;
  const navigate = useNavigate();
  const viewProduct = () => {
       
        navigate(`/product/${id}`);
  }
//  console.log(cart);

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Button onClick={()=> cart(product)} variant="primary" className="m-2">Add to cart</Button>
          <Button onClick={viewProduct} variant="outline-primary" className="m-2">Details</Button>
          {/* <Link to={`/product/${id}`}>Details</Link> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
