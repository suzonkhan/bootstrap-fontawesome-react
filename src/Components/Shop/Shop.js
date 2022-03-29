import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Shop = () => {
const [prosucts, setProducts] = useState([]);
useEffect( () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json') 
    .then(response => response.json())
    .then(data => setProducts(data))
}, [])
console.log(prosucts);
    return (
        <div>
            <h2>I am Shop {prosucts.length}</h2>
            <Row>
                {prosucts.map(product => <Product key={product.id} product={product}></Product>)}
                
            </Row>
            
        </div>
    );
};

export default Shop;