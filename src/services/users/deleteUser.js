const fs = require("fs");
const path = require("path");

const deleteUser = (id) => {
  const filePath = path.join(__dirname, "..", "..", "data", "users.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const usersData = JSON.parse(jsonData);

  const index = usersData.users.findIndex((user) => user.id === id);

  if (index === -1) {
    throw new Error("User not found", error);
  }

  usersData.users.splice(index, 1);
  return id;
};

module.exports = deleteUser;
