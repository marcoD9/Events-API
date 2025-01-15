const express = require("express");
const getCategories = require("../services/categories/getCategories");
const createCategory = require("../services/categories/createCategory");
const getCategoryById = require("../services/categories/getCategoryById");
const updateCategory = require("../services/categories/updateCategory");
const deleteCategory = require("../services/categories/deleteCategory");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.get("/", (req, res) => {
  const users = getCategories();
  res.status(200).json(users);
});

router.post("/", auth, (req, res) => {
  const { name } = req.body;
  const newCategory = createCategory(name);
  res.status(201).json(newCategory);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const category = getCategoryById(id);
  res.status(200).json(category);
});

router.put("/:id", auth, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedCategory = updateCategory(id, name);
  res.status(200).json(updatedCategory);
});

router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;
  const deletedCategoryId = deleteCategory(id);

  res.status(200).json({
    message: `Category with id ${deletedCategoryId} was deleted!`,
  });
});

module.exports = router;
