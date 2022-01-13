// const names = require("./name.js");
// const sayHi = require("./utlits.js");

// const { readFileSync, writeFileSync } = require("fs");
// const path = require("path");

// const filePath = readFileSync("./data/time.txt", "utf8");
// console.log(filePath);

// // sayHi("John");
// // sayHi(names.sam);

// writeFileSync("./data/time.txt", "Time now now is" + new Date() , {
//     flag: "a",
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);

//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }
// });

// server.listen(4000);

// console.log('hello world');

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  //   res.status(200).send("Hello World");

  res.json(products);
});

// get all products

app.get("/api/products", (req, res) => {
  let newProducts = products.map((product) => {
    const { id, name, image, price } = product;

    return { id, name, image, price };
  });

  res.json(newProducts);
  //   console.log(newProducts);
});

// get single products
app.get("/api/products/:id", (req, res) => {
  // const {id}
  const singleproduct = products.find(
    (product) => product.id === Number(req.params.id)
  );
  if (!singleproduct) {
    res.status(404).send("Product not found");
  }
  res.json(singleproduct);
});

app.all("*", (req, res) => {
  res.status(404).send("404 resource not found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
