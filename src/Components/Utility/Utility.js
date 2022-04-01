const getLocalStoreCart = () => {
  return JSON.parse(localStorage.getItem("ejoncart"));
};


const addToLocalStore = (id) => {
  let savedCart = getLocalStoreCart();
  let cartWrapper = {};

  if (!savedCart) {
    cartWrapper[id] = 1;
  } else{
    cartWrapper = savedCart;
    if(cartWrapper[id]){
        cartWrapper[id] = cartWrapper[id] + 1;
    } else{
        cartWrapper[id] = 1;
    }
  }
  localStorage.setItem("ejoncart", JSON.stringify(cartWrapper));

};

const removeCartItemFromLocalStore = (selectedProductID) =>{
    let savedCart = getLocalStoreCart();
    let newCartItems = {}
    for (const id in savedCart) {
         if (id !== selectedProductID) {
            newCartItems[id] = savedCart[id]
         }
    }
    console.log(newCartItems);
    localStorage.setItem("ejoncart", JSON.stringify(newCartItems));
}
export { addToLocalStore, getLocalStoreCart, removeCartItemFromLocalStore };
