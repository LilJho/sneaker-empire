const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

//getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array
sneaks.getProducts("Yeezy Cinder", 10, function (err, products) {
  console.log(products);
});
