const fs = require("fs");
const path = require("path");

const deleteCategory = (id) => {
  const filePath = path.join(__dirname, "..", "..", "data", "categories.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const categoriesData = JSON.parse(jsonData);
  const index = categoriesData.categories.findIndex(
    (category) => category.id === id
  );
  if (index === -1) {
    return null;
  }

  const deletedCategory = categoriesData.categories.splice(index, 1);

  return deletedCategory;
};

module.exports = deleteCategory;
