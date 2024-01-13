/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */
const View = {
  getJson: async(url)=>{
    // utility for GET request
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  },
  getProducts: async() => {
    // get all data and filter to get cart products data
    let allProducts = await View.getJson('http://localhost:4002/products/');
    let cartProducts = await View.getJson('http://localhost:4002/cart/');

    let cartProductsData = cartProducts.map((cartProd)=>{
      return allProducts.filter(
        (product)=>{
          return product.id == cartProd.id;
        })[0];
      });
    return cartProductsData;
  },
  makeTableCell: (text)=>{
    // utility to create td element
    const td = document.createElement('td');
    td.innerHTML = text;
    return td;
  },
  init: async() => {
    const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');

    // get data and append html in table
    const cartData = await View.getProducts();

    cartData.forEach(element => {
      const trElem = document.createElement('tr');

      const prodId = View.makeTableCell(element.id);
      const prodName = View.makeTableCell(element.name);

      trElem.appendChild(prodId);
      trElem.appendChild(prodName);

      tbodyElem.appendChild(trElem);
    });

    // console.log('TODO: Please see the above requirement');
  }
};
document.addEventListener('DOMContentLoaded', View.init);
