const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const createCategory = (name) => {
  const filePath = path.join(__dirname, "..", "..", "data", "categories.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const categoriesData = JSON.parse(jsonData);
  const newCategory = {
    id: uuid(),
    name,
  };

  categoriesData.categories.push(newCategory);

  fs.writeFileSync(filePath, JSON.stringify(categoriesData, null, 2), "utf-8");

  return newCategory;
};

module.exports = createCategory;
