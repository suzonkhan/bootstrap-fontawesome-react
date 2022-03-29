


export async function getProduct() {
    // let products = [];
    // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json') 
    // .then(response => response.json())
    // .then(data => products = data)
    const response = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    
    const products = await response.json();
    // console.log(products);
    return products;
   
}

export function getProductDetails (productID) {
    // return products.find((product) => {product.id === productID})
}

