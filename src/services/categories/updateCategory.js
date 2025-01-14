const fs = require("fs");
const path = require("path");

const updateCategory = (id, name) => {
  const filePath = path.join(__dirname, "..", "..", "data", "categories.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const categoriesData = JSON.parse(jsonData);
  const category = categoriesData.categories.find(
    (category) => category.id === id
  );
  category.name = category.name ?? name;

  if (!category) {
    throw new Error("Category not found", error);
  }
  return category;
};

module.exports = updateCategory;
