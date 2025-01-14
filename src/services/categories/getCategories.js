const fs = require("fs");
const path = require("path");

const getCategories = () => {
  const filePath = path.join(__dirname, "..", "..", "data", "categories.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const categoriesData = JSON.parse(jsonData);
  let categories = categoriesData.categories;

  return categories;
};

module.exports = getCategories;
