const fs = require("fs");
const path = require("path");

const getCategoryById = (id) => {
  const filePath = path.join(__dirname, "..", "..", "data", "categories.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const categoriesData = JSON.parse(jsonData);
  const category = categoriesData.categories.find(
    (category) => category.id === id
  );

  if (!category) {
    throw new Error("Category not found", error);
  }

  return category;
};

module.exports = getCategoryById;
