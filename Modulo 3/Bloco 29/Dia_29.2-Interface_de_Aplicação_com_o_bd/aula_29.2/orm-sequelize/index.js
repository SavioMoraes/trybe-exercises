const bodyParser = require("body-parser");
const express = require("express");
const productController = require("./controllers/productController");

const app = express();

const PORT = 3003;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/products", productController.createProduct);

app.listen(PORT, () => console.log("funfou belezura"));
