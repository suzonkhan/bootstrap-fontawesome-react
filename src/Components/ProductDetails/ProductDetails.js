import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let {productID} = useParams();
    console.log(productID);
    const [products, setProducts] = useState([]);
    // const {productDetails, setProductDetails} = useState({});
    useEffect( ()=>{
      fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      .then(response=> response.json())
      .then(data => setProducts(data))
    } ,[]);

    // console.log(products);
    function getProductDetails (id) {
        return products.find((product) => product.id === id)
    }
    const product = getProductDetails(productID);
    // setProductDetails(currentProduct)
    console.log(product);
    // const {name, img} = product;
    return (
        <Row className='align-items-center'>
            <Col md="6">
            <img src={product?.img} alt="" />
            </Col>
            <Col>
            <h2>{product?.name}</h2>
            <p>Seller: {product?.seller}</p>
            <p>Category: {product?.category}</p>
            <p>Ratings: {product?.ratings}</p>
            <p>Price: ${product?.price}</p>
            <Button variant="primary" className="my-2">Add to cart</Button>
             
            </Col>
           
        </Row>
    );
};

export default ProductDetails;