const router = require("express").Router();
// const { where } = require("sequelize/types");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ include: [Product] })
    .then((returnData) => res.status(200).json(returnData))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ include: [Product], where: { id: req.params.id } })
    .then((returnData) => res.status(200).json(returnData))
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((returnData) => res.status(200).json(returnData))
    .catch((err) => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id } })
    .then((returnData) => res.status(200).json(returnData))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
    .then((returnData) => res.status(200).json(returnData))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
