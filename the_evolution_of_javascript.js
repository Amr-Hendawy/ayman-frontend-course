// From Chaos To Order

// const nameSpace = {
//   cart: [],

//   product1: {
//     id: 0,
//     name: "iphone 17 pro max",
//     price: 1000,
//   },
//   product2: {
//     id: 1,
//     name: "Samsung TV 55",
//     price: 2500,
//   },
//   product3: {
//     id: 2,
//     name: "Apple pro Max",
//     price: 1800,
//   },
//   product4: {
//     id: 3,
//     name: "Dell 17 TV",
//     price: 750,
//   },

//   addProduct: function (product) {
//     this.cart.push(product);
//   },

//   removeProduct: function (id) {
//     this.cart = this.cart.filter((item) => item.id !== id);
//   },

//   getTotalPrice: function () {
//     return this.cart.reduce((total, item) => total + item.price, 0);
//   },

//   getProductCount: function () {
//     return this.cart.length;
//   },

//   printRecipt: function () {
//     console.table(this.cart);
//   },
// };

const namespace = (function () {
  const cart = [];

  const product1 = {
    id: 0,
    name: "iphone 17 pro max",
    price: 1000,
  };
  const product2 = {
    id: 1,
    name: "Samsung TV 55",
    price: 2500,
  };
  const product3 = {
    id: 2,
    name: "Apple pro Max",
    price: 1800,
  };
  const product4 = {
    id: 3,
    name: "Dell 17 TV",
    price: 750,
  };

  function addProduct(product) {
    cart.push(product);
  }

  function removeProduct(id) {
    cart = cart.filter((item) => item.id !== id);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  function getProductCount() {
    return cart.length;
  }
    function printRecipt() {
      console.table(this.cart);
    },
  return {

    addProduct,
    removeProduct,
    getTotalPrice,
    getProductCount,
    // printRecipt,
    product1,
  };
})();
