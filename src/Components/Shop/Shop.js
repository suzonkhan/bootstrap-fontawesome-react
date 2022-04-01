import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import Product from "../Product/Product";
import useProducts from "../hooks/useProducts";
import Cart from "../Cart/Cart";
import { addToLocalStore, getLocalStoreCart, removeCartItemFromLocalStore } from "../Utility/Utility";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useProducts();

  useEffect(() => {
    let storedCart = getLocalStoreCart();
    let cartArray = [];
    if (storedCart) {
      for (const id in storedCart) {
        const addedCart = products.find((product) => product.id === id);
        if (addedCart) {
          addedCart.quantity = storedCart[id];
          cartArray.push(addedCart);
        }
      }
    }
    setCart(cartArray);
  }, [products]);

  const addToCart = (selectedProduct) => {
    const exiet = cart.find((cartItem) => cartItem.id === selectedProduct.id);
    if (!exiet) {
      selectedProduct.quantity = 1;
      setCart([...cart, selectedProduct]);
    } else {
      selectedProduct.quantity = exiet.quantity + 1;
      const restCartItem = cart.filter(
        (product) => product.id !== selectedProduct.id
      );
      setCart([...restCartItem, selectedProduct]);
    }

    addToLocalStore(selectedProduct.id);
  };
  const removeProductFromCart = (selectedProductID) => {
    // console.log("Remove this", selectedProductID);
   const restCartItem = cart.filter((cartItem)=> cartItem.id !== selectedProductID)
  //  console.log(restCartItem);
   setCart(restCartItem)
   removeCartItemFromLocalStore(selectedProductID);
  };
  return (
    <div>
      {/* <h3>Shopping Cart - {cart.length}</h3> */}
      <h2 className="mb-5">Swhowing - {products.length}</h2>
      {/* {console.log(cart)} */}
      {cart.map((cartItem) => cartItem[0])}
      <Row>
        {products.map((product) => (
          <Product
            key={product.id}
            cart={addToCart}
            product={product}
          ></Product>
        ))}
      </Row>
    
      <div style={{display: cart.length>0 ? 'block': 'none'} } className="floting-cart">
        <div className="floting-cart-inner">
          {cart.map((cartItem) => (
            <Cart
              key={cartItem.id}
              removeFromCart={removeProductFromCart}
              cart={cartItem}
            ></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
