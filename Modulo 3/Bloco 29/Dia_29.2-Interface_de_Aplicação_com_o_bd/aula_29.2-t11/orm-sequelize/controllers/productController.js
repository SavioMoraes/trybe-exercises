// const router = require("express").Router();
const { Product } = require("../models");

const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newProduct = await Product.create({ name, description });
    return res.status(200).json(newProduct);
  } catch (e) {
    console.log(e);
    return res.status(500)
    .send({ message: "Deu pau na hora de cadastrar o produto" }); 
  }
};

// router.get("/", (req, res) => {
//   const { name } = req.body;

//   Product.findAll()
//     .then((products) => {
//       res.status(200).json(products);
//     })
//     .catch((e) => {
//       res
//         .status(500)
//         .send({ message: "Deu pau na hora de cadastrar o produto" });
//     });
// });

module.exports = {
  createProduct,
};
